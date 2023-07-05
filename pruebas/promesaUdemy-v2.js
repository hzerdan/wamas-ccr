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
        id: 3,
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
        salario: 2000
    },

    
]

const idc = 2;

const getEmpleado = (idc) => {
    const empleado = empleados.find( e => e.id === idc)?.nombre

    return new Promise((resolve,reject) => {
        (empleado)
            ? resolve( empleado )
            : reject (`El empleado con id ${idc} no existe`);
        });
}

const getSalario = (idc) => {
    const salario = salarios.find( s => s.id === idc)?.salario
    return new Promise((resolve,reject) => {
        (salario)
            ? resolve( salario )
            : reject (`El empleado con id ${idc} no tiene salario`);
        });
}

getEmpleado(idc)
.then( empleado => console.log( empleado ))
.catch(err => console.log(err));

getSalario(idc)
.then( salario => console.log( salario ))
.catch(err => console.log(err));


// getEmpleado(idc)
//     .then ( empleado => {

//         getSalario(idc)
//             .then (salario => console.log(`El empleado ${empleado} tiene un salario de ${salario}`))
//             .catch( err => console.log(err))
//     } )
//     .catch(err=> console.log(err));

