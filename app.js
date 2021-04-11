// Connect to the backend database using express and MongoDB
var express = require('express');
var app = express();

const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://app-user:n0tTh3b3%24t@cluster0.ufvfo.mongodb.net/PCComponentsDB?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Connect to the web server
app.listen(3000, () => {
    console.log('Server listening on 3000');
});

// Connect to the MongoDB database
mongoose.connect(uri, ()  => {
    console.log('Connected to MongoDB Successfully!!');
});