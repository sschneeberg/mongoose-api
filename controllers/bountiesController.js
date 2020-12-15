const express = require('express');
const models = require('../models');
const router = express.Router();
const db = require('../models');

router.get('/', (req, res) => {
    db.Bounty.find().then((found) => {
        res.status(200).json({ bounties: found });
    });
});

router.get('/:id', (req, res) => {
    db.Bounty.find()
        .then((found) => {
            res.status(200).json({ bounty: found[req.params.id - 1] });
        })
        .catch((err) => {
            res.send(err);
        });
});

router.post('/', (req, res) => {
    console.log(req.body);
    db.Bounty.create(req.body)
        .then((bounty) => {
            res.status(201).json({ created: true, bounty: bounty });
        })
        .catch((err) => {
            res.send(err);
        });
});

router.put('/:id', (req, res) => {
    res.send('PUT /bounties/:id');
});

router.delete('/id', (req, res) => {
    res.send('DELETE /bounties/:id');
});

module.exports = router;
