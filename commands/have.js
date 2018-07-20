exports.run = (client, message, args) => {
    let member = message.mentions.members.first();
    message.channel.send(`${member}, ${message.author.username} would like to know if you have any loop`);
}