var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var products = require('./routes/products');


var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public' ));

app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.get('/', function(req, res){
	res.render('home')
}); 

app.get('/products', products.show);
app.post('/products/add', products.add);
// app.post('/products/update', products.update);
// app.get('/products/complaint', products.complaint);
// app.get('/products/register', products.register);

var port = process.env.port || 1999;

app.listen(port, function(){
	console.log('listening on *:' + port);
});
