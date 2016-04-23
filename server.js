var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cors = require('cors');
var config = require('./config.js');
var profileCtrl = require('./controllers/profileCtrl.js');
var userCtrl = require('./controllers/userCtrl.js');
var corsOptions = {
    origin: "http://localhost:3000"
};

var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(cors(corsOptions));

// allows session to run on all endpoints with passwordcode
// being used to track cookies.
app.use(session({
    secret: config.sessionSecret,
    saveUninitialized: true,
    resave: true
}));


app.post('/api/login', userCtrl.login);

app.get('/api/profiles', profileCtrl.getFriends);


app.listen(3000, function(request, response, next) {
    console.log("listening on port 3000");
});  // closing server tag.
