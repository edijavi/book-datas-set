// Import required module csvtojson and mongodb packages
const csvtojson = require('csvtojson');
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

// CSV file name
const fileName = './fixtures/fixtures.csv';
var arrayToInsert = [];
csvtojson().fromFile(fileName).then(source => {
    // Fetching the all data from each row
    for (var i = 0; i < source.length; i++) {
         var oneRow = {
           title: source[i]["title"],
           authors: source[i]["authors"],
           average_rating: source[i]["average_rating"],
           isbn: source[i]["isbn"],
           language_code: source[i]["language_code"],
           publication_date: source[i]["publication_date"],
           publisher: source[i]["publisher"]
         };
         arrayToInsert.push(oneRow);
     }
     //inserting into the table “employees”
     var collectionName = 'books';
     var collection = db.collection(collectionName);
     collection.insertMany(arrayToInsert, (err, result) => {
         if (err) console.log(err);
         if(result){
             console.log('Import CSV into database successfully.');
         }
     });
});