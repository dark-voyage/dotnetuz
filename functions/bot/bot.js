const Telegraf = require("telegraf");
const bot = new Telegraf(process.env.TELEGRAM);

bot.start(ctx => {
	return require("./actions/start")(ctx);
});

bot.help(ctx => {
	return require("./actions/help")(ctx);
});

exports.handler = async event => {
	try {
		await bot.handleUpdate(JSON.parse(event.body));
		return { statusCode: 200, body: "" };
	} catch (e) {
		console.log(e);
		return {
			statusCode: 400,
			body: "This endpoint is meant for bot and telegram communication"
		};
	}
};
