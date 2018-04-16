let express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Tweet = require('./api/models/TweetModel'),
    bodyParser = require('body-parser'),
    cors = require('cors');

app.use(cors());

const db = require('./config/db');
    
mongoose.Promise = global.Promise;
mongoose.connect(db.url); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/TweetRoutes'); 
routes(app);

app.listen(port);

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

console.log('Api server started on: ' + port);