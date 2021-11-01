var Airtable = require('airtable');
var base = new Airtable().base('apphV0JKV9WZUMoFS');


//Book Schema
let bookSchema = base.table({
    "bookID": {
        type: String,
        required: true
    },
    "title": {
        type: String,
        required: true
    },
    "authors": {
        type: String,
        required: true
    },
    "average_rating": {
        type: String,
        required: true
    },
    "isbn": {
        type: String,
        required: true
    },
    "language_code": {
        type: String,
        required: true
    },
    "publication_date": {
        type: String,
        required: true
    },
    "publisher":{
        type: String,
        required: true
    }
});

let Book = module.exports = base.model('Book', bookSchema)