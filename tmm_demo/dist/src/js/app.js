/*
// Load the full build.
var _ = require('lodash');
// Load the core build.
var _ = require('lodash/core');
// Load the FP build for immutable auto-curried iteratee-first data-last methods.
var fp = require('lodash/fp');
 
// Load method categories.
var array = require('lodash/array');
var object = require('lodash/fp/object');
// Simplified HTTP client
var request = require('request');
request('http://www.google.com', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});
request('http://google.com/doodle.png').pipe(fs.createWriteStream('doodle.png'))
*/
require('./blog-text'); 
require('./dom-loader');  
// End D3 -- map   
// require('./components/tab');  
/*
$('#tomList a').on('hover', function (e) {
	e.preventDefault()
	$(this).tab('show')
  })
*/

 