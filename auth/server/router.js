// Auth libraries
const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

// JSON and sanitization libraries
const json = require('body-parser').json;
const sanitize = require('mongo-sanitize');

// passport authentication interceptor, no session to not setup cookies
const requireAuth = passport.authenticate('jwt', {session: false});
const requireSignin = passport.authenticate('local', {session: false});

// need to sanitize all JSON to and from mongoose
const cleanBody = (req, res, next) => {
    req.body = sanitize(req.body);
    next();
}

module.exports = app => {
    app.post('/signin', json(), cleanBody, requireSignin, Authentication.signin);
    app.post('/signup', json(), cleanBody, Authentication.signup);
};