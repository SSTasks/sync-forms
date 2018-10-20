var fs = require("fs");
var url = require('url');
var qs = require("querystring");

var mongoose = require('mongoose');
var teamModel = mongoose.model('team');


//GET ALL THE TEAM PLAYERS
module.exports.getTeam = function(req, res) {
    teamModel.find({}, function(err, doc) {
        res.type('application/json');
        res.jsonp(doc);
    });
};


