const { Router } = require("express");
const router = Router();

var i =  0
var inicio = new Date();
var ini1   = new Date();
var ini2   = new Date();
var ojo    = ' ';

console.log("Inicio de escucha:","i:",i,"inicio:",inicio,"       ini1:",ini1,"      ini2:",ini2);


router.post("/order_insert", (req, res) => {
  
    
    if (i === 0){
      inicio = new Date();
      ini1 = new Date();
      ini2 = new Date();
    };
    ini1 = ini2;
    ini2 = new Date();
    ojo = (ini2.getTime() - ini1.getTime()) > 500? '!!!!!!!': ' ';



      i++
      
      console.log("Orden:",i, " Ordir_id:",req.body.parameters.order_id," Hora:",Date(),"Tiempo Parcial:", (ini2.getTime()-ini1.getTime())/1000,"Tiempo Total", (ini2.getTime()-inicio.getTime())/1000,ojo);

      res.status(201).json({
        info: "Ruta order_insert",
        status: "OK",
        prueba:"Se insertó esta propiedad",
        transferid: 1822,
        uuid: null,
      });
})
router.post("/location_devare", (req, res) => {
    
    res.status(201).json({
        info: "Ruta Location_devare",
        status: "OK",
        transferid: 1822,
        uuid: null,
      });
})
router.post("/order_abort", (req, res) => {

      res.status(201).json({
          info: "Ruta order_abort",
          status: "OK",
        transferid: 1822,
        uuid: null,
    });
})
router.post("/transport_insert", (req, res) => {

      res.status(201).json({
          info: "Ruta transpoort_insert",
          status: "OK",
        transferid: 1822,
        uuid: null,
    });
})
router.post("/bar_code_insert", (req, res) => {

    res.status(201).json({
        info: "Ruta bar_code_insert",
        status: "OK",
        transferid: 1822,
        uuid: null,
    });
})
router.post("/bar_code_devare", (req, res) => {

      res.status(201).json({
        info: "Ruta bar_code_devare",
        status: "OK",
        transferid: 1822,
        uuid: null,
    });
})
router.post("/station_close", (req, res) => {

      console.log("Ordir_id:",req.body.parameters.order_id," Time:",Date());
  // var resp = req;
      // console.log(req);
      // var resp = JSON.stringify(req)  ;
      res.status(201).json({
        info: "Ruta station_close",
        status: "OK",
        transferid: 1822,
        uuid: null,
        // respuesta:resp,
        nombre:"Hugo",
      });
})

module.exports = router;