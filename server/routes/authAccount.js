const express = require("express");
const router = express.Router();
const passport = require("passport")

router.get('/google',
  passport.authenticate('google', { scope:
      [ 'profile' ] }
));

router.get( '/google/callback',
    passport.authenticate( 'google', {
        successRedirect: 'http://localhost:3000/order',
        failureRedirect: 'http://localhost:3000/login'
}));

module.exports = router;
