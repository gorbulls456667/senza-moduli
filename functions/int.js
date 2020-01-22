/*exports.handler = (event, context, callback) => {
	var stripe = require('stripe')('sk_test_Gv4Jqwx4XttgEV2Xgl2xAieB00ESIjywnI');
	console.log(stripe);
	console.log("non funziona?");

	stripe.paymentIntents.create(
	  {
	    amount: 123000,
	    currency: 'eur',
	    payment_method_types: ['card'],
	  },
	  function(err, paymentIntent) {
	    // asynchronously called
	  }
	);
}
*/

const statusCode = 200;
const headers = {
  "Access-Control-Allow-Origin" : "*",
  "Access-Control-Allow-Headers": "Content-Type"
	
	
};



const stripe = require('stripe')('sk_test_Gv4Jqwx4XttgEV2Xgl2xAieB00ESIjywnI');



exports.handler = (event, context, callback) => {
	// Set your secret key: remember to change this to your live secret key in production
	// See your keys here: https://dashboard.stripe.com/account/apikeys


	const paymentIntent = stripe.paymentIntents.create(
	{
		amount: 1099,
		currency: 'eur',
		payment_method_types: ['card'],
	},
	function(err, paymentIntent) {
		callback(null, {
			statusCode,
			headers,
			body: /*JSON.stringify({paymentIntent})*/  paymentIntent
		});
	}
	);


}



