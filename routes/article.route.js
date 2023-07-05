const { Router } = require("express");
const router = Router();

router.post("/article_insert", (req, res) => {

      res.status(201).json({
        info: "OK",
        status: "OK",
        transferid: 1822,
        uuid: null,
      });
})

module.exports = router;