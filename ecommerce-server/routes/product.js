const Product = require('../models/Product');
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyTokenMiddleware');

const router = require('express').Router();

//CREATE

router.get('/', async (req, res) => {
  res.status(200).json({ product: 'product' });
});
module.exports = router;
