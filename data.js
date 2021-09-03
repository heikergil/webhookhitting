const Cambio = require('./models/cambios');
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

function fechaUTC(dias=0) {
    let fecha = new Date();
    fecha.setUTCDate(fecha.getUTCDate() - dias);
    return fecha
  }

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

  async function saveToDatabase(datos) {

    for (const dato of datos) {
        try {
            await Cambio.create(dato)
            console.log(dato);
        }
        
      catch(err) {
        console.error(err);
      }
    }
      
  }

  saveToDatabase(datosCambio);