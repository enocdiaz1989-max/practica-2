const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingresa el peso del paquete en kilogramos: ', (entradaPeso) => {

    let peso = parseFloat(entradaPeso);

    rl.question('Ingresa la tarifa por kilogramo en dólares: ', (entradaTarifa) => {

        let tarifa = parseFloat(entradaTarifa);

        let costoBase = peso * tarifa;

        let costoRedondeado = Math.round(costoBase);

        let costoMinimo = Math.floor(costoBase);

        let costoMaximo = Math.ceil(costoBase);

        console.log('\n--- COTIZACIÓN DEL ENVÍO ---');
        console.log(`Costo Base: $${costoBase.toFixed(2)}`);
        console.log(`Costo Redondeado Tradicional: $${costoRedondeado.toFixed(2)}`);
        console.log(`Costo Mínimo: $${costoMinimo.toFixed(2)}`);
        console.log(`Costo Máximo: $${costoMaximo.toFixed(2)}`);

        rl.close();
    });
});