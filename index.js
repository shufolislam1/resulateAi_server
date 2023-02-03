const express = require('express')
const cors = require('cors');
require('dotenv').config()
const mongoose = require('mongoose');

const app = express()
const port = process.env.PORT;


// schema
const schema = new mongoose.Schema({ name: 'string', price: Number, quantity: Number });
const test = mongoose.model('test', schema);

// middleware
app.use(cors())
app.use(express.json())

// connexting mongoose
// username: BengalSoft, pass: ybeXXUiq6cwuXQwB
mongoose.set('strictQuery', true);
mongoose.connect(`mongodb+srv://resulateAi:${process.env.DB_PASS}@resulateai.c5cu7yb.mongodb.net/?retryWrites=true&w=majority`)
.then(() => {console.log('Database connected successfully')})
.catch(error => console.log(error))


app.get('/', (req, res) => {
    res.send('Running sawarieeeeeeeeeeeeeeeeee')
})

app.listen(port, () => {
    console.log('listening', port);
})

// resulateAi
// wNyBiDbIAo5Im5tI