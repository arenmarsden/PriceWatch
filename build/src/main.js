"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const config_json_1 = require("../config.json");
const client = new discord_js_1.Client({
    ws: {
        intents: discord_js_1.Intents.ALL,
    },
});
client.login(config_json_1.token).then(() => console.log(`Running...`))
    .catch((err) => console.error(err));
//# sourceMappingURL=main.js.map