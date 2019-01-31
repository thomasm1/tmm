var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var index = require('./routes/index');
var tasks = require('./routes/tasks');
var port = 3000;

var app = express();
// view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
// Set Static Folder
app.use(express.static(path.join(__dirname, 'client')));
// body Parser middle ware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/api', tasks);
console.log('Express Firing')
app.listen(port, function(){
	console.log('TMServer started on port ' +port);
});

