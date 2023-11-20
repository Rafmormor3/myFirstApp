const Marca = require("../models/marcas");
const {validationResult} = require('express-validator');

const getMarcas = async (req, res) =>{
    try{
        const allMarcas = await Marca.find();
        res.status(201).json(allMarcas);
    }catch{
        res.status(500).json({message:error});
    }
}

const getMarca = async ( req, res) => {
  try{
    const marcaFind = await Marca.findById({_id : req.params.id});
    if(marcaFind!=null){
      res.status(200).json(marcaFind);
    }else{
      res.json("No encontrado")
    }
  }catch(error){
    res.status(500).json({Message:error})
  }
}

const postMarca = async (req, res) =>{
    const marca = req.body;
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
    const marcaNombre = await Marca.findByIdAndDelete({_id : req.params.id});
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
    const marcaNombre = await Marca.findByIdAndUpdate({_id : req.params.id}, req.body);
    if(marcaNombre!=null){
      res.status(200).json({message:"Editado"});
    }else{
      res.json("No encontrado en la base de datos");
    }
    }catch(error){
      res.status(500).json({message:error});
    }
  }

module.exports = {getMarcas, getMarca, postMarca, deleteMarca, patchMarca};