const express = require('express');

const router = require('./routes/routers');

const path = require('path');


const app = express();
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));  


app.set('view engine', 'ejs');

app.use(router);

app.listen(3000);
