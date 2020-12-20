
var express = require('express');
var app = express();
const fastcsv = require('fast-csv');
var fs = require('fs');
var parse = require('csv-parse');
var cors = require('cors');



app.get('/', function (req, res) {
   res.send('Hello World');
})

app.get('/getCsv', cors(), function (req, res) {
	var parser = parse({columns: true}, function (err, records) {
		res.send(records);
	});
  var ws = fs.createReadStream(__dirname+'/data.csv').pipe(parser).on('end', () => process.exit());

})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("listening to http://%s:%s", host, port)

})
