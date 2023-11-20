const Tienda = require('../models/tiendas');

const getTiendas = async (req, res)=>{
    try{
        const tiendas = await Tienda.find();
        res.status(200).json(tiendas);
    }catch(error){
        res.status(500).json({message:error});
    }
}

const getTienda = async (req, res) =>{
    try{
        const tiendaFind = await Tienda.findById({_id : req.params.id})
        if(tiendaFind!=null){
            res.json(tiendaFind);
        }else{
            res.json("Tienda no encontrado");
        }
    }catch(error){
        res.status(500)
    }
}

const postTienda = async (req,res)=>{
    const tienda = req.body;
    const newTienda = new Tienda(tienda);
    try{
        await newTienda.save();
        res.status(201).json(newTienda);
    }catch(error){
        res.status(500).json({message:error});
    }
}

const deleteTienda = async (req, res) =>{
    try{
        const deleteTienda = await Tienda.findByIdAndDelete({_id:req.params.id});
        if(deleteTienda!=null){
            res.status(200).json({message:"Eliminado"});
        }else{
            res.json("No encontrado en la base de datos")
        }
    }catch(error){
        res.status(500).json({message:error});
    }
}

const patchTienda = async (req, res)=>{
    try{
        const updateTienda = await Tienda.findByIdAndUpdate({_id:req.params.id},req.body);
        if(updateTienda!=null){
            res.status(200).json(updateTienda);
        }else{
            res.json("No encontrado en la base de datos")
        }
    }catch(error){
        res.status(500).json({message:error});
    }
}

module.exports={getTiendas, getTienda, postTienda, deleteTienda, patchTienda};