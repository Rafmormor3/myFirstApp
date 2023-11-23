const Marca = require('../models/marcas')
const Pais = require('../models/paises')

const existMarca = async (nombre)=>{
    const marcaDB = await Marca.findOne({nombre});
    if(marcaDB!=null){
        throw new Error(`Marca ${nombre} ya existe en la base de datos.`)
    }
}

const existPais = async (nombre)=>{
    const paisDb = await Pais.findOne({nombre});
    if(paisDb!=null){
        throw new Error(`${nombre} ya existe en la base de datos.`)
    }

}


module.exports = {existMarca, existPais}