const express = require('express');
const bookhandler = express.Router();



var books = [
    {
        title: 'Tom and Jerry',
        author: 'Joseph Barbera',
        genre: 'Cartoon',
        img: 'tom.jpg'
    },
    {
        title: 'Lord of Rings',
        author: 'J.R.R Tolkien',
        genre: 'Fantacy',
        img: 'lord.jpg'
    },
    {
        title: 'War and Peace',
        author: 'Leo Tolstoy',
        genre: 'War',
        img: 'image.jpg'
    }
];
function router(nav) {
    // handling books link
    bookhandler
        .route('/')
        .get((req, res) => {
            res.render('books',
                {
                    nav,
                    books
                }
            );
            res.end();
        })
    // handling url when id comes after /books ie,/books/id
    bookhandler
        .route('/:id')
        .get((req, res) => {
            const id = req.params.id;
            res.render('book',
                {
                    nav,
                    book: books[id]
                });
            res.end();
        })

    return bookhandler;

}


module.exports = router;