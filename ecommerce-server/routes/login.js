const router = require('express').Router();
const User = require('../models/User');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

//create all CRUD route relating login
router.post('/', async (req, res) => {
  try {
    const username = req.body.username;
    const pass = req.body.password;

    const user = await User.findOne({ username: username });
    if (!user) {
      return res.status(401).json('Wrong credentials!');
    }

    //above returns encrypted password so lets decrypt it
    const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SECRET);

    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
    if (originalPassword !== pass) {
      return res.status(401).json('Wrong credentials!');
    }

    //after the user  is found, we want to send the user to the client, but we want to hide the password field that when jwt cames in
    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SECRET,
      { expiresIn: '3d' }
    );

    //remove the password and send other info
    //user._doc because mongo db stores othe unnecessary fields
    const { password, ...others } = user._doc;

    res.status(200).json({ ...others, accessToken });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
