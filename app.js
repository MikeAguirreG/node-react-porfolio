const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
require('dotenv').config()

// Importing Routes
const router = require('./routes/router');


// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());


//Midleware routes
app.use('/api', router);

// For production in Heroku
if(process.env.NODE_ENV === "production"){
    app.use(express.static('client/build'));
    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, "client" ,"build", "index.html"))
    })
}

//Port definitions
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server Running on Port ${port}`));