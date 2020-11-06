const { getUser } = require("../components/helper");

module.exports = async ctx => {
	const { id, isBot, name } = getUser(ctx.from);

	const text = `<b>Assalomu alaykum hurmatli foydalanuvchi, ${name}!</b>`;

	return ctx.reply(text, {
		parse_mode: "HTML"
	});
};
