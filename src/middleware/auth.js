"use strict";

const { API_KEYS } = require("../constants");

const auth = async (ctx, next) => {
  if (
    ctx.request.query.apikey &&
    API_KEYS.some((key) => ctx.request.query.apikey === key)
  ) {
    return await next();
  }
  ctx.unauthorized({ success: false, message: "bad api key" });
};

module.exports = auth;
