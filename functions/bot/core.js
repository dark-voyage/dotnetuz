const Telegraf = require("telegraf");
const bot = new Telegraf(process.env.TELEGRAM);

module.exports = bot;
