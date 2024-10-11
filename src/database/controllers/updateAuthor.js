const Book = require('../models/bookModel')

const updateAuthor = async (req, res) => {
    try {
        const title = req.body.title;
        const newAuthor = req.body.author

        const result = await Book.updateOne(
            { title }, // Query: Find the book by title
            { $set: { author: newAuthor } } // Update operation: Set the new author
        );
            console.log(result);
            res.status(200).json({
                message: `Successfully updated the author of ${title} to ${newAuthor}.`});
    } catch (error) {
        console.error(error);
        const responseMessage = {
            message: `Failed to update the author of ${req.body.title}.`
        };
        res.status(500).json(responseMessage);
    }
}

module.exports = updateAuthor