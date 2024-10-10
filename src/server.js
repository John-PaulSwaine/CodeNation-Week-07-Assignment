const express = require('express')
const app = express()
// this imports and renames express as is standard
app.use(express.json())
//this tells express we are using json not xml
require('dotenv').config()
// this line imports and runs the dotenv within one line.
require('./database/connection')
// this line calls in the connection.js file in the database folder withn src

app.get('/health', (req, res)=>{
    res.send('API is healthy')
})
// health route to verify server is running properly

app.listen(5001, ()=>{
    console.log('Server now listening on port 5001.')
})
// this is the listener - the lifeblood of the server.