import { env } from "./env.js";
import { Telegraf } from "telegraf";

// const token = env.token;
const bot = new Telegraf(env.token);

try {
  console.log("Bot sedang berjalan");
} catch (error) {
  console.error("Terjadi error saat menjalankan bot:", error);
}

bot.launch();
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));

export default bot;
