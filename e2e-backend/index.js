const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({path: "./config.env"});
const port = process.env.PORT || 8080;
app.use(cors());
app.use(express.json());

app.use(require("./routes/notes"));
// get driver connection
const db = require("./db/connectDb");

db.connectToServer((err) => {
    if (err) console.error(err);
});

app.listen(port, () => {
    // perform a database connection when server starts
    console.log(`Server is running on port: ${port}`);
});