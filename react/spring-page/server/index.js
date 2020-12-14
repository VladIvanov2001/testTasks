const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;
const springInfo = require('./springInfo.json')

app.use(cors());

app.get('/', (req, res) => {
    res.header("Content-Type",'application/json');
    res.send(JSON.stringify(springInfo));
})
console.log(springInfo)
app.get('/newendpoint', (req, res) => {
    res.send('newendpoint')
})

app.listen(port, () => {
    console.log('We are live on ' + port);
});

