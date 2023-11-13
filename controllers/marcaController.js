const Marca = require("../models/marcas");
const {validationResult} = require('express-validator');

const getMarcas = async (req, res) =>{
    try{
        const marcas = await Marca.find();
        res.status(200).json(marcas);
    }catch{
        res.status(500).json({message:error});
    }
}

const postMarca = async (req, res) =>{
    const marca = req.body;
    //Validaciones
    const newMarca = new Marca(marca);
    try{
      await newMarca.save();
      res.status(201).json(newMarca);
  
    }catch(error){
      res.status(500).json({message:error});
    }
}

const deleteMarca = async (req,res)=>{
    try{
    const marcaNombre = await Marca.findOneAndDelete({nombre : req.params.nombre});
    if(marcaNombre!=null){
      res.status(200).json({message:"Eliminado"});
    }else{
      res.json("No encontrado en la base de datos");
    }
    }catch(error){
      res.status(500).json({message:error});
    }
  }

const patchMarca =  async (req,res)=>{
    try{
    const marcaNombre = await Marca.findOneAndUpdate({nombre : req.params.nombre}, req.body);
    if(marcaNombre!=null){
      res.status(200).json({message:"Editado"});
    }else{
      res.json("No encontrado en la base de datos");
    }
    }catch(error){
      res.status(500).json({message:error});
    }
  }

module.exports = {getMarcas, postMarca, deleteMarca, patchMarca};