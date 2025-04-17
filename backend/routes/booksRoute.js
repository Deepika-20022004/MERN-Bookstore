import express from 'express';
import { Book } from '../models/bookModel.js';

const router = express.Router();

// CREATE
// Route to save a new book- post request
router.post('/', async (req,res)=>{
    try{
        if (!req.body.title ||!req.body.author ||!req.body.publishYear){
            return res.status(400).send({ message: "All fields are required" });}
        
        const newBook = new Book({
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear
        });

        const book=await Book.create(newBook);
        return res.send(book);
    }
    catch(error){
        console.log(error.message);
    }
});

// READ
// Route to get all books from db- get request
router.get('/', async (req,res)=>{
    try{
        const book=await Book.find({});
        // return res.send(book); (or)
        return res.json({
            count: book.length,
            data: book
        });   
    }
    catch(error){
        console.log(error.message);
    }
});

// Route to get one book by id- get request
router.get('/:id', async (req,res)=>{ // we use :id as a placeholder for the id of a book we will pass in the url
    try{
        const {id} = req.params;
        const book=await Book.findById(id);
        return res.json(book); 
    }
    catch(error){
        console.log(error.message);
    }
});

// Route to update a book by id- put request
 router.put('/:id', async (req,res)=>{
    try{
        if (!req.body.title ||!req.body.author ||!req.body.publishYear){
            return res.status(400).send({ message: "All fields are required" });}

        const {id} = req.params;
        const result = await Book.findByIdAndUpdate(id, req.body, {new: true});

        if (!result) return res.send("Book not found");

        return res.send("Book updated successfully");
    }
    catch(error){
        console.log(error.message);
    }
});

// Route to delete a book by id- delete request
 router.delete('/:id', async (req,res)=>{
    try{
        const {id} = req.params;
        const result = await Book.findByIdAndDelete(id);

        if (!result) return res.send("Book not found");

        return res.send("Book deleted successfully");
    }
    catch(error){
        console.log(error.message);
    }
});

export default router;