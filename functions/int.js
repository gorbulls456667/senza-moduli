exports.handler = (event, context, callback) => {
	var stripe = require('stripe')('sk_test_Gv4Jqwx4XttgEV2Xgl2xAieB00ESIjywnI');
	console.log(stripe);
	console.log("non funziona?");

	stripe.paymentIntents.create(
	  {
	    amount: 400000,
	    currency: 'eur',
	    payment_method_types: ['card'],
	  },
	  function(err, paymentIntent) {
	    // asynchronously called
	  }
	);
}
