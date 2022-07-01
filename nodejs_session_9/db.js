const { MongoClient } = require("mongodb");

const url = "mongodb+srv://anhvu123:anhvu123@cluster0.e6pnm.mongodb.net/test";
const client = new MongoClient(url);
const dbName = "Management";

const db = {};

// Connection URL
async function connectToDb() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to Database");
  const database = client.db(dbName);

  db.students = database.collection("Students");

  // the following code examples can be pasted here...

  return "done.";
}

module.exports = { connectToDb, db };
