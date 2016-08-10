var mongoose = require('mongoose');



var UserSchema = mongoose.Schema({
    id: { type: String, unique: true },
    last_name: String,
    firstname_name: String,
    token: String
});

module.exports = mongoose.model('User', UserSchema);