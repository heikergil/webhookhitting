const express = require('express')
const app = express();
const mongoose = require('mongoose');
const Cambio = require('./models/cambios');
const axios = require('axios');
const helpers = require('./helpers.js');
console.log(helpers);


mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

    const datosCambio = {
        moneda: 'EUR',
        valor: 2.4,
        fecha:new Date()
    }

app.get('/', async (req, res) => {
    const data = JSON.stringify(datosCambio);
    
    axios
        .post('https://webhook.site/fe1b3323-f455-429a-af7a-6ffb74e757ef', {
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
              },
              body: data,
        })
        .then(console.log('success') )
        .catch(
            (err) => console.error(`Error golpeando el webhook ${err}`));
           
  res.send('Hello World!');
});




app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
});