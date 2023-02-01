const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const port = process.env.port || 3001;

const { MongoClient } = require("mongodb");
const ObjectId = require("mongodb").ObjectID;
const cors = require("cors");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const uri =
  "mongodb+srv://root:root@cluster0.lnnhtrj.mongodb.net/?retryWrites=true&w=majority";

async function getUsers() {
  try {
    const connectionDB = await MongoClient.connect(uri);
    const db = await connectionDB.db("GP");
    return await db.collection("Users");
  } catch (exception) {
    console.log("Connection to the database corrupted");
  }
}

app.post("/", async (req, res) => {
  const userCollection = await getUsers();
  const users = await userCollection
    .find({ username: req.body.username, password: req.body.password })
    .toArray();
  res.json(users);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
