exports.show = function (res) {
	res.render("products");
};

exports.add = function (req, res, next) {
	req.rsgetConnection(function(err, connection){

		var input = JSON.parse(JSON.stringify(req.body));
		var data = {
            description : input.description,
        };

		if (err) 
			return next(err);
		
		connection.query('insert into products set ?', data, function(err, results) {
        	if (err)
              console.log("Error inserting : %s ",err );
         
          	res.redirect('/products');
      	});
	});
};