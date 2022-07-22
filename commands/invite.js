const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('invite')
		.setDescription('Replies with invite link!'),
	async execute(interaction) {
		await interaction.reply('https://ark-th.com/discord\n\nhttps://discord.com/invite/TrPaG7qw8s');
	},
};