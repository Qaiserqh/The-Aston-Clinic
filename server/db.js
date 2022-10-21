const mongoose = require('mongoose');

var mongoURL = 'mongodb+srv://root:gnEjF1riC6GTUYrR@the-aston-clinic.hknbslw.mongodb.net/astonClinc'

mongoose.connect(mongoURL , {useUnifiedTopology: true, useNewUrlParser: true})

var connection = mongoose.connection

connection.on('error', () =>{
    console.log('Mongo DB Connection Failed')
})

connection.on('connected', () =>{
    console.log('Mongo DB Connection Successful')
})

module.export = mongoose