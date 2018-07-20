exports.run = (client, message, args) => {
    let [age, sex, location] = args;
    if(!age || !sex || !location) return;
    else { 
        message.reply(`hey ${message.author.username}, you seem to be a cute ${age} year old ${sex} from ${location}, wanna make loop?`);
}};