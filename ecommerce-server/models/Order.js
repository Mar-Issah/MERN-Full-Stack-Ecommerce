const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema(
  //products is an array of productd and quantity. the type and default is not an object it only defines/describe the productid and quantity
  {
    userId: { type: String, required: true },
    products: [
      {
        productId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    amount: { type: Number, required: true },
    //below is object because the strpie will return object since adress is line 1, line 2 etc
    address: { type: Object, required: true },
    status: { type: String, default: 'pending' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Order', OrderSchema);
