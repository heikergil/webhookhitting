
module.export = {
    fechaMenosDias: function(dias=0) {
        let fecha = new Date();
        fecha.setUTCDate(fecha.getUTCDate() - dias);
        return fecha
    }
};