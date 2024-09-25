const express = require('express');
const mongoose = require('mongoose');
const {orders, OrderModel} = require('./src/models/orders')
const {connect} = require('./src/database/connection')


const app = express()

const port = 3000

app.use(express.json())

// app.get('/', (req, res) => {
//     res.send('Olá Softex')
// })

app.get('/orders', async (req, res) => {
    const orders = await OrderModel.find({}).exec();
    if (orders.length === 0 ) {
        return res.status(404).send('No orders found');
    }

    return res.send(orders);
})


app.listen(port, () => {
    connect()
    console.log(`Server is running on port  ${port}` )
} )