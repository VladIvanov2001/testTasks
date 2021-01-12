const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();
const port = process.env.PORT;
const spring = require('./info');
const auth = require('./auth');
app.use('/', spring);
app.use(auth);

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.listen(port, () => {
    console.log('We are live on ' + port);
});

