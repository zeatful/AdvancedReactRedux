const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const userSchema = new Schema({
    email: { type: String, required: true, unique: true, lowercase: true},
    password: { type: String, required: true }
});

// On Save Hook, encrypt password
userSchema.pre('save', next => {
    const user = this;
    bcrypt.genSalt(10, (err, salt) => {
        if(err) { return next(err);}
        bcrypt.hash(user.password, salt, null, (err, hash) => {
            if(err) { return next(err);}
            user.password = hash;
            next();
        });
    });
});

userSchema.methods.comparePassword = (candidatePassword, callback) => {
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
        if (err) { return callback(err);}
        callback(null, isMatch);
    });
}

const ModelClass = mongoose.model('user', userSchema);

module.exports = ModelClass;