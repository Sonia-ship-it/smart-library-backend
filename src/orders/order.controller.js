const Order=require('./order.model')
const createAOrder = async(req,res) => {
     try{
            const newOrder=await new Order(req.body).save()
            res.status(200).send({message: "Order created successfully", order: newOrder})
    }
    catch(error) {
        console.log("Error ordering books  ",error)
        res.status(500).send({message:"Failed to order books"})
    }
}
const getOrderByEmail = async(req,res) => {
    try{
        const {email} = req.params;
        const orders=await Order.find({email}).sort({createdAt: -1})
        if(!orders) {
            return res.status(404).json({message: "Order not found"})
        }
        res.status(200).json(orders);
    }
    catch(error) {
        console.error("Error fetching orders", error);
        res.status(500).json({message: "Failed to fetch order"});
    }
}
// const getAllBooks = async(req,res) => {
//      try{
//             const books=await Book.find()
//             res.status(200).send(books)
//     }
//     catch(error) {
//         console.log("Error fetching books ",error)
//         res.status(500).send({message:"Failed to fetch books"})
//     }

// }
// const getSingleBook = async(req,res) => {
//      try{
//             const {id}=req.params
//             const book=await Book.findById(id)
//             if(!book) 
//                 res.status(404).send({message: "Book not Found!"})
//             res.status(200).send(book)
//     }
//     catch(error) {
//         console.log("Error fetching book ",error)
//         res.status(500).send({message:"Failed to fetch book"})
//     }
// }
// const updateBook = async(req,res) => {
//      try{
//             const {id}=req.params
//             const updatedBook=await Book.findByIdAndUpdate(id, req.body, {new: true})
//             if(!updatedBook) 
//                 res.status(404).send({message: "Book is not Found!"})
//             res.status(200).send({
//                 message: "Book updated successfully",
//                 book: updatedBook
//             })
//     }
//     catch(error) {
//         console.log("Error updating a book ",error)
//         res.status(500).send({message:"Failed to update a book"})
//     }
// }
// const deleteABook = async(req,res) => {
//      try{
//             const {id}=req.params
//             const deletedBook=await Book.findByIdAndDelete(id)
//             if(!deletedBook) 
//                 res.status(404).send({message: "Book is not Found!"})
//             res.status(200).send({
//                 message: "Book deleted successfully", book: deletedBook
//             })
//     }
//     catch(error) {
//         console.log("Error deleting a book ",error)
//         res.status(500).send({message:"Failed to delete a book"})
//     }
// }
module.exports={createAOrder,getOrderByEmail }