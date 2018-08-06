const jwt = require('jwt-simple');
const User = require('../models/user');
const config = require('../config');

exports.signup = function (req, res, next){
    const email = req.body.email;
    const password = req.body.password;

    // check if user already exists for the email
    User.findOne({email}, (err, user) => {
        if(err){
            return next(err);
        } else if(user){
            // unprocessable entity
            return res.status(422).send({error: 'Email is already in use!'});
        } else {
            const user = new User({ email, password});
            user.save(err => {
                if(err){ 
                    return next(err);
                } else {
                    res.json({ success: true});
                }                
            });
        }
    });
};