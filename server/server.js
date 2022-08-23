var express = require('express');
var { FireBaseService } = require('./firebase.service');
var app = express();
var PORT = 5000;

const firebase = new FireBaseService();

app.get('/', (req, res) => {
    res.status(200).send("Hello World");
});

app.get('/restaurants', (req,res) => {
    res.status(200).send("restaurants");
})

app.listen(PORT, () => {
    console.log("server is running on PORT:", PORT);
});