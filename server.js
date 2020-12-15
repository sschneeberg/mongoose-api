const express = require('express');
const models = require('./models');
const bountyController = require('./controllers/bountiesController');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Fischer-Price My First API');
});

app.use('/bounties', bountyController);

app.listen(3000 || process.env.PORT, console.log('starting server'));
