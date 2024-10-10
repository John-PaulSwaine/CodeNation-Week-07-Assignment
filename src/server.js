const express = require('express')      // this imports the express library for use
const app = express()           // this renames express as is standard
app.use(express.json())         //this tells express we are using json not xml
require('dotenv').config()          // this line imports and runs the dotenv within one line.
require('./database/connection')            // this line calls in the connection.js file in the database folder withn src
const Book = require('./database/models/bookModel')         // calls in the schema from bookModel.js

app.post('/addBook', 
    async (req, res) => {
        try {
            const result = await Book.create(
                {
                    title: req.body.title,
                    author: req.body.author,
                    genre: req.body.genre
                }
            )
            const responseMessage = {
                message: `Book ${req.body.title} has successfully been added to the database.`
            }
            console.log(result)
            res.status(201).json(responseMessage)
        } catch (error) {
            console.log(error)
            const responseMessage = {
                message: `Book ${req.body.title} has failed to add to the database.`,
                DBresponse: error
            }
            res.status(401).json(responseMessage)
        }
    }   
)

app.get('/listBooks', 
        async (req, res) => {
        try {
            const result = await Book.find({})          // this is to find ALL documents
//          await Book.find({title : 'Harry Potter and the Chamber of Secrets'}).exec() - this is to find a specific item use parameters and the .exec() suffix after the closing paranthesis
//          await Book.find({title : '/Potter/i'}).exec() - this is to find things like the parameter ie titles like Potter
//          await Book.find({title : '/Potter/i'}, null, {skip : 3}).exec() - this is to find like the parameter but skipping the first amount ie titles like Potter skipping the first 3
            res.status(200).json(result)         
        } catch (error) {
            console.log(error)
            const responseMessage = {
                message: `Failed to locate list of books.`,
                DBresponse: error
            }
            res.status(500).json(responseMessage)
        }
    }
)

app.get('/book',)           //to find a single book using findOne()

app.put('/updateAuthor',)           //update author using updateOne()

app.put('/updateGenre',)            //update genre using updateOne()

app.delete('/deletebook',)          //delete a book using deleteOne()



app.get('/health', (req, res) => {
    res.send('API is healthy')
    }
)          // this is the health route to verify server is running properly

app.listen(5001, ()=>{
    console.log('Server now listening on port 5001.')
    }
)          // this is the listener - the lifeblood of the server.