const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TiendaSchema = new Schema({
    marca : String,
    ciudad : String,
    calle : String,
    numero : Number
});

module.exports = mongoose.model("Tienda", TiendaSchema);