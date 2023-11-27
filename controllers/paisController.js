const Pais = require("../models/paises");
const {validationResult} = require('express-validator');

const getPaises = async (req, res) =>{
    try{
        const paises = await Pais.find();
        res.status(200).json(paises);
    }catch{
        res.status(500).json({message:error});
    }
}

const getPais = async (req, res)=>{
  try{
    const paisFind = await Pais.findById({_id:req.params.id});
    if(paisFind!=null){
      res.status(200).json(paisFind)
    }else{
      res.json("No encontrado");
    }
  }catch(error){
      res.status(500).json({message:error});
  }

}

const postPais = async (req, res) =>{
    const pais = req.body;
    //Validaciones
    const newPais = new Pais(pais);
    try{
      await newPais.save();
      res.status(201).json(newPais);
  
    }catch(error){
      res.status(500).json({message:error});
    }
}

const deletePais = async (req,res)=>{
    try{
    const paisNombre = await Pais.findByIdAndDelete({_id : req.params.id});
    if(paisNombre!=null){
      res.status(200).json({message:"Eliminado"});
    }else{
      res.json("No encontrado en la base de datos");
    }
    }catch(error){
      res.status(500).json({message:error});
    }
  }

const putPais =  async (req,res)=>{
    try{
    const paisNombre = await Pais.findByIdAndUpdate({_id : req.params.id}, req.body);
    if(paisNombre!=null){
      res.status(200).json({message:"Editado"});
    }else{
      res.json("No encontrado en la base de datos");
    }
    }catch(error){
      res.status(500).json({message:error});
    }
  }

module.exports = {getPaises, getPais, postPais, deletePais, putPais};