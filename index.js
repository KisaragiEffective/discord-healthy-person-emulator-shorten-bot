// https://healthy-person-emulator.memo.wiki/d/Discord%a4%ce%a5%b5%a1%bc%a5%d0%a4%cb%b7%f2%a5%a8%a5%df%a5%e5%a4%ceURL%a4%f2%c3%bb%bd%cc%a4%b9%a4%ebbot%a4%f2%c6%fe%a4%ec%a4%eb%a4%c8%ce%c9%a4%a4
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: Object.keys(Intents.FLAGS) });
const isgd = require('isgd');

client.login('DiscordのAPIキー');

client.on('ready', () => {
    console.log(`${client.user.tag}としてDiscordにログインしました`);
});

client.on('messageCreate', async msg => {
    const cmdRegex = /(https?:\/\/healthy-person-emulator\.memo\.wiki[\w!?/+\-_~;.,*&@#$%()'[\]]+)/i;
    let regExpMatchArray = msg.content.match(cmdRegex);
    if (regExpMatchArray) {
        let wikiURL = msg.content.match(cmdRegex)[1];
        isgd.shorten(wikiURL, (res) => {
            msg.channel.send(`健エミュ短縮リンク: ${res}`);
        });
    }
});
