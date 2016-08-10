'use strict';

var mongoose = require('mongoose');

var conversationSchema = mongoose.Schema({
    id: { type:String, unique: true },
    private: Boolean,
    between: Array,
    job_id :String,
    time: String
});

module.exports = mongoose.model('Conversation', conversationSchema);