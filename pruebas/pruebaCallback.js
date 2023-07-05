
getUsuarioById = function(id,callback){
    const user = {
        id,
        nombre:"Hugo"
    }



    setTimeout( () =>{
        console.log("Settimeout");
        callback(user)
},1500 )

return user;
} ;

function saludar(pepito1) { 
    console.log( "Callback funcion saludar:", 'Hola ' + pepito1.nombre); 
}
    const Quepasa = getUsuarioById(10, (ResultadoCallback)=>{
    console.log("Resultado Callback:", ResultadoCallback);
});

getUsuarioById(10,saludar);



//// otro ejemplo

console.log('Otro ejemplo:');


function saludar1(pepito1) { 
    console.log( "Callback funcion:", 'Hola ' + pepito1); 
  }; 
function procesarEntradaUsuario(callback) { 
    var nombre = "Hugo"; 
    console.log("Ejecutando ProcesarEntradaUsuario");
    callback(nombre); 
  }; 
  
  procesarEntradaUsuario(saludar1); 
 
  procesarEntradaUsuario((pepito)=>{
    console.log( "Callback flecha:", "Hola "+pepito);
  }   ); 

 

 

