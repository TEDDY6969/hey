const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "serverinfo",
  aliases: ["serverinformation"],
  description: "Show Server Information!",
  usage: "Serverinfo",
  run: async (client, message, args) => {
    //Start
    message.delete();
    const guild = message.guild;
    const Emojis = guild.emojis.cache.size || "No Emoji!";
    const Roles = guild.roles.cache.size || "No Roles!";
    const Members = guild.memberCount;
    const Humans = guild.members.cache.filter(member => !member.user.bot).size;
    const Bots = guild.members.cache.filter(member => member.user.bot).size;

    const embed = new MessageEmbed()
      .setTitle(guild.name + " Information!")
      .setColor(Color)
      .setThumbnail(guild.iconURL())
      .addField(` <a:redBadge:819501788766928927> Name`, guild.name, true)
      .addField(` <a:redBadge:819501788766928927> ID`, `${guild.id}`, true)
      .addField(` <a:redBadge:819501788766928927> Owner`, `${guild.owner.user.tag}`, true)
      .addField(` <a:redBadge:819501788766928927> Roles Count`, Roles, true)
      .addField(` <a:redBadge:819501788766928927> Emojis Count`, Emojis, true)
      .addField(` <a:redBadge:819501788766928927> Members Count`, Members, true)
      .addField(` <a:redBadge:819501788766928927> Humans Count`, Humans, true)
      .addField(` <a:redBadge:819501788766928927> Bots Count`, Bots, true)
      .addField(` <a:redBadge:819501788766928927> Server Created At`, guild.createdAt.toDateString())
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();

    message.channel.send(embed);

    //End
  }
};