exports.run = (client, message, args) => {
    const schedule = require("node-schedule");
    var postPic = schedule.scheduleJob("53 11 * * *", function(){
        message.channel.send({file: 'https://i.imgur.com/eA6CbjN.jpg'});
    });
    postPic;
};