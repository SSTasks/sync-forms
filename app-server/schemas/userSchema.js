const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { Schema } =  mongoose;

const saltRounds = 10;

const userSchema = new Schema ({
    username: String,
    password: String,
    name: String,
    email: String,
    group: String,
    role: String
});

userSchema.pre('save', function(next) {
    const user = this;

    if (!user.isModified('password')) {
        return next();
    }

    bcrypt.hash(user.password, saltRounds, function(err, hash) {
        if (err) {
            return next(err);
        }

        user.password = hash;
        next();
    });
});

userSchema.methods.comparePassword = function (passwordToCheck, callback) {
    bcrypt.compare(passwordToCheck, this.password, (err, isOk) => {
        if (err) {
            return callback(err);
        }

        if (!isOk) {
            return callback(null, false);
        }

        callback(null, this);
    }); 
}

module.exports = mongoose.model("User", userSchema);
