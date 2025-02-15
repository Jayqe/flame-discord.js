const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "testembed",
    description: "sends a test embed",
    usage: "testembed",
    aliases: [],
run: async (client, message, args) => {

    const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#ee5615')
      .setTitle('Some title')
      .setURL('https://discord.js.org/')
      .setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
      .setDescription('Some description here')
      .setThumbnail('https://i.imgur.com/wSTFkRM.png')
      .addFields(
        { name: 'Regular field title', value: 'Some value here' },
        { name: '\u200B', value: '\u200B' },
        { name: 'Inline field title', value: 'Some value here', inline: true },
        { name: 'Inline field title', value: 'Some value here', inline: true },
      )
      .addField('Inline field title', 'Some value here', true)
      .setImage('https://i.imgur.com/wSTFkRM.png')
      .setTimestamp()
      .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

    message.channel.send(exampleEmbed);
    }
}