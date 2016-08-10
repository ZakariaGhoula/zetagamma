var Conversation = require('../models/Conversation');
var bodyparser = require('body-parser');

module.exports = function (router) {
    router.use(bodyparser.json());


    // this route returns all channels including private channels for that user
    router.get('/conversations/:id', function (req, res) {

        Conversation.aggregate([{"$match": {$or: [{between: req.params.id}, {private: true}]}},

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

            res.json(data);
        });
    });



    router.get('/conversations/get/:id_conversation', function (req, res) {

        Conversation.aggregate([{"$match": {"$or": [{"id": req.params.id_conversation}]}},

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

            res.json({conversation: data});
        });
    });


    router.get('/conversations/get/:id1/:id2', function (req, res) {
        Conversation.aggregate(
            [{"$match": {"between": {"$all": [parseInt(req.params.id1), parseInt(req.params.id2)]}, "private": true}},
                {"$limit": 1}


            ], function (err, data) {
                if (err) {
                    console.log(err);
                    return res.status(500).json({msg: 'internal server error'});
                }

                res.json(data);
            });

    });

    // post a new user to channel list db
    router.post('/conversations/new_conversation', function (req, res) {
        var newConversation = new Conversation(req.body);
        newConversation.save(function (err, data) {
            if (err) {
                console.log(err);
                return res.status(500).json({msg: 'internal server error'});
            }

            res.json({conversation: data});
        });
    });


}