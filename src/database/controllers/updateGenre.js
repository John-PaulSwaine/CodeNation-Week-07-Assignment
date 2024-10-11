const Book = require('../models/bookModel')
const updateGenre =     async (req, res) => {
    try {
        const title = req.body.title;
        const newGenre = req.body.genre

        const result = await Book.updateOne(
            { title }, // Query: Find the book by title
            { $set: { genre: newGenre } } // Update operation: Set the new author
        );
            console.log(result);
            res.status(200).json({
                message: `Successfully updated the genre of ${title} to ${newGenre}.`});
    } catch (error) {
        console.error(error);
        const responseMessage = {
            message: `Failed to update the genre of ${req.body.title}.`
        };
        res.status(500).json(responseMessage);
    }
}

module.exports = updateGenre