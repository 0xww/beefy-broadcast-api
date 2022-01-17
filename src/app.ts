"use strict";

const Koa = require("koa");
const helmet = require("koa-helmet");
const body = require("koa-bodyparser");
const cors = require("@koa/cors");
const respond = require("koa-respond");
const conditional = require("koa-conditional-get");
const etag = require("koa-etag");

const rt = require("./middleware/rt");
const powered = require("./middleware/powered");
const error = require("./middleware/error");
const router = require("./router");

const app = new Koa();

app.use(rt);
app.use(conditional());
app.use(etag());
app.use(helmet());
app.use(cors({ origin: "*" }));
app.use(powered);
app.use(respond());
app.use(body());

app.context.cache = {};

app.use(router.routes());
app.use(router.allowedMethods());

app.use(error);

const port = process.env.PORT || 3000;
app.listen(port);
console.log(`> beefy-broadcast-api running! (:${port})`);
