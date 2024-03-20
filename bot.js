import dotenv from 'dotenv';
import TelegramBot from 'node-telegram-bot-api';

// Mengimpor dan mengkonfigurasi dotenv
dotenv.config();

// Mengambil token dari variabel lingkungan
const token = process.env.TELEGRAM_BOT_TOKEN;

// Pastikan token tersedia
if (!token) {
    console.error('Token bot Telegram tidak ditemukan. Pastikan Anda telah mengatur variabel lingkungan TELEGRAM_BOT_TOKEN.');
    process.exit(1);
}

// Inisialisasi bot
const bot = new TelegramBot(token, { polling: true });

// Mendengarkan perintah /start
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id; // Mendapatkan ID obrolan (chat)
    const userId = msg.from.id; // Mendapatkan ID pengguna (user)

    // Mengirim pesan balasan yang berisi user ID
    bot.sendMessage(chatId, `Halo! User ID Anda adalah: ${userId}`);
});