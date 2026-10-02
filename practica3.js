const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingresa el nombre del cliente: ', (nombre) => {

    rl.question('Ingresa los días de vigencia de la reserva: ', (entradaDias) => {

        let dias = parseInt(entradaDias);

        let hoy = new Date();

        let fechaActual = hoy.toLocaleDateString('es-SV');

        let fechaExpiracion = new Date(hoy);

        fechaExpiracion.setDate(hoy.getDate() + dias);

        let fechaLimite =
            fechaExpiracion.toLocaleDateString('es-SV');

        console.log('\n--- COMPROBANTE DE RESERVA ---');
        console.log(`Cliente: ${nombre.toUpperCase()}`);
        console.log(`Fecha de emisión: ${fechaActual}`);
        console.log(`Fecha límite de pago: ${fechaLimite}`);

        rl.close();
    });
});