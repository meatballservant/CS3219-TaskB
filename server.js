// token : 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
// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config/db');
let router = require('./app/routes/info_routes');
const { O_APPEND } = require('constants');

// Initialize app
const app = express();
const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect( config.url,
{
    useNewUrlParser: true,
}
);

const db = mongoose.connection;
// Added check for DB connection
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});

// Use routes in the App
app.use(router);

// Launch app to listen to specified port
if(!module.parent) {
    app.listen(port, function () {
        console.log("Running RestHub on port " + port);
    });
}

module.exports = app