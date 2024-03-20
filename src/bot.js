import TelegramBot from 'node-telegram-bot-api';

// Ganti 'TOKEN_BOT_ANDA' dengan token bot Telegram Anda
const token = '5145548744:AAHJ5yCsbhO4u_OkUlSV0UZGTNU_GnYGZeY';

// Inisialisasi bot
const bot = new TelegramBot(token, { polling: true });

// Mendengarkan perintah /start
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id; // Mendapatkan ID obrolan (chat)
    const userId = msg.from.id; // Mendapatkan ID pengguna (user)

    // Mengirim pesan balasan yang berisi user ID
    bot.sendMessage(chatId, `Halo! User ID Anda adalah: ${userId}`);
});
