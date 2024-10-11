const Book = require('../models/bookModel')

const listBooks = async (req, res) => {
    try {
        const result = await Book.find({})
        res.status(200).json(result)         
    } catch (error) {
        console.log(error)
        const responseMessage = {
            message: `Failed to locate list of books.`
        }
        res.status(500).json(responseMessage)
    }
}

module.exports = listBooks