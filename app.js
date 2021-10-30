const { application } = require('express');
const express = require('express');
const path = require('path');

//Init app
const app = express();

//Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//Home Route
app.get('/', function(req, res){
    let books = [
        {
            id:1,
            title:'el book',
            author:'Brad Th',
            score:'5.0'
        },
        {
            id:2,
            title:'el book',
            author:'Brad h',
            score:'4.0'
        },
        {
            id:3,
            title:'el book',
            author:'Brad D',
            score:'3.0'
        }
    ]
    res.render('index', {
        title:'Books',
        books: books
    });
});

//Delete Route
app.get('/books/delete', function(req, res){
    res.render('delete_book', {
        title:'Delete Book'
    });
});


//Start Server
app.listen(3000, function(){
    console.log('Server on port 3000');

});