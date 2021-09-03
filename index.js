const express = require('express')
const app = express();
const mongoose = require('mongoose');
const axios = require('axios');
const engine = require("ejs-mate");
const path = require("path");
const connectDB = require('./config/db');
const Cambio = require('./models/cambios');



app.use(express.urlencoded({ extended: true }));

  
connectDB();


app.get('/consulta', async (req, res) => {

  await Cambio.find()
   .then(cambio => {
    console.log(cambio);
    axios.post('https://webhook.site/04a014a0-f138-4869-b665-a3ed188cdba5', {
  body: JSON.stringify(cambio),
});
    res.json(cambio)
  }).then()
  .catch(err => res.status(404).json({ sinDatos: 'No existen datos, corra data.js' }));
  
  
});




app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
});