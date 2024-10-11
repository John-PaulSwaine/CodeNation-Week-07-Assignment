const Book = require('../models/bookModel')

const singleBook = async (req, res) => {
    try {
        const result = await Book.find({title : req.body.title}).exec()
        console.log(result)
        res.status(200).json(result)
    } catch (error) {
        console.log(error)
        const responseMessage = {
            message: `Failed to locate book.`
        }
        res.status(418).json(responseMessage)
    }
}

module.exports = singleBook