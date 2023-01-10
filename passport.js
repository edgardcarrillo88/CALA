const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy


passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback",
    scope:['profile', 'email']
  },
  function(accessToken, refreshToken, profile, cb) {
    cb(null,profile)
  }
));


passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
  passport.deserializeUser((user, done) =>{
      done(null, user);
  });