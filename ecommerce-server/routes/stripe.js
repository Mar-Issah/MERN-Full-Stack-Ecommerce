const router = require('express').Router();
const KEY = process.env.STRIPE_KEY;
const stripe = require('stripe')(KEY);

//stripe is most popular but you can use others like paypal etc
//https://stripe.com/ create an account =>got to developer tab
//Api keys => publishable key (FE) and secret key (BE)
router.post('/payment', (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: 'usd',
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
