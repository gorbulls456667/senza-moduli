var statusCode = 200;
var headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type"
};

var stripe = require('stripe')('sk_test_Gv4Jqwx4XttgEV2Xgl2xAieB00ESIjywnI', {
  maxNetworkRetries: 2, // Retry a request twice before giving up
});

exports.handler = function(event, context, callback) {

    var paymentIntent = stripe.paymentIntents.create({
        amount: 2000,
        currency: 'eur',
        payment_method_types: ['card'],
    }).then(
        function(err, paymentIntent) {
            // // asynchronously called
            // if (err) {
            //     callback(null, {
            //         statusCode: 200,
            //         body: "Errore :" + err.message + ", codice errore " + err.code,
            //     });
            // } else 
            if (paymentIntent) {
                callback(null, {
                    statusCode: 200,
                    body: "Eccolo!!! " + paymentIntent.client_secret,
                });
            } else {
                callback(null, {
                    statusCode: 200,
                    body: "Non si sa che cazzo è successo"
                });
            }
        }
    );
}

