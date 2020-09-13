const Discord = require("discord.js");
const ms = require("ms");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "tempmute",
  aliases: [],
  description: "Tempmute A User!",
  usage: "Tempmute <Mention User> <Time>",
  run: async (client, message, args) => {
    
    //Start
    message.delete();

    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);

    if (!Member) return message.channel.send(`Please Mention A User!`);

    let Role = message.guild.roles.cache.find(role => role.name === "Muted").id;

    if (!Role)
      return message.channel.send(
        `Please Create Mute Role | Role Name : Muted`
      );

    if (Member.user.roles.cache.has(Role)) {
      return message.channel.send(`Member Is Already Muted!`);
    };
    
    let Time = args.slice(1).join(" ");
    
    if (!Time) return message.channel.send(`Please Give Time Example : 1d!`);

    let Embed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`Member Muted!`)
      .addField(`Moderator`, `${message.author.tag} (${message.author.id}`)
      .addField(`Muted Member`, `${Member.user.tag} (${Member.user.id})`)
      .addField(`Muted For`, `${Time}`)
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();
    
    let Embed2 = new MessageEmbed()
      .setColor(Color)
      .setTitle(`Member Unmuted!`)
      .addField(`Moderator`, `${message.author.tag} (${message.author.id}`)
      .addField(`Unmuted Member`, `${Member.user.tag} (${Member.user.id})`)
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();

    if (Role && !Member.user.roles.cache.has(Role)) {
      Member.user.roles.add([Role]);
      message.channel.send(Embed);
    } else {
      message.channel.send(`Something Went Wrong, Try Again Later!`);
    };
    
    setTimeout(function() {
      Member.user.roles.remove([Role]);
      message.channel.send(Embed2);
    }, ms(Time))

    //End
  }
};