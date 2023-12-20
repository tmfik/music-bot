//

import fs from "fs";

class Music {
  constructor() {
    this.mStart =
      "Bot telah diaktifkan. Ketikkan /someaudios atau /audiomediagroup untuk memulai audio.";
    this.mSend = "Musik akan segera ditampilkan, harap tunggu...";
    this.mFail = "Gagal menampilkan musik.";
  }
  async botStart(ctx) {
    await ctx.telegram.setMyCommands([
      { command: "someaudios", description: "Find a partner" },
      {
        command: "audiomediagroup",
        description: "Stop current dialog and find a new partner",
      },
    ]);
    await ctx.reply(this.mStart);
  }

  // Menangani perintah untuk mengirim beberapa file audio
  async botSomeAudio(ctx) {
    try {
      // Daftar file audio yang ingin dikirimkan
      const audioFiles = [
        "path/to/audios/audio01.mp3",
        "path/to/audios/audio02.mp3",
        "path/to/audios/audio03.mp3",
        // Tambahkan path file audio lainnya sesuai kebutuhan
      ];

      // Loop melalui daftar file audio dan mengirimkannya satu per satu
      for (const file of audioFiles) {
        // Membaca file audio dari sistem file
        ctx.reply(this.mSend);
        const audioBuffer = fs.readFileSync(file);

        // Mengunggah file audio ke Telegram
        await ctx.replyWithAudio({ source: audioBuffer });
      }
    } catch (err) {
      ctx.reply(this.mFail);
      console.error(`${this.mFail} ${err}`);
    }
  }

  // Menangani perintah untuk mengirim file audio dalam satu pesan MediaGroup
  async botAudioMediaGroup(ctx) {
    try {
      ctx.reply(this.mSend);
      await ctx.replyWithMediaGroup([
        {
          type: "audio",
          media: { source: "path/to/audios/audio01.mp3" },
        },
        {
          type: "audio",
          media: { source: "path/to/audios/audio02.mp3" },
        },
        {
          type: "audio",
          media: { source: "path/to/audios/audio03.mp3" },
        },
        // Tambahkan path file audio lainnya sesuai kebutuhan
      ]);
    } catch (err) {
      ctx.reply(this.mFail);
      console.error(`${this.mFail} ${err}`);
    }
  }
}

export const music = new Music();
