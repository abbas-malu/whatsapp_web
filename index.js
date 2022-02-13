const qrcode = require('qrcode-terminal');

const { Client } = require('whatsapp-web.js');
const { MessageMedia } = require('whatsapp-web.js');
const client = new Client();
const media = MessageMedia.fromFilePath('test.jpeg');
client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
client.on('message', message => {
    console.log(message.from)
    var abbas = ['916232705352','917024153987','918839477855','918817672852']

    async function demo(abbas){
        for (let i = 0; i < 4; i++) {
            client.sendMessage(`${abbas[i]}@c.us`,media,{'caption': `Hello ${abbas[i]}`});
            // client.sendMessage(media,})
            await sleep(5000);
        };
    }
    demo(abbas);
});
client.initialize();
