const mongoose = require('mongoose')
const mongoURI = process.env.MONGODB_URI || 'mongodb://35.160.120.126:27017/RoomerAPI'

mongoose.connect(mongoURI, { keepAlive: true, useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

module.exports = { mongoose }  // Export the active connection.
