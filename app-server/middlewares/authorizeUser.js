const User = require('../schemas/userSchema');
const passport = require('passport');

module.exports = function authorizeUser(username, password, done) {
    User.findOne({ username }, (err, user) => {
        if (err) {
            return done(err);
        }

        if (!user) {
            return done(null, false); 
        }

        user.comparePassword(password, done);
    });
}

passport.serializeUser(function(user, done) {
    done(null, user.username);
});

passport.deserializeUser(function(username, done) {
    User.findOne({ username }, (err, user) => {
        done(err, user);
    });
});
