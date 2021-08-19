const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cambio = new Schema({
    moneda: {
      type:String,
      required: true
  },
    valor: {
      type: Number,
      required: true
    },
    fecha: {
        type: Date,
        required: true
    }
});

const Cambio = mongoose.model("Cambios", cambio);

module.exports = Cambio;

