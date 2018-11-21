const User = require('../schemas/userSchema');
const Group = require('../schemas/groupSchema');
const passport = require('passport');

const bcrypt = require('bcrypt');
const saltRounds = 10;

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
        console.log(`${group.name} added`);
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

exports.getUser = function(req, res) {
    if(req.params.name){
        User.findOne({username: req.params.name})
        .then( user => res.json(user))
        .catch( err => console.log(err));
    }
}

exports.getGroup = function(req, res) {
    if(req.params.name){
        Group.findOne({name: req.params.name})
        .then( (group) => res.json(group) )
        .catch( err => console.log(err) )
    }
}

exports.updateUser = function(req, res) {
    console.log('am updating', req.body.username);
    if(req.body){
        let updatedFields = prepareObject(req.body);
        User.update({username: req.body.previousName}, updatedFields)
        .then( _ => `${req.body.username} was updated` )
        .catch( err => console.log(err) )
    }
}

exports.updateGroup = function(req, res) {
    console.log('am updating', req.body.name);
    if(req.body){ 
        let updatedFields = prepareObject(req.body);
        Group.update({name: req.body.previousName}, updatedFields)
        .then( _ => `${req.body.name} was updated` )
        .catch( err => console.log(err) )
    }
}

function prepareObject(obj) {
    let result = {};
    for(let key in obj){
        if(key === 'role'){
            result[key] = obj[key] ? 'master' : 'interviewer';
        } else 
        if (obj[key] && key !== 'previousName'){
            result[key] = obj[key];
        }
    }
    
    return result;
}
