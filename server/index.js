var express = require('express')
    ,app = express()
    ,routes = require('./app/routes')
    ,bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


routes(app);

app.listen(3000, () => {
    console.log('Servidor estutando na porta: 3000');
});

module.exports = app;