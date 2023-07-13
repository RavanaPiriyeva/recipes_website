const express = require('express');
const cors = require("cors");

const { categoryRoutes } = require('./routes/categoryRoute');
const { UserRoutes } = require('./routes/userRoute');
const { recipeRoutes } = require('./routes/recipeRoute');
const { tagRoute } = require('./routes/tagRoute')
const { rateRoutes } = require('./routes/rateRoute')


const { db } = require('./config/db');
const app = express();
require('dotenv').config()

db.connect();

app.use(express.json())
app.use(cors());



app.use('/api/category', categoryRoutes)
app.use('/api/user', UserRoutes)
app.use('/api/recipe', recipeRoutes)
app.use('/api/tag',tagRoute)
app.use('/api/rate',rateRoutes)



app.listen(3000,()=>{
    console.log("okey");
});