var express = require('express');
var app = express();
var PORT = 3000;

app.get('/', (req, res) => {
    res.status(200).send("Hello World");
});

app.listen(PORT, () => {
    console.log("server is running on PORT:", PORT);
})