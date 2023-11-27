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

const canEditMarca = async (nombre, {req})=>{
    const marca = await Marca.findOne({nombre});
    if(marca && marca._id!=req.params.id){
        throw new Error('No se puede actualizar');
    }
}


module.exports = {existMarca, existPais, canEditMarca}