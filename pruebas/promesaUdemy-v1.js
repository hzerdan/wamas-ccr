const empleados = [
    {
        id: 1,
        nombre: "Hugo",
        apellido: "apellido1"
    },
    {
        id: 2,
        nombre: "Horacio",
        apellido: "apellido2"
    },
    {
        id: 1,
        nombre: "Pato",
        apellido: "apellido3"
    }
    
]
const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        nombre: 2000
    },
    {
        id: 3,
        nombre: 3000
    }
    
]

const idc = 4;

const getEmpleado = (idc) => {
    const empleado = empleados.find( e => e.id === idc)?.nombre

    const promesa = new Promise((resolve,reject) => {
        if (empleado){
            resolve( empleado );
        } else {
            reject (`El empleado con id ${idc} no existe`);
        }
    });
    return promesa;
}
getEmpleado(idc)
.then( empleado => console.log( empleado ))
.catch(err => console.log(err));


