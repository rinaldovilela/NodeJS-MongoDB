const express = require('express');
const mongoose = require('mongoose');


const app = express()

const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Olá Softex')
})

app.listen(port, () => {

    console.log(`Server is running on port  ${port}` )
} )