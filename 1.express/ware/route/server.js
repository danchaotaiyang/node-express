'use strict';


let express = require('express');
let soup = require('./routes/soup');
let noodles = require('./routes/noodles');

let app = express();


app.use('/soup', soup);
app.use('/noodles', noodles);
app.listen(12138);