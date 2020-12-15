const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require("body-parser");

const port = 8000;
const springInfo = require('./springInfo.json')

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.header("Content-Type", 'application/json');
    res.send(JSON.stringify(springInfo));
})

app.get('/newendpoint', (req, res) => {
    res.send('newendpoint')
})

app.post("/register", function (request, response) {
    if (!request.body) return response.sendStatus(400);
    if(request.body.username==='admin' && request.body.password === '1234'){
        response.json();
    }
});

app.listen(port, () => {
    console.log('We are live on ' + port);
});

