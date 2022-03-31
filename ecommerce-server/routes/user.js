const router = require('express').Router();
const User = require('../models/User');
const { verifyTokenAndAdmin, verifyTokenAndAuthorization } = require('./verifyTokenMiddleware');
const CryptoJS = require('crypto-js');
const mongoose = require('mongoose');

//create all CRUD route relating to the user

//to update user one has to be the owner of the account or an admin.we can use the miidleware properties to run this check
//first get the user from header using the secret key to see if the token is valid
//if valid then retrive then set the req.user to the user and continue...if (req.user.id === req.params.id || req.user.isAdmin) { req.user coming from the verifyToken middleware

//we may have to perform this check multiple times in other routes so create a verifyTokenAndAuthorization

//$set set whtever changes you have in the db to whatever on the body

//UPDATE USER
router.put('/:id', verifyTokenAndAuthorization, async (req, res) => {
  //after token verification if there is a new password then encrypt it
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SECRET).toString();
  }

  //in other to create something and send to the user  { new: true }
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
    // not returning updated user
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete('/:id', verifyTokenAndAuthorization, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json('User deleted...');
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET USER
router.get('/find/:id', verifyTokenAndAdmin, async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) return false;
    //console.log(id);
    //console.log(req.params.id);
    const user = await User.findById(id);
    // res.json(req.params.id);
    const { ...others } = user;
    // const { password, ...others } = user._doc;

    // res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
