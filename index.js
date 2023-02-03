const express = require('express')
const cors = require('cors');
require('dotenv').config()
const mongoose = require('mongoose');

const app = express()
const port = process.env.PORT;


// schema
const schema = new mongoose.Schema({
    fname: 'string',
    mname: 'string',
    lname: 'string',
    selectClasses: Number,
    selectDivisions: 'string',
    rollNumber : Number,
    adress1: 'string',
    adress2: 'string',
    landmark: 'string',
    city: 'string',
    pinCode: Number,
});
const test = mongoose.model('test', schema);

// middleware
app.use(cors())
app.use(express.json())

// connexting mongoose
// username: BengalSoft, pass: ybeXXUiq6cwuXQwB
mongoose.set('strictQuery', true);
mongoose.connect(`mongodb+srv://resulateAi:${process.env.DB_PASS}@resulateai.c5cu7yb.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => { console.log('Database connected successfully') })
    .catch(error => console.log(error))


    
// routes
app.post('/addDetails', async (req, res) => { //routes er bodol e app. use kora lagse. route use korle kaj kore na
    const addnewItem = new test(req.body);
    const savedItem= await addnewItem.save();
    res.send(savedItem);
})

// get the info in table
app.get('/manageStudents',  async (req,res)=> {
    const info = await test.find({});
    res.send(info);
   // console.log('something');
})

// testing server is runnig or not
app.get('/', (req, res) => {
    res.send('Running sawarieeeeeeeeeeeeeeeeee')
})

app.listen(port, () => {
    console.log('listening', port);
})
