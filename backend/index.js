import express from "express";
import { MONGO_URI } from "./config.js";
import mongoose from "mongoose";
// import { Book } from './models/bookModel.js'
import bookRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = express();

// Middlware to parse req body
app.use(express.json());

// Middleware to handle cors policy
app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:5173'], // Allow both frontend domains
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
    allowedHeaders: ['Content-Type'], // Allowed headers
    credentials: true // Allow cookies and credentials
}));


app.get("/", (req, res) => {
    console.log("root route has been requested");
    res.send("Hello World");
});

app.use('/books',bookRoute)

// All the commented part below is in routes/bookRoutes.js

// // CREATE
// // Route to save a new book- post request
// app.post('/books', async (req,res)=>{
//     try{
//         if (!req.body.title ||!req.body.author ||!req.body.publishYear){
//             return res.status(400).send({ message: "All fields are required" });}
        
//         const newBook = new Book({
//             title: req.body.title,
//             author: req.body.author,
//             publishYear: req.body.publishYear
//         });

//         const book=await Book.create(newBook);
//         return res.send(book);
//     }
//     catch(error){
//         console.log(error.message);
//     }
// });

// // READ
// // Route to get all books from db- get request
// app.get('/books', async (req,res)=>{
//     try{
//         const book=await Book.find({});
//         // return res.send(book); (or)
//         return res.json({
//             count: book.length,
//             data: book
//         });   
//     }
//     catch(error){
//         console.log(error.message);
//     }
// });

// // Route to get one book by id- get request
// app.get('/books/:id', async (req,res)=>{ // we use :id as a placeholder for the id of a book we will pass in the url
//     try{
//         const {id} = req.params;
//         const book=await Book.findById(id);
//         return res.json(book); 
//     }
//     catch(error){
//         console.log(error.message);
//     }
// });

// // Route to update a book by id- put request
//  app.put('/books/:id', async (req,res)=>{
//     try{
//         if (!req.body.title ||!req.body.author ||!req.body.publishYear){
//             return res.status(400).send({ message: "All fields are required" });}

//         const {id} = req.params;
//         const result = await Book.findByIdAndUpdate(id, req.body, {new: true});

//         if (!result) return res.send("Book not found");

//         return res.send("Book updated successfully");
//     }
//     catch(error){
//         console.log(error.message);
//     }
// });

// // Route to delete a book by id- delete request
//  app.delete('/books/:id', async (req,res)=>{
//     try{
//         const {id} = req.params;
//         const result = await Book.findByIdAndDelete(id);

//         if (!result) return res.send("Book not found");

//         return res.send("Book deleted successfully");
//     }
//     catch(error){
//         console.log(error.message);
//     }
// });

mongoose.connect(MONGO_URI)
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(5000, () => {
            console.log("Server is running on port 5000");
        });
        
    })
    .catch((err) => {
        console.log(err);
    });
