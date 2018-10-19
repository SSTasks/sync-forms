var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

//setting the schema
var teamScheme = new Schema({
    name: String,
    github: String
});

mongoose.model("team", teamScheme); // create module with schema
