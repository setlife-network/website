require('dotenv').config() 
var express = require('express');
var path = require('path'); 
var fs = require('fs'); 
var moment = require('moment');
const bodyParser = require('body-parser');
const sslRedirect = require('heroku-ssl-redirect');

var app = express();
app.use(sslRedirect())

var isProduction = process.env.NODE_ENV === 'production'; 
var port = isProduction ? process.env.PORT : 4000; 


app.use(express.static(__dirname + '/build')); 
app.use(bodyParser.json());

app.get('*', function (req, res, next) {
    // Prevents an HTML response for API calls
    if (req.path.indexOf('/api/') != -1) {
        return next();
    }

    fs.readFile(__dirname + '/build/index.html', 'utf8', function (err, text) {
        res.send(text);

    });
});

var cors = require('cors');

var whitelist = [
    'http://localhost:8080',
    'http://localhost:3000',
    'http://localhost:4000',
    'https://setlife.network',
    'https://info.setlife.network',
    'https://www.setlife.network',
    'https://setlife-website.herokuapp.com/'
];
var corsOptions = {
    origin: function(origin, callback) {
        var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
        callback(null, originIsWhitelisted);
    },
    credentials: true,
    methods: ['GET,PUT,POST,DELETE,OPTIONS'],
    allowedHeaders: ['Access-Control-Allow-Headers', 'Origin', 'Access-Control-Allow-Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Cache-Control']
};
app.use(cors(corsOptions));

const apiModules = require('./api/modules/'); 

app.post('/api/send/', apiModules.emailSubscriptions.subscribeNewUser);

app.listen(port, function () {
    console.log('SetLife-ReactWithApi: Server running on port ' + port);

});