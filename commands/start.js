exports.run = (client, message, args) => {
    function test() {
        message.channel.send({file: 'https://i.imgur.com/eA6CbjN.jpg'});
    };
    setInterval(function() {
        test();
    }, 86400000);
};