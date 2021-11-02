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

//Bring the models
let Book = require('./models/book');

//Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Set Public Folder
app.use(express.static(path.join(__dirname, 'public')));

//Home Route
app.get('/', function(req, res){
    Book.find({}, function(err, books){
        if (err) {
            console.log(err);
        } else{
            res.render('index', {
                title:'Bookshop - Aarhus',
                books: books
            });
        }      
    });    
});

//Delete Route
app.delete('/books/:id', function(req, res){
    let query = {_id:req.params.id}

    Book.remove(query, function(err){
        if(err){
            console.log(err);            
        }
        res.send('Success')
    });
});


//Start Server
app.listen(3000, function(){
    console.log('Server on port 3000');

});
