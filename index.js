const express = require('express');

const port = 3000;

const app = express();

app.get('/', (req, res) => {
    res.send("Bateu na api!!a")
})

app.listen(port)