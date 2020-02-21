const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite = 10)=>{

    console.log(`======================`.rainbow);
    console.log(`Tabla de ${base}`.america);
    console.log(`======================`.rainbow);


    for (let i = 1; i <= limite; i++ ){
        console.log( `${base} * ${i} = ${base * i}`);
     }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise ( (resolve, reject) => {
       //Si base no es un número
       if ( !Number(base)) {
           reject(`El valor introducido ${base} no es un número`);
           //para que el programa no continúe pongo return;
           return;
       }

       let data = '';
       
       for (let i = 1; i <= limite; i++ ){
          data += `${base} * ${i} = ${base * i}\n`;
       }
       
       
       // nombre de archivo / datos a guardar
       fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
         if (err) reject (err);
         else 
             resolve(`tabla-${base}-al-${limite}.txt`.green)
          
       });


    });
}

//exportar para usar en otros archivos
module.exports = {
    crearArchivo,
    listarTabla
}

