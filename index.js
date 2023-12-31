
const Reenvio = require('./models/reenvio');

const reenvio = new Reenvio()
var pedido = {
    "nested": [
        {
            "nested": [],
            "parameters": {
                "article_id": "78199",
                "ordered_packunits": "3",
                "packunit_size": 1,
                "host_line_id": "1",
                "scan_trazable": "false",
                "scan_lot": "true",
                "geo_code": "07-10-3-05"
            },
            "messagetype": "line"
        }
    ],
    "parameters": {
        "order_id": 999999,
        "sub_order_id": 1,
        "host_num_alm": "401",
        "tu_type": "101",
        "check": "false",
        "print": "true",
        "invoice": "true",
        "route_id": "Z40006",
        "priority": 1,
        "special_area": "false",
        "departure_date": 20230623,
        "departure_time": 170000,
        "customer_id": "100524",
        "transfer_id": "162189",
        "uuid": ""
    },
    "messagetype": "order_insert"
};

const respuesta = reenvio.peticion(pedido) 
console.log( respuesta);

