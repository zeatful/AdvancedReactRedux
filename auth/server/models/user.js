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

const ModelClass = mongoose.model('user', userSchema);

module.exports = ModelClass;