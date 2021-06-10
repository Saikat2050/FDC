const router = require('express').Router();
const passport = require('passport');
const multer  = require('multer');
const upload = multer({ dest: 'uploads/' });
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passportSetup = require('../config/passport-setup');

const authController = require('../controllers/authController');
const fileController = require('../controllers/fileController');
const stripeController = require('../controllers/stripeController');
router.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] }));

router.get('/auth/google/callback', authController.google_auth);

router.get('/', authController.home);
router.post('/',authController.signup);
router.post('/sktn97rfg',authController.login);
router.get('/login', authController.login_page);
router.get('/signup',authController.sign_up);
router.post('/forget554',authController.forget);
router.get('/reset/:id/:pass',authController.reset);
router.post('/gdfashuag65464hga',authController.reset_pass); 
router.get('/forget',authController.forget_page);
   
    
router.get('/add',fileController.feed_back);
router.post('/saikkkkrs69',fileController.add_feed);
router.get('/feedback/:name',fileController.submit_feed);
router.get('/newhomefcuk554',fileController.new_home);
router.get('/apply',fileController.apply);
router.post('/profile', upload.single('avatar'), fileController.resume)
router.get('/xyz',fileController.c_xyz);
router.get('/abc',fileController.c_abc);
router.get('/sr',fileController.c_sr);
              
router.get('/payment', stripeController.payment);
router.post('/dlfvsdzmfl', stripeController.stripe_pay);
                  
                                   

                  
module.exports = router;
