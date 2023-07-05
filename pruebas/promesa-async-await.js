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

const idc = 3;

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

const getInfoUsuario = async() => {

    try {
        const empleado = await getEmpleado(idc);
        const salario  = await getSalario(idc);
        return `El salario del empleado: ${ empleado } es de ${ salario }`
        
    } catch (error) {
        // return error; Si saliera con return diríamos que estoy manejando la excepcion y está todo bien
        throw error;
        
    }

}

getInfoUsuario()
    .then( msg => {
        console.log("TODO BIEN");
        console.log(msg)})
    .catch( err => {
        console.log( "TODO MAL");
        console.log( err)} );

