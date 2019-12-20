const express = require("express"),
  router = express.Router(),
  mainController = require("./controller/main.controller"),
  eventController = require("./controller/event.controller");

module.exports = router;
router.get("/", mainController.mainFun);
router.get("/event", eventController.showAll);
router.get("/create", eventController.createNew);
router.post("/create", eventController.prossesOfCreate);
router.get("/one/:slug", eventController.showOne);
router.get("/event/:slug/edit", eventController.editOne);
router.post("/event/:slug", eventController.processEdit);
router.get("/event/:slug/delete", eventController.deletOne);
