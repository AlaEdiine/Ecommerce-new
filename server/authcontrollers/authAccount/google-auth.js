const { UUSER } = require('../../Models/_user');
var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
require("dotenv").config();

module.exports = (passport) => {

    passport.serializeUser((user,done)=>{
        done(null, user)
    })

    passport.deserializeUser((user,done)=>{
        done(null, user)
    })

    passport.use(new GoogleStrategy({
        clientID:    process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:3001/auth/google/callback",
        passReqToCallback   : true
      },
      function(request, accessToken, refreshToken, profile, done) {
        UUSER.findOne({ googleId: profile.id }, function (err, user) {
            if(user === null){
              const newUser = new UUSER ({
                    googleId : profile.id
                })
                newUser.save();
                return done(newUser);
                
            }
          return done(err, user);
        });
      }
    ));
}
