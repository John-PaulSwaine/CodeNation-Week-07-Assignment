const express = require('express')
const app = express()
app.use(express.json())
require('dotenv').config()
require('./database/connection')
const addOne = require('./database/controllers/addOne')
const listBooks = require('./database/controllers/bookList')
const singleBook = require('./database/controllers/singleBook')
const updateAuthor = require('./database/controllers/updateAuthor')
const updateGenre = require('./database/controllers/updateGenre')
const deleteBook = require('./database/controllers/deleteOne')
app.post('/addBook', addOne)
app.get('/listBooks', listBooks)
app.get('/singleBook', singleBook)
app.put('/updateAuthor', updateAuthor)
app.put('/updateGenre', updateGenre)
app.delete('/deleteBook', deleteBook);

app.get('/health', (req, res) => {
    res.send('API is healthy')
    }
)

app.listen(5001, ()=>{
    console.log('Server now listening on port 5001.')
    }
)