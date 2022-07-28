const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URL)

const connection = mongoose.connection

connection.on('connected', () => {
    console.log('MongoDB connected')
})
connection.on('error', () => {
    console.log('Error in mongoDB connection')
})

module.exports = mongoose