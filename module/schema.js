const mongoose = require('mongoose');
const { stringify } = require('querystring');
const Schema = mongoose.Schema;
const dbSchema = new Schema({
    company: {type: String, required: true},
    your_post: {type: String, required: true},
    Feedback: {type: String, required: true}
}, { timestamps: true});
const Feed = mongoose.model('Feed', dbSchema);
module.exports = Feed;