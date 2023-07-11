const express = require('express');
const cors = require("cors");

 const { categoryRoutes } = require('./routes/categoryRoute');
 const { UserRoutes } = require('./routes/userRoute');

const { db } = require('./config/db');
const app = express();
require('dotenv').config()

db.connect();

app.use(express.json())
app.use(cors());



app.use('/api/category', categoryRoutes)
app.use('/api/user', UserRoutes)


app.listen(3000,()=>{
    console.log("okey");
});