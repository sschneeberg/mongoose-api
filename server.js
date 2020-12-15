const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.get('/', (req, res) => {
    res.send('Fischer-Price My First API');
});

app.listen(3000 || process.env.PORT, console.log('starting server'));
