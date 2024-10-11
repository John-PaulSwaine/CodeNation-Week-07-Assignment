const Book = require('../models/bookModel')

const deleteAll = async (req, res) => {
    try {
        console.log()
        const result = await Book.deleteMany({});
        
        const responseMessage = {
            message: `Successfully deleted all books from the database.`
        };
        console.log(result);
        res.status(200).json(responseMessage);

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: `Failed to delete all books from the database.`
        });
    }
}

module.exports = deleteAll