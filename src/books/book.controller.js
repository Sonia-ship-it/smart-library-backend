const Book=require('./book.model')
const postABook = async(req,res) => {
     try{
            const newBook=await new Book(req.body).save()
            res.status(200).send({message: "Book created successfully", book: newBook})
    }
    catch(error) {
        console.log("Error creating book ",error)
        res.status(500).send({message:"Failed to create book "})
    }
}
const getAllBooks = async(req,res) => {
     try{
            const books=await Book.find()
            res.status(200).send(books)
            console.log("Failed to get books")
    }
    catch(error) {
        console.log("Error fetching books ",error)
        res.status(500).send({message:"Failed to fetch books"})
    }

}
const getSingleBook = async(req,res) => {
     try{
            const {id}=req.params
            const book=await Book.findById(id)
            if(!book) 
                res.status(404).send({message: "Book not Found!"})
            res.status(200).send(book)
    }
    catch(error) {
        console.log("Error fetching book ",error)
        res.status(500).send({message:"Failed to fetch book"})
    }
}
const updateBook = async(req,res) => {
     try{
            const {id}=req.params
            const updatedBook=await Book.findByIdAndUpdate(id, req.body, {new: true})
            if(!updatedBook) {
            res.status(404).send({message: "Book is not Found!"})
            console.log("Book not Found");
            }
            res.status(200).send({
                message: "Book updated successfully",
                book: updatedBook
            })
    }
    catch(error) {
        console.log("Error updating a book ",error)
        res.status(500).send({message:"Failed to update a book"})
    }
}
const deleteABook = async(req,res) => {
     try{
            const {id}=req.params
            const deletedBook=await Book.findByIdAndDelete(id)
            if(!deletedBook) 
                res.status(404).send({message: "Book is not Found!"})
            res.status(200).send({
                message: "Book deleted successfully", book: deletedBook
            })
    }
    catch(error) {
        console.log("Error deleting a book ",error)
        res.status(500).send({message:"Failed to delete a book"})
    }
}
module.exports={postABook, getAllBooks, getSingleBook, updateBook, deleteABook}