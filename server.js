// token : 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
// server.js

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
let router = require('./app/routes/info_routes');
const port = process.env.PORT || 3000;
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
    }


// Initialize app
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URL,
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