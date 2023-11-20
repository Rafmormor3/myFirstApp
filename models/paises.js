const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PaisSchema = new Schema({
    nombre : String,
    numHabitantes : Number,
    continente : String
});

module.exports = mongoose.model("Pais", PaisSchema);