const axios = require('axios');
const { response } = require('express');
// let pedido = {
//     "nested": [
//         {
//             "nested": [],
//             "parameters": {
//                 "article_id": "78199",
//                 "ordered_packunits": "3",
//                 "packunit_size": 1,
//                 "host_line_id": "1",
//                 "scan_trazable": "false",
//                 "scan_lot": "true",
//                 "geo_code": "07-10-3-05"
//             },
//             "messagetype": "line"
//         }
//     ],
//     "parameters": {
//         "order_id": 999999,
//         "sub_order_id": 1,
//         "host_num_alm": "401",
//         "tu_type": "101",
//         "check": "false",
//         "print": "true",
//         "invoice": "true",
//         "route_id": "Z40006",
//         "priority": 1,
//         "special_area": "false",
//         "departure_date": 20230623,
//         "departure_time": 170000,
//         "customer_id": "100524",
//         "transfer_id": "162189",
//         "uuid": ""
//     },
//     "messagetype": "order_insert"
// };


class Reenvio {

    constructor() {

    }


    async peticion(mje) {

        // console.log(mje);

        try {
            //***************************  Comienzo del Post  ************************************* 
            // const resp = await axios.post('https://reqres.in/api/register',
            // // const resp = await axios.post('192.0.1.102:8183/order_insert',
            
    
            
            // // const resp = await axios.post('http://192.0.1.102:8183/order_insert',
            
            // {
            //         "email": "eve.holt@reqres.in",
            //         "password": "cualquier cosa"
            //     }
                
            //     // pedido
                
            //     )
            //     .then(function (response) {
            //         console.log("Respuesta correcta",response.data);
            //         return "Retorno: Respuesta correcta";
            //     })
            //     .catch(function (error) {
            //         console.log("Respuesta con error",error);
            //         return error;
            //     }
            //     ) ;
            //***************************  Fin del Post  ************************************* 
            //***************************  Comienzo del get  ************************************* 
            // const resp = await axios.get('https://reqres.in/api/users?page=2');
            const resp = await axios.get('https://reqres.in/api/uscvzers?page=2');
            console.log(resp.data.per_page);
            return "Retorno: anduvo todo bien";
            //***************************  Fin del get   ************************************* 
            } catch (error) {
                console.log("Hubo un error");
            return "Retorno: Hubo un error";           
        };

        console.log(resp);
            
        }      
};

module.exports = Reenvio;

