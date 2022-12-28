const express = require('express');
const dotenv = require('dotenv').config();
const path = require('path');
const PORT = process.env.PORT || 5000;

const app = express();

// enable json
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

// setting up static files
app.use(express.static(path.join(__dirname, 'public')));

app.use('/openai', require('./routes/openaiRoutes'))

app.listen(PORT, () => console.log(`Server started at port ${PORT}`))