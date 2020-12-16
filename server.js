const cors = require('cors');
const express = require('express');
const models = require('./models');
const bountyController = require('./controllers/bountiesController');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: '*' }));

app.get('/', (req, res) => {
    res.send('Fischer-Price My First API');
});

app.use('/bounties', bountyController);

app.listen(process.env.PORT || 3000, console.log('starting server'));
