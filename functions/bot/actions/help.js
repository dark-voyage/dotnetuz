const { getUser } = require("../components/helper");

module.exports = async ctx => {
	const { id, isBot, name } = getUser(ctx.from);

	const text = `<b>This is help page!</b>`;

	if (isBot) {
		return ctx.reply(`Sorry I only interact with humans!`);
	}
	return ctx.reply(text, {
		parse_mode: "HTML"
	});
};
