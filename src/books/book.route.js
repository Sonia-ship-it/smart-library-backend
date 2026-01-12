const express=require('express')
const verifyAdminToken=require('../middleware/verifyAdminToken')
const {postABook, getAllBooks, getSingleBook,updateBook, deleteABook}=require('./book.controller')
const router=express.Router()
router.post('/create-book',verifyAdminToken,postABook)
router.get('/',getAllBooks)
router.get('/:id', getSingleBook)
router.put('/edit/:id',verifyAdminToken,updateBook)
router.delete('/:id',verifyAdminToken,deleteABook)
module.exports=router

