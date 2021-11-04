# Books dataset

Small web app by server side.

## Installation

Use the package manager [npm](https://docs.npmjs.com/cli/v7/commands/npm-install) to install the dependencies described on package.json.

```bash
npm install
```
Load the data to MongoDB locally from a csv file collected from [kaggle](https://www.kaggle.com/jealousleopard/goodreadsbooks)
```bash
mongo
use bookstore
db.createCollection('books')
Ctrl+C
```
```bash
node fixtures/fixtures.js
```
Run NodeJS server [npm](https://docs.npmjs.com/cli/v7/commands/npm-install)
```bash
npm start
```
##
App accomplishments:
- Data Process 
- Serve the data 
- Delete data  
- PUG Template
- Use of [tailwindcss](https://tailwindcss.com/)

![img-app](https://github.com/edijavi/book-dataset/blob/main/app-image.PNG)



## License
[MIT](https://choosealicense.com/licenses/mit/)