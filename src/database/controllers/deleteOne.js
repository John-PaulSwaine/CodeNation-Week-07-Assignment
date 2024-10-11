const Book = require('../models/bookModel')

const deleteBook = async (req, res) => {
    try {
        console.log(req.body.title)
        const result = await Book.deleteOne({ title: req.body.title });
        
        const responseMessage = {
            message: `Successfully deleted "${req.body.title}" from the database.`
        };
        console.log(result);
        res.status(200).json(responseMessage);

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: `Failed to delete "${req.body.title}".`
        });
    }
}

module.exports = deleteBook