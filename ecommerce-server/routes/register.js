const router = require('express').Router();
const User = require('../models/User');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

//create all CRUD route relating to user registration. we are only posting

//you can also use express-validator  (middleware) to validate the fileds like check if password length is...

//AES: Advanced Encryption Standard
router.post('/', async (req, res) => {
  const newUser = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SECRET).toString(),
  });
  res.json({ newUser });

  //wrap around with try/catch block
  //
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser); //201 somthing was created
  } catch (err) {
    res.status(500).json(err); //send to the client,internal server error
  }
});

router.post('/postme', (req, res) => {
  const name = req.body.firstname;
  res.json({ name });
});
module.exports = router;
