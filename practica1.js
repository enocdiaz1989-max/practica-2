const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingresa tu nombre completo: ', (nombreOriginal) => {

    rl.question('Ingresa tu año de nacimiento: ', (anio) => {

        let nombreLimpio = nombreOriginal.trim();

        let nombreMayusculas = nombreLimpio.toUpperCase();

        let partesNombre = nombreMayusculas.split(" ");

        let primerNombre = partesNombre[0];

        let primerasTresLetras = primerNombre.slice(0, 3);

        let ultimosDosDigitos = anio.slice(-2);

        let codigoUsuario =
            primerasTresLetras + ultimosDosDigitos + "-ESTUDIANTE";

        console.log('\n--- DATOS DEL ESTUDIANTE ---');
        console.log(`Nombre formateado: ${nombreMayusculas}`);
        console.log(`Cantidad de caracteres: ${nombreOriginal.length}`);
        console.log(`Código de Usuario: ${codigoUsuario}`);

        rl.close();
    });
});