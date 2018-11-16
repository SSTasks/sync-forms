const User = require('../schemas/userSchema');
const Group = require('../schemas/groupSchema');
const passport = require('passport');

exports.loginUser = function(req, res) {
    // let userToSend = Object.assign({}, req.user); // ?

    // delete userToSend.password;
    res.send(req.user);
}

exports.logoutUser = function(req, res) {
    req.logout();
    res.redirect('/');
}

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

exports.getUser = function(req, res) {
    console.log('getting user...');
    console.log(req.params.name);
    User.findOne({username: req.params.name})
        .then( (err, user) => {
            if (err) {
                throw err;
            }
            console.log(user);
            return res.json(user);
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