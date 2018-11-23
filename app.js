// required
// const fs = require('fs'); // propios de node
// const fs = required('express'); //paquetes externos
// const fs 0 required('./fs'); // otros archivos del proyecto

const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch( comando ) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        .catch(e => console.log(e));
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
        .then( archivo => console.log(`Archivo creado ${archivo}`.green))
        .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}

// let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];

// crearArchivo(base)
//     .then( archivo => console.log(`Archivo creado ${archivo}`))
//     .catch(e => console.log(e));


