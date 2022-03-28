const router = require('express').Router();
const User = require('../models/User');
const { verifyToken, verifyTokenAndAuthorization } = require('./verifyTokenMiddleware');
const CryptoJS = require('crypto-js');

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
    req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString();
  }

  //in other to craete something and send to the user  { new: true }
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
    console.log(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
