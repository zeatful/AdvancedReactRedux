const jwt = require('jwt-simple');
const User = require('../models/user');
const config = require('../config');

function tokenForUser(user){
    const timestamp = new Date().getTime();
    // sub = subject property, who is this about?
    // iat = issued at time
    return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signin = (req, res, next) => {
    // user already had their email and password authenticated
    // we just need to give them a token
    res.send({ token: tokenForUser(req.user) });
};

exports.signup = (req, res, next) => {
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
                    res.json({ token: tokenForUser(user)});
                }                
            });
        }
    });
};