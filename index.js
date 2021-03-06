var express = require('express');
var request = require('request');


var app = express();

app.use(express.static(__dirname + '/static'));

app.set('view engine','ejs');

app.get('/', function(req, res){
  res.sendFile('./index.html');
})

// app.get('/jenna', function(req, res){
//   res.render('./index.ejs');
// })

app.get('/search/:foo', function(req, res) {
  var url = 'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&';
  // var q = req.params.foo;
  // var fullUrl = url + 'q=' + q;
  request({
    url: url,
    qs: {
      limit: 20,
      api_key: 'dc6zaTOxFJmzC',
      q: req.params.foo
    },
    json: true
  }, function(error, response, body) {
    // var dataObj = JSON.parse(body);
    // res.send(dataObj);
    // res.send(body.data);
    res.render('index', {data: body.data});
  });
});


app.listen(3000);
