//

import bot from "../bot.js";
import { music } from "./music.js";

bot.start(async (ctx) => {
  music.botStart(ctx);
});
bot.command("allaudio", async (ctx) => {
  music.botAllAudio(ctx);
});
bot.command("someaudios", async (ctx) => {
  music.botSomeAudio(ctx);
});
bot.command("audiomediagroup", async (ctx) => {
  music.botAudioMediaGroup(ctx);
});

export default bot;
