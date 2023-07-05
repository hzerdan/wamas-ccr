const { Router } = require("express");
const router = Router();

router.post("/location_insert", (req, res) => {
    try {
      res.status(201).json({
        info: "OK",
        status: "OK",
        transferid: 1822,
        uuid: null,
      });
    } catch (err) {
      res.status(400).json({
        info: "SSP-02718: Product for code[0] NOT FOUND!",
        status: "ERROR",
        transferid: 1822,
        uuid: null,
      });
    }
  });

  module.exports = router;