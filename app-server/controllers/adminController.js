const User = require('../schemas/userSchema');
const Group = require('../schemas/groupSchema');
const passport = require('passport');

exports.registerUser = function(req, res, next) {
    User.findOne({username: req.body.username})
    .then(user => {
        if (user) {
            let err = new Error('Username is already in use');
            err.statusCode = 400;
            throw err;
        }
    })
    .then(() => {
        let newUser = new User(req.body);

        return newUser.save();
    })
    .then(() => {
        passport.authenticate('local')(req, res, function(err) {
            if (err) {
                throw err;
            }

            return res.send(req.user);
        });
    })    
    .catch(err => next(err));
}

exports.getUsers = function(req, res) {
    User.find((err, users) => {
        if (err) {
            throw err;
        }
        return res.json(users);
    })
};

exports.getGroups = function(req, res) {
    Group.find((err, groups) => {
        if (err) {
            throw err;
        }
        return res.json(groups);
    })
};

exports.addGroup = function(req, res) {
    let group = new Group(req.body);
    group.save()
        .then(group => {
            console.log(`${group.title} added`);
        })
        .catch(err => {
            console.log('Failed to add. ', err);
        })
};

exports.removeUser = function(req, res) {
    User.findByIdAndRemove({_id: req.params.id})
        .then( _ => `${req.body.username} was deleted`);
}

exports.removeGroup = function(req, res) {
    Group.findByIdAndRemove({_id: req.params.id})
        .then( _ => `${req.body.name} was deleted`);
}