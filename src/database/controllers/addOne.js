const Book = require('../models/bookModel')

const addOne = async (req, res) => {
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

module.exports = addOne