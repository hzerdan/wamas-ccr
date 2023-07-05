new Promise((resolver, rechazar) => {
    console.log('Inicial');

    resolver();
})
.then(() => {

    throw new Error('Algo falló');
    console.log('Haz esto');
})
.catch(() => {
    console.log('Haz aquello con la primera promesa');
})
.then(() => {
    console.log('Haz esto sin que importe lo que sucedió antes');
})
.catch(() => {
    console.log('Algo mas fallooooo');
})
// setTimeout(() => {console.log("Hola Mundo flecha")}, 1000);
// setTimeout( function () {
//     console.log("Hola mundo funcion")
    
// })