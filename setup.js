const fs = require('fs');
const readline = require('readline').createInterface({ input: process.stdin, output: process.stdout, });

function prompt() {
    console.log(`\n===== DISCORD BOT SETUP =====\n\n`);
    readline.question(`Bot token: `, botToken => {
        readline.question(`Client ID: `, clientID => {
            readline.question(`Guild ID: `, guildID => {

                // JSON object
                const obj = {"token": `${botToken}`, "clientID": `${clientID}`, "guildID": `${guildID}`}

                // Convert JSON object to string
                const data = JSON.stringify(obj);

                // Write JSON file
                fs.writeFile('config.json', data, (err) => {
                    if (err) {
                        throw err;
                    }
                    console.log("\n\nConfiguration file has been updated!");
                });

                readline.close();
            });
        });
    });
}

prompt();