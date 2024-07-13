const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({
    Titulo: {type: String, required: true},
    Descricao: String
});

const HomeModel = mongoose.model('Home', HomeSchema);

module.exports = HomeModel;