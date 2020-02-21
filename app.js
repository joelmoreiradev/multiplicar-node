// requireds

// const fs = require('express');
// const fs = require('./archivo');

const argv = require('./config/yargs').argv;
const colors = require('colors');

// console.log('asd'.rainbow.underline);

const { crearArchivo, listarTabla } = require ('./multiplicar/multiplicar');


let comando = argv._[0];


switch( comando ){
 case 'listar':
  listarTabla(argv.base, argv.limite);
   break;
   case 'crear':
    crearArchivo(argv.base, argv.limite)
    //.then (resolve) .catch (reject)
     .then(archivo => console.log(`archivo creado: ${archivo}`))
     .catch(e => console.log(e));
   break;
   default:
     console.log('comando no reconocido');
    
}
// console.log(argv);
// console.log(argv.base);
// console.log('Limite',argv.limite);





//base ahora obtiene el valor que le de en consola usando "node app --base=5"

 