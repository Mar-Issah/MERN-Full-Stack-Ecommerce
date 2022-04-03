const router = require('express').Router();
const User = require('../models/User');
const { verifyTokenAndAdmin, verifyTokenAndAuthorization } = require('./verifyTokenMiddleware');
const CryptoJS = require('crypto-js');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

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
router.get('/search/:id', verifyTokenAndAdmin, (req, res) => {
  User.findById({ _id: new ObjectId(req.params.id) }, (err, data) => {
    if (err) {
      res.status(500).json(err);
    } else {
      const { password, ...others } = data._doc;
      // console.log(others);
      res.status(200).json(others);
    }
  });
});

//GET ALL USER
//we can use quety params to filter our search. so if there is no query paramsn on the url return all users
//http://localhost:5000/api/users/?new=true first sort by id and limit array to 5 users
router.get('/', verifyTokenAndAdmin, async (req, res) => {
  const query = req.query.new;
  try {
    const users = query ? await User.find().sort({ _id: -1 }).limit(5) : await User.find();

    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Stats if you  want to return user in a given period/ month
//use the aggregate which accepts an array of conditons. first get the last year dateand then get/find all document createdAt last year
//$project creates a new field/column in the document called month wwhich is the month retrieved from the createdAt date
//$group (like JS reduce), returns id which is a no. represnetation of the month and also sum of all the users create in the monthh
router.get('/stats', verifyTokenAndAdmin, async (req, res) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

  try {
    const data = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: '$createdAt' },
        },
      },
      {
        $group: {
          _id: '$month',
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
