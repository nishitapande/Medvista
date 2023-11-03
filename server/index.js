const express = require('express');
const app = express();
const cors = require('cors');
const bycrypt = require('bcrypt');
const connection = require('./db.js');

//middleware
app.use(express.json());    
app.use(cors());

//connecting to database
connection();
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});