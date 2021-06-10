const mongoose = require('mongoose');
const { stringify } = require('querystring');
const Schema = mongoose.Schema;
const dbSchema = new Schema({
    fname: {type: String, required: true},
    lname: {type: String, required: true},
    city: {type: String, required: true},
    pin: {type: Number, required: true},
    avatar: {type: String, required: true}
});
const Cv = mongoose.model('Cv', dbSchema);
module.exports = Cv;