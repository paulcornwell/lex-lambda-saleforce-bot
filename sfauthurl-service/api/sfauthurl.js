'use strict';
var salesforce  = require('node-salesforce');

module.exports.submit = (event, context, callback) => {

  var oauth2 = new salesforce.OAuth2({
      clientId : process.env.CLIENT_ID,
      clientSecret : process.env.CLIENT_SECRET,
      redirectUri : process.env.REDIRECT_URI
  });
    
  var authUrl = oauth2.getAuthorizationUrl({ scope: 'api id web refresh_token' });
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! authUrl: ' + authUrl,
      input: event,
    }),
  };
  callback(null, response);

  //res.send(authUrl+"&state="+obj.username);
};
