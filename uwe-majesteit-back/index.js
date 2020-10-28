const http = require('http');
const MongoClient = require('mongodb').MongoClient;
const DbCon = require('./config/mongoDBconnection.js');

const hostname = '127.0.0.1';
const port = 3306;

const uri =
  `mongodb+srv://${DbCon.user}:${DbCon.password}@${DbCon.clustername}.grg7o.mongodb.net/${DbCon.dbname}?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  useNewUrlParser: true
});

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

client.connect(err => {
  // Find all documents in collection
  const collection = client.db(DbCon.dbname).collection(
    "listingsAndReviews");
  const cursor = collection.find({});
  // perform actions on the collection object

  function iterateFunc(doc) {
    console.log(JSON.stringify(doc, null, 4));
  }

  function errorFunc(error) {
    console.log(error);
  }

  cursor.forEach(iterateFunc, errorFunc);
  // console.log(`collection: ${collection}`); // TODO: delete
  // console.log(`collection JSON: ${JSON.stringify(collection)}`); // TODO: delete
  client.close();
});

// con.connect((err) => {
//   console.log(`connecting..`); // TODO: delete
//   if (err) {
//     console.log(`err: ${err}`); // TODO: delete
//     throw err;
//   }
//   console.log("Connected!");
//   con.query(`CREATE DATABASE ${dbname}`, (err, result) => {
//     if (err) throw err;
//     console.log("Database created");
//   });
// });
