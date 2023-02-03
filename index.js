const express = require('express')
const cors = require('cors');
require('dotenv').config()


const app = express()
const port = 5000

// middleware
app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
    res.send('Running sawarieeeeeeeeeeeeeeeeee')
})

app.listen(port, () => {
    console.log('listening', port);
})