const mongoose = require('mongoose');


const connect = async () => {
    try {
        const key = "qTiaBHwwc1IDz4kT"
        await mongoose.connect(`mongodb+srv://rinaldovilela:${key}@cluster0.pqexu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
        console.log('Connected to database')
    } catch (error) {
        console.log(`Error connecting to database`)
    }
}

module.exports = {connect}


//qTiaBHwwc1IDz4kT
