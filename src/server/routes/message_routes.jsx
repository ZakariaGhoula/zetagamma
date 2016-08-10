var Message = require('../models/Message');
var Conversation = require('../models/Conversation');
var bodyparser = require('body-parser');

module.exports = function (router) {
    router.use(bodyparser.json());


    // query DB for messages for a specific conversation
    router.get('/messages/:conversation', function (req, res) {
        Message.find({conversationID: req.params.conversation}, {
            id: 1,
            conversationID: 1,
            text: 1,
            user: 1,
            time: 1,
            read: 1,
            _id: 0
        }, function (err, data) {
            if (err) {
                console.log(err);
                return res.status(500).json({msg: 'internal server error'});
            }


            res.json(data);
        });
    });


    // updata DB for read messages for a specific conversation

    router.get('/messages/read/:id_conversation/:id_user', function (req, res) {
        var conditions = {
            "conversationID": req.params.id_conversation,
            "user.id": {"$eq": (req.params.id_user)}
        }
            , update = {$set: {read: true}}
            , options = {multi: true};

        Message.update(conditions, update, options, callback);
        function callback(err, numAffected) {

            console.log(numAffected);
            // numAffected is the number of updated documents
            Conversation.aggregate([{"$match": {$or: [{between: req.params.id_user}, {private: true}]}},
                {
                    "$lookup": {
                        "from": "messages",
                        "localField": "id",
                        "foreignField": "conversationID",
                        "as": "messages"
                    }
                }, {"$sort": {"time": -1}}
            ], function (err, data) {
                if (err) {
                    console.log(err);
                    return res.status(500).json({msg: 'internal server error'});
                }

                res.json({result: data});
            });
        }
    });


    //post a new message to db
    router.post('/message/add', function (req, res) {
        var newMessage = new Message(req.body);
        newMessage.save(function (err, data) {
            if (err) {
                console.log(err);
                return res.status(500).json({msg: 'internal server error'});
            }
            Conversation.update(
                {id: data.conversationID},
                {
                    $set: {
                        time: data.time
                    }
                }, function (err2, data) {
                    res.json({result: data});
                }
            )
        });
    });

    //-- query to get notification message header
    router.get('/notifications-messages', function (req, res) {
        var token = req.headers.token;
        //-- list id conversation id user
        Message.aggregate([
            {
                "$match": {
                    "user.token": {"$eq": token}
                }
            },
            {
                "$group": {
                    "_id": "$conversationID",
                    "id_user": {"$addToSet": "$user.id"}

                }


            }
        ], function (err, data) {
            if (err) {
                console.log(err);
                return res.status(500).json({msg: 'internal server error'});
            }
            if (data.length > 0) {
                var id_user = null;//data[0].id_user[0];

                if (typeof data[0] !== "undefined" && data[0] != null
                    && typeof data[0].id_user[0] !== "undefined" && data[0].id_user[0] != null) {
                    id_user = data[0].id_user[0];
                }
                /* var list_conversation = [];
                 data.map(function (conv, i) {
                 if (typeof conv.id_user[0] !== "undefined" && conv.id_user[0] != null) {
                 id_user = conv.id_user[0];
                 }
                 list_conversation.push(conv._id);
                 });
                 */
                if (id_user != null) {
                    Conversation.aggregate(
                        [{"$match": {"$or": [{"between": id_user}, {"private": true}]}},
                            {
                                "$lookup": {
                                    "from": "messages",
                                    "localField": "id",
                                    "foreignField": "conversationID",
                                    "as": "messages"
                                }
                            },
                            {
                                "$group": {
                                    "_id": "$id",
                                    "messages": {
                                        "$addToSet": {
                                            "$filter": {
                                                "input": "$messages",
                                                "as": "mess",
                                                "cond": {"$and": [{"$ne": ["$$mess.user.id", id_user]}, {"$eq": ["$$mess.read", false]}]}
                                            }
                                        }
                                    }

                                }
                            }], function (err2, data2) {
                            if (err2) {
                                console.log(err2);
                                return res.status(500).json({msg: 'internal server error'});
                            }
                            var notification_message = {
                                'read': true
                                , "number": 0
                                , "number_read": 0
                            };
                            data2.map(function (conversation, i) {
                                if (typeof conversation.messages[0] !== "undefined" && conversation.messages[0].length > 0) {
                                    notification_message.number_read++;
                                    notification_message.read = false;
                                }
                                notification_message.number++;

                            });
                            res.json({"result":notification_message});
                        }
                    );
                }
                else {
                    res.json(null)
                }


            }
            else
                res.json(null)
        });


    });
}
