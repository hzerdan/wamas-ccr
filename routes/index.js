const { Router } = require("express");
const router = Router();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const home = require("./home.route");
const routeInsert = require("./route.route");
const articleInsert = require("./article.route")
const bundleInsert = require("./bundle.route")
const locationInsert = require("./location.route")
const allroutes = require("./allroutes.route")
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("", home);
router.use("/", routeInsert);
router.use("/", articleInsert);
router.use("/", bundleInsert);
router.use("/", locationInsert);
router.use("/", allroutes);

module.exports = router;
