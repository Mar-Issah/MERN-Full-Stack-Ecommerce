const router = require('express').Router();
const KEY = process.env.STRIPE_KEY;
const stripe = require('stripe')(KEY);

//how you require stripe together with key

//stripe is most popular but you can use others like paypal etc
//https://stripe.com/ create an account =>got to developer tab
//Api keys => publishable key (FE) and secret key (BE)

//how to create a charge requset use the charges.create and enter your http request (config) is first parameter and second is is the callback fxn. takes err or res if err print if response print

//when we make any payment on the FE the stripe will return a tokenId. sve in the source

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
