'use strict';

var mongoose = require('mongoose');

var messageSchema = mongoose.Schema({
    id: String,
    conversationID: String,
    text: String,
    user: Object,
    time: String,
    read: Boolean,
});

module.exports = mongoose.model('Message', messageSchema);