import dotenv from 'dotenv';
import TelegramBot from 'node-telegram-bot-api';

// Import and configure dotenv
dotenv.config();

// Fetch token from environment variable
const token = process.env.TELEGRAM_BOT_TOKEN;

// Ensure token is available
if (!token) {
    console.error('Error: Telegram bot token not found. Make sure you have set the environment variable TELEGRAM_BOT_TOKEN.');
    process.exit(1);
}

// Initialize the bot
const bot = new TelegramBot(token, { polling: true });

// Listen for the /start command
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id; // Get the chat ID
    const userId = msg.from.id; // Get the user ID

    // Log the /start command message
    console.log(`Message '/start' received from user with ID: ${userId}`);

    // Send a response message containing the user ID
    bot.sendMessage(chatId, `Hello! Your User ID is: ${userId}`);
});

// Display status messages when the bot is ready
bot.on('polling_error', (error) => {
    console.error('Error: Polling error occurred:', error);
});

bot.on('webhook_error', (error) => {
    console.error('Error: Webhook error occurred:', error);
});

bot.on('message', (msg) => {
    console.log('Info: New message received:', msg);
});
