const mongoose = require('mongoose');

const hunterSchema = new mongoose.Schema({
    name: String,
    origin: String
});

module.exports = {
    hunter: mongoose.model('hunters', hunterSchema),
    schema: hunterSchema
};
