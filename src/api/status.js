"use strict";

async function status(ctx, next) {
  ctx.status = 200;
}

module.exports = status;
