"use strict";

const Router = require("@koa/router");
const router = new Router();

const status = require("./api/status");
const broadcasts = require("./api/broadcasts");

router.use("/broadcasts", broadcasts.routes());

router.get("/", status);

module.exports = router;
