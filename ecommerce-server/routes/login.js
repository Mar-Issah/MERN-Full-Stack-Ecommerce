const router = require('express').Router();
const User = require('../models/User');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

//create all CRUD route relating login
//user enters username and password from client and post it
//since the user is registered. There is record of username and password in db
router.post('/', async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;

    //find user in db. this will return user with the registered fields
    const user = await User.findOne({ username: username });

    //401: unauthorized if no user found in db
    !user && res.status(401).json('Wrong credentials!');

    //above returns encrypted password so lets decrypt it
    const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SECRET);

    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
    // originalPassword !== password && res.status(401).json('Wrong credentials!');
    res.status(200).json({ originalPassword });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
