const fs = require('fs');
const base = 3;

// OPCION 1

const crearArchivo = async ( base = 5 ) => {

    try {
        console.clear()
        console.log('=========================');
        console.log('     Tabla del:',base     );
        console.log('=========================');
    
        let salida = '';
    
        for (let i = 1; i <= 10; i++){
            salida += `${base} x ${i} = ${base * i}\n`;
        }
    
        console.log(salida);
        fs.writeFileSync( `tabla-${base}.txt`,salida);
        return `tabla-${base}.txt`;
    } catch (err) {
        throw err;
    }
};


// OPCION 2
const crearArchivo1 = ( base = 5 ) => {

    return new Promise( (resolve,reject) => {
        try {
            console.clear()
            console.log('=========================');
            console.log('     Tabla del:',base     );
            console.log('=========================');
        
            let salida = '';
        
            for (let i = 1; i <= 10; i++){
                salida += `${base} x ${i} = ${base * i}\n`;
            }
        
            console.log(salida);
            fs.writeFileSync( `tabla-${base}.txt`,salida);
            console.log( `tabla-${base}.txt` );
            resolve (`tabla-${base}.txt`);
        } catch (err) {
            reject(err);
        }
    })
};




// crearArchivo1(base)
// .then(nombreArchivo => console.log("Opcion2: Se creó el archivo",nombreArchivo))
// .catch(err => console.log(err));

crearArchivo(base)
.then(nombreArchivo => console.log("Opcion1: Se creó el archivo",nombreArchivo))
.catch(err => console.log("Volvió con error:",err));



module.exports= {
    crearArchivo1
}