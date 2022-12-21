const express = require('express');
const bodyParser = require('body-parser');


const indexRoutes = require('./routes/index');

const app = express();


app.use(bodyParser.json()); //application/json

app.use('/index', indexRoutes);

app.listen(8080);