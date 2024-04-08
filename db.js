const mongoose = require('mongoose')
require('dotenv').config();

//Define the mongoDB connection URL
// const mongoURL = process.env.MONGODB_URL_LOCAL;
const mongoURL = process.env.MONGODB_URL;

//set up MongoDB connection

mongoose.connect(mongoURL,{
    // useNewUrlParser: true,
    // useUnifiedTopology: true

})

//get the default connection
const db = mongoose.connection;

db.on('connected', () => console.log("Connected to MongoDB server"))
db.on('disconnected', () => console.log("Disconnected to MongoDB server"))
db.on('error', () => console.log("Error occured in connection to MongoDB server"))

//export the database connection
module.exports = db;