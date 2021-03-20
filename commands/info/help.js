const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color, Prefix } = require("../../config.js");

module.exports = {
  name: "help",
  aliases: ["h"],
  description: "Help Command!",
  usage: "Help | <Command Name>",
  run: async(client, message, args) => {
    
    message.delete();
    
    let embed = new MessageEmbed()
    .setColor(Color)
    .setTitle(` <a:redBadge:819501788766928927> ${client.user.username} Commands!`)
    .setDescription(` <a:DE_HypesquadGold:819503430141214751> Use ${Prefix}Help <Command Name> For More Command Information!` + 
    "\n\n** <a:BlueFire:819627527861174302> Fun**\n`Avatar, Coinflip, Howgay, Meme, Rate, 8ball, Dicksize, Ascii, Choose, Hack, Randomnumber`" + "\n\n" + "** <a:Setting:819578928527441940> Moderation**\n`Clear, Mute, Unmute, Tempmute, Kick, Ban, Unban, Tempban, Warn, Warnings, ResetWarns`" + "\n\n"+
    "** <a:vrInstagram:819522520390041680> Information**\n`Help, Covid, Weather, Userinfo, Serverinfo, Ping`")
    .addField('<a:DE_HypesquadGold:819503430141214751> Links', `[Invite Now ](https://discord.com/api/oauth2/authorize?client_id=822733731747332107&permissions=8&scope=bot)`)
    .setImage("https://cdn.discordapp.com/attachments/819191238271959055/822744199614431252/standard_3.gif")
    .setFooter(`Requested By ${message.author.username}`)
    .setTimestamp();
    
    if (!args.length) return message.channel.send(embed);

    let cmd =
      client.commands.get(args[0].toLowerCase()) ||
      client.commands.get(client.aliases.get(args[0].toLowerCase()));

    let embed2 = new MessageEmbed()
      .setColor(Color)
      .setTitle(`${cmd.name} Information!`)
      .addField(`Aliases`, cmd.aliases || "None!")
      .addField(`Usage`, cmd.usage || "No Usage")
      .addField(`Description`, cmd.description || "No Description!")
      .setTimestamp();

    if (cmd) {
      return message.channel.send(embed2);
    } else {
      return message.channel.send(embed);
    }
  }
};
