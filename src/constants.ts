const API_BASE_URL = process.env.API_BASE_URL || "http://localhost:3000";

const API_KEYS = process.env.API_KEYS
  ? String(process.env.API_KEYS).split(",")
  : ["nope"];

const PLATFORM_DISCORD_WEBHOOK_URL =
  process.env.PLATFORM_DISCORD_WEBHOOK_URL ||
  "https://discord.com/api/webhooks/914674522173632592/amo5u4RC02l6tpu5tuwQaaH0kij-N8O7335gT336hICkcHMltk7ke6PIDh4CuqahqZJi";

const BASE_HPY = 2190;
const MINUTELY_HPY = 525600;
const HOURLY_HPY = 8760;
const DAILY_HPY = 365;
const WEEKLY_HPY = 52;

export {
  API_BASE_URL,
  API_KEYS,
  PLATFORM_DISCORD_WEBHOOK_URL,
  BASE_HPY,
  MINUTELY_HPY,
  HOURLY_HPY,
  DAILY_HPY,
  WEEKLY_HPY,
};
