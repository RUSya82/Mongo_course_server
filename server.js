const express = require('express');
const mongoose = require('mongoose');
const movieRouter = require('./routes/movieRouter')



const PORT = 3000;
const URL = "mongodb://localhost:27017/moviebox";

const app = express();
app.use(express.json());
app.use(movieRouter);


mongoose
    .connect(URL)
    .then((res) => console.log('Connected to MongoDB'))
    .catch((err) => console.log(`DB connection error: ${err}`));

app.listen(PORT, (err) => {
    if(err){
        console.warn(err)
    } else {
        console.log(`listening port ${PORT}`)
    }
});


