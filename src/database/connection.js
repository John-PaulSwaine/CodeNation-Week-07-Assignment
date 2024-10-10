const mongoose = require('mongoose')
// imports the mongoose library

const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        // tells the function to process the MONGO_URI that is within the .env file
        console.log('connection is successful.')
        // confirms the connection to the mongodb database is a success
    } catch (error) {
        console.log(error)
        // in case of error, console log the error
    }
}
connection()    // this function logs us into the database on mongodb
