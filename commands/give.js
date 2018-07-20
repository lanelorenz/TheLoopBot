exports.run = (client, message, args) => {
    let member = message.mentions.members.first();
    if(!member) return;
    else {message.channel.send(`${member}, ${message.author.username} has sent you loop, do you accept? !yes or !no`, {file: "https://i.imgur.com/juIcEFm.png"});
}};