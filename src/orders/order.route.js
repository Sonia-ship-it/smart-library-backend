const express =require('express');
const { createAOrder } = require('./order.controller');
const {getOrderByEmail}=require('./order.controller')
const router=express.Router();
router.post("/",createAOrder);
router.get("/email/:email",getOrderByEmail);
module.exports=router