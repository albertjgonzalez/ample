var stripe = require("stripe")("sk_test_BQMxREM9UdA1cb3KjDKLXjY2");

module.exports = {
  charge: function(req, res) {
    const token = req.body.stripeToken; // Using Express
  

    stripe.charges.create({
      amount: 100,
      customer: token,
      currency: "usd",
      source: "tok_amex", // obtained with Stripe.js
      description: `charges for ${req.body.email}`
    }, function(err, charge) {
      // asynchronously called
      res.send(charge)
    });
  }
};
