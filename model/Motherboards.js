// Schema and model creation for other files to access the model
const mongoose = require('mongoose');
const moboSchema = mongoose.Schema({
    brand:  String,
    model:  String,
    socket: String,
})

module.exports = mongoose.model('Motherboards', moboSchema);