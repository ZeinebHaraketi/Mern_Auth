var express = require('express');
const passport = require('passport');
const { AddProfile, FindAllProfiles, FindSingleProfile, DeleteProfile } = require('../controllers/profile.controllers');
const { Register, Login, Test, Admin } = require('../controllers/users.controllers');
const { ROLES, inRole } = require('../security/Rolemiddleware');
var router = express.Router();

/* POST Register. */
router.post('/register', Register);
/* Login */
router.post('/login', Login);

/* profile route */
// router.get('/test',passport.authenticate('jwt', { session: false }),
// inRole(ROLES.USER),
// Test);

// router.get('/admin',passport.authenticate('jwt', { session: false }),
// inRole(ROLES.ADMIN),
// Admin);


/* add profile route */
router.post("/profiles", 
passport.authenticate("jwt", { session: false }),
AddProfile);

/* get all profiles */
router.get("/profiles", 
passport.authenticate("jwt", { session: false }),
inRole(ROLES.ADMIN),
FindAllProfiles);

/* get one profiles */
router.get("/profile", 
passport.authenticate("jwt", { session: false }),
FindSingleProfile);

/* delete profiles */
router.delete("/profiles/:id", 
passport.authenticate("jwt", { session: false }),
inRole(ROLES.ADMIN),
DeleteProfile);


module.exports = router;
