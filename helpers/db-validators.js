const Marca = require('../models/marcas')
const Pais = require('../models/paises')
const User = require("../models/user")

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
    console.log(nombre);
    console.log(marca._id);
    console.log(req.params.id);
    if(marca && marca._id!=req.params.id){
        throw new Error('No se puede actualizar');
    }
}

const existUserEmail = async (email)=>{
    const userDb = await User.findOne({email});
    if(userDb!=null){
        throw new Error(`${email} ya existe en la base de datos.`)
    }

}

const existUserLogin = async (login)=>{
    const userDb = await User.findOne({login});
    if(userDb!=null){
        throw new Error(`${login} ya existe en la base de datos.`)
    }

}


module.exports = {existMarca, existPais, canEditMarca, existUserEmail, existUserLogin}