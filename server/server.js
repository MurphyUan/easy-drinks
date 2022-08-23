var express = require('express');
var { FireBaseService } = require('./firebase.service');
var app = express();
var PORT = 5000;

const firebase = new FireBaseService();

app.get('/', (req, res) => {
    res.status(200).send("Hello World");
});

app.get('/restaurants', (req,res) => {
    firebase.getRestaurants()
        .then(result => res.status(200).send(result))
        .catch(err => res.status(401).send(err));
})

app.listen(PORT, () => {
    console.log("server is running on PORT:", PORT);
});