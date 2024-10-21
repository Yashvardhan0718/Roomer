const mongoose = require('mongoose')
const mongoURI = process.env.MONGODB_URI || 'mongodb://0.0.0.0:27017/RoomerAPI'

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

module.exports = { mongoose }  // Export the active connection.