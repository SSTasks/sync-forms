var fs = require("fs");
var url = require('url');
var qs = require("querystring");

var mongoose = require('mongoose');
var formModel = mongoose.model('Form');

exports.getAllForms = function(req, res, next) {
    formModel.find({}, function(err, docs) {
        if(err) {
            let err = new Error('Server Error');
            err.statusCode = 400;
            throw err;
        } else {
            res.status(200).json(docs)
        }
    });
}

// add new form
module.exports.addForm = function(req, res) {
    formModel.create(req.body, function (err, doc) {
        if (err) {
            console.log(err);
            res.send({status:500, msg: "Current form wasn't save"});
        }
        console.log(`Item ${doc.title} was created`);

        formModel.find({}, function(err, doc){
            res.type('application/json');
            res.jsonp(doc);
        });
    });
};

// update current form
module.exports.updateForm = function(req, res) {
    formModel.findOneAndUpdate({"_id": req.body._id},
        {
            $set: {
                'title': req.body.title,
                'author': req.body.author,
                'preview': req.body.preview,
                'groups': req.body.groups,
                'rows': req.body.rows,
                'description': req.body.description
            }
        }, {new: true}, function (err, doc) {
            console.log(`Item ${doc.title} was updated`);

        formModel.find({}, function(err, doc){
            res.type('application/json');
            res.jsonp(doc);
        });
    });
};

// delete form
module.exports.delForm = function(req, res) {
    console.log(req.params.id);
    formModel.remove({"_id":req.params.id}, function(err, doc){
        console.log(`Item _id: ${req.params.id} was deleted`);

        formModel.find({}, function(err, doc){
            res.type('application/json');
            res.jsonp(doc);
        });
    });
};


