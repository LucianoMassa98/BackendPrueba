const express=require('express');


const TareasService = require('../services/tareas.service');
const service = new TareasService();
const router=express.Router();


router.get('/',
async (req,res,next)=>{
  try{
  
    const products=await service.find();
    res.json(products);
  }catch(err){
    next(err);
  }
});




module.exports=router;
