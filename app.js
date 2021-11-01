const express = require('express');
const path = require('path');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/bookstore');
let db = mongoose.connection;

//Check Connection
db.once('open',function(){
    console.log('Connected to MongoDB');    
});

//Check DB errors
db.on('error', function(err){
    console.log(err); 
});

//Init app
const app = express();

let Book = require('./models/book');

//Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//Home Route
app.get('/', function(req, res){
    Book.find({}, function(err, books){
        if (err) {
            console.log(err);
        } else{
            res.render('index', {
                title:'Books',
                books: books
            });
        }
        

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
