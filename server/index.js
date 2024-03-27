require('dotenv').config()
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose');
const router = require('./router/index')


const PORT = process.env.PORT

const app = express();
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use('/api', router);

const start = async () => {
    try{
        await mongoose.connect(process.env.DB_URL)
        app.listen(PORT, ()=>{console.log(`Server started on port ${PORT}`)})
        mongoose.connection.on('error', err => {
            console.error('MongoDB connection error:', err);
        });
    }
    catch (e){
        console.log(e)
    }
} 
start()