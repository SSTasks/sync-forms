
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

//setting the schema
var formScheme = new Schema({
    title: String,
    author: String,
    preview: String,
    groups: Array,
    rows: Array,
    description: String
});

mongoose.model("Form", formScheme); // create module with schema

