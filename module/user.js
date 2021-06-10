const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const db = new Schema({
    googleId: {
        type: String, required: true
    }
});
const User = mongoose.model('User', db);
module.exports = User;
