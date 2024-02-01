const User = require("../models/user");
const {validationResult} = require('express-validator');

const getUsers = async (req, res) =>{
    try{
        const allUsers = await User.find();
        res.status(201).json(allUsers);
    }catch{
        res.status(500).json({message:error});
    }
}

const getUser = async ( req, res) => {
  try{
    const userFind = await User.findById({_id : req.params.id});
    if(userFind!=null){
      res.status(200).json(userFind);
    }else{
      res.json("No encontrado")
    }
  }catch(error){
    res.status(500).json({Message:error})
  }
}

const register = async (req, res) =>{
    const user = req.body;
    const newUser = new User(user);
    try{
      await newUser.save();
      res.status(201).json(newUser);
  
    }catch(error){
      res.status(500).json({message:error});
    }
}

const deleteUser = async (req,res)=>{
    try{
    const user = await User.findById({_id : req.params.id});
    user.active=false;
    const deleted= await User.findByIdAndUpdate({_id:user.id})
    if(user!=null){
      res.status(200).json({message:"Eliminado"});
    }else{
      res.json("No encontrado en la base de datos");
    }
    }catch(error){
      res.status(500).json({message:error});
    }
  }

const update =  async (req,res)=>{
    try{
    const user = await User.findByIdAndUpdate({_id : req.params.id}, req.body);
    if(user!=null){
      res.status(200).json({message:"Editado"});
    }else{
      res.json("No encontrado en la base de datos");
    }
    }catch(error){
      res.status(500).json({message:error});
    }
  }

module.exports = {getUser, getUsers, deleteUser, register, update};