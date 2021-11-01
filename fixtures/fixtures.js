// Import required module csvtojson and mongodb packages
const csvtojson = require('csvtojson');
const mongodb = require('mongodb');
var url = 'mongodb://localhost:27017/bookstore';

var dbConn;
mongodb.MongoClient.connect(url, {
    useUnifiedTopology: true,

}).then((client) => {
    console.log('DB Connected!');
    dbConn = client.db();
}).catch(err => {
    console.log('DB Connection Error: ${err.message}');
});

// CSV file name
const fileName = './fixtures/fixtures.csv';
var arrayToInsert = [];
csvtojson().fromFile(fileName).then(source => {
    // Fetching the all data from each row
    for (var i = 0; i < source.length; i++) {
         var oneRow = {
           bookID:source[i]["bookID"],
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
     var collection = dbConn.collection(collectionName);
     collection.insertMany(arrayToInsert, (err, result) => {
         if (err) console.log(err);
         if(result){
             console.log('Import CSV into database successfully.');
         }
     });
});