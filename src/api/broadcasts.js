"use strict";

const Router = require("@koa/router");
const Joi = require("joi");
const auth = require("../middleware/auth");
const validate = require("../middleware/validate");
const router = new Router();

// services
const discord = require("../services/discord");

const schema = Joi.object({
  query: {
    apikey: Joi.string().alphanum().required(),
  },
  body: {
    type: Joi.string().valid("warning", "error", "info").default("info"),
    title: Joi.string().min(4).required(),
    message: Joi.string().min(4).required(),
    platforms: Joi.array()
      .items(
        Joi.string().valid(
          "discord",
          "telegram",
          "twitter",
          "all",
          "only-privates",
          "only-publics"
        )
      )
      .required(),
  },
});

router.use(auth);

router.get("/", async (ctx, next) => {
  ctx.response.body = {
    success: true,
    messages: "broadcasting the meesages my friend",
  };
});

router.post("/", validate(schema), async (ctx, next) => {
  if (ctx.request.body.platforms.includes("discord")) {
    let { title, message, type } = ctx.request.body;
    try {
      discord.sendMessage({
        title,
        message,
        type,
      });
      ctx.response.body = {
        success: true,
        messages: "broadcasting the meesages",
      };
    } catch (error) {
      throw error;
    }
  }
});

module.exports = router;
