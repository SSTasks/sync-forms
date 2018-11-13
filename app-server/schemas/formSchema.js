const mongoose = require('mongoose');
const { Schema } =  mongoose;
mongoose.Promise = global.Promise;

var formScheme = new Schema({
    title: String,
    author: String,
    preview: String,
    groups: Array,
    rows: Array,
    description: String
});

mongoose.model("Form", formScheme);