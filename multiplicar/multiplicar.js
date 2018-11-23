const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {
    return new Promise( (resolve, reject) => {
        
        console.log('====================='.green);
        console.log(`tabla del ${base}`.green);
        console.log('====================='.green);

        if(!Number(base)) {
            reject(`${base} no es un núobjectmero`);
            return;
        }

        if(!Number(limite)) {
            reject(`${limite} no es un número`);
            return;
        }

        for (let i = 1; i <= limite; i++) {
            console.log(`${base} x ${i} = ${base*i}`);
        }

        resolve();
    })
}

let crearArchivo = (base, limite = 10) => {
    return new Promise( (resolve, reject) => {

        if(!Number(base)) {
            reject(`${base} no es un número`);
            return;
        }

        if(!Number(limite)) {
            reject(`${limite} no es un número`);
            return;
        }

        let data = '';

        for( let i=1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }
        if(!Number(base)) {
            reject(`${base} no es un número`);
            return;
        }
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if( err ) 
                reject(err);
            else
                resolve(`tabla-${base}.txt`)
        })
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}