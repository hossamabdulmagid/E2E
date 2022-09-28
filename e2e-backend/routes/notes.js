const express = require("express");

// notesRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /notes.
const notesRoutes = express.Router();

// This will help us connect to the database
const db = require("../db/connectDb");

// This help converts the id from string to ObjectId for the _id.

const ObjectId = require("mongodb").ObjectId;


// This section will help you get a list of all the notes.

notesRoutes.route("/notes").get((req, res) => {
    let db_connect = db.getDb("employees");
    db_connect
        .collection("notes")
        .find({})
        .toArray((err, result) => {
            if (err) throw err;
            res.json(result);
        });
});

// This section will help you get a single notes by id

notesRoutes.route("/notes/:id").get((req, res) => {
    let db_connect = db.getDb();
    let myQuery = {_id: ObjectId(req.params.id)};
    db_connect
        .collection("notes")
        .findOne(myQuery, (err, result) => {
            if (err) throw err;
            res.json(result);
        });
});

// This section will help you create a new notes.
notesRoutes.route("/notes/add").post((req, response) => {
    let db_connect = db.getDb();
    let myObj = {
        name: req.body.name,
        title: req.body.title,
        description: req.body.description,
    };
    db_connect.collection("notes").insertOne(myObj, (err, res) => {
        if (err) throw err;
        response.json(res);
    });
});

// This section will help you update a notes by id.

notesRoutes.route("/notes/:id").post((req, response) => {
    let db_connect = db.getDb();
    let myQuery = {_id: ObjectId(req.params.id)};
    let newValues = {
        $set: {
            name: req.body.name,
            title: req.body.title,
            description: req.body.description,
        },
    };
    db_connect
        .collection("notes")
        .updateOne(myQuery, newValues, (err, res) => {
            if (err) throw err;
            console.log("1 document updated");
            response.json(res);
        });
});


// This section will help you delete a notes

notesRoutes.route("/:id").delete((req, response) => {
    let db_connect = db.getDb();
    let myQuery = {
        _id: ObjectId(req.params.id)
    };
    db_connect.collection("notes").deleteOne(myQuery, (err, obj) => {
        if (err) throw err;
        console.log("1 document deleted");
        response.json(obj);
    });
});

module.exports = notesRoutes;