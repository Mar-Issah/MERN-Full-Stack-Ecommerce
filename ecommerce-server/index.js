const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
//const userRoute = require('./routes/user');
const registerRoute = require('./routes/register');
const loginRoute = require('./routes/login');
// const productRoute = require('./routes/product');
// const cartRoute = require('./routes/cart');
// const orderRoute = require('./routes/order');
// const stripeRoute = require('./routes/stripe');

app.use(express.json());

app.use('/api/register', registerRoute);
app.use('/api/login', loginRoute);
// app.use('/api/users', userRoute);
// app.use('/api/products', productRoute);
// app.use('/api/carts', cartRoute);
// app.use('/api/orders', orderRoute);
// app.use('/api/checkout', stripeRoute);

const uri = process.env.MONGO_URI;
const port = process.env.PORT || 5000;
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Mongodb database connected successfully'))
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
