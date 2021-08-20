const express = require('express')
const app = express();
const mongoose = require('mongoose');
const Cambio = require('./models/cambios');
const axios = require('axios');
const engine = require("ejs-mate");
const path = require("path");


function fechaUTC(dias=0) {
  let fecha = new Date();
  fecha.setUTCDate(fecha.getUTCDate() - dias);
  return fecha
}


mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});


app.set("views", path.join(__dirname, "views"));
app.engine("ejs", engine);
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

    const datosCambio = [
        {moneda: 'EUR',
        valor: 2.4,
        fecha:fechaUTC()},
        {moneda: 'EUR',
        valor: 2.3,
        fecha:fechaUTC(1)},
        {moneda: 'EUR',
        valor: 2.4,
        fecha:fechaUTC(2)},
        {moneda: 'EUR',
        valor: 2.5,
        fecha:fechaUTC(3)},
        {moneda: 'EUR',
        valor: 2.6,
        fecha:fechaUTC(4)},
      ]



app.get('/', async (req, res) => {

  // const consultaValor = await Ingreso.find({"fecha" : {$gte: menos24horas, $lte: hora_actual}});






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
           
  res.render('consulta');
});




app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
});