const express = require("express");
const mongoose = require("mongoose");
const url = 'mongodb://0.0.0.0:27017/MoviesDb';

const app = express();

mongoose.connect(url)

const conn = mongoose.connection

conn.on('open', ()=>{
    console.log('connected..')
})

app.use(express.json())

const movieRouter = require('./routes/movies')
app.use('/movies',movieRouter);
app.listen(8000,()=>{
    console.log('server started');
    console.log('Database Connected successfully');
})