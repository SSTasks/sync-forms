const User = require('../schemas/userSchema');
const passport = require('passport');

exports.registerUser = function(req, res) {
    User.findOne({username: req.body.username})
    .then(user => {
        if (user) {
            throw new Error('Username is already in use');
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
    .catch(err => {
        console.log(err);

        if (err.message === 'Username is already in use') {
            return res.status(400).send(err.message);
        } else {
            return res.sendStatus(500);
        }
    });
}

exports.loginUser = function(req, res) {
    // let userToSend = Object.assign({}, req.user); // ?

    // delete userToSend.password;
    res.send(req.user);
}

exports.logoutUser = function(req, res) {
    req.logout();
    res.redirect('/');
}
