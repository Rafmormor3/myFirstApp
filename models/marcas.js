const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MarcaSchema = new Schema({
    nombre : {
        type : String,
        unique : true
    },
    grupo : String,
    origen : String
});

module.exports = mongoose.model("Marca", MarcaSchema);