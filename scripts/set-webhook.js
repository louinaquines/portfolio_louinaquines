/**
 * Telegram Webhook Setup Script
 * 
 * This script sets the Telegram bot webhook to your Vercel deployment URL.
 * Run this after deploying to Vercel to enable the Telegram-to-Web reply functionality.
 * 
 * Usage: node scripts/set-webhook.js
 */

import 'dotenv/config';

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const VERCEL_URL = process.env.VERCEL_URL || process.env.DEPLOYMENT_URL;

if (!BOT_TOKEN) {
  console.error('❌ TELEGRAM_BOT_TOKEN not found in environment variables');
  console.log('Make sure you have TELEGRAM_BOT_TOKEN in your .env file');
  process.exit(1);
}

if (!VERCEL_URL) {
  console.error('❌ VERCEL_URL not found. Please deploy to Vercel first or set it manually.');
  console.log('Example: VERCEL_URL=your-project.vercel.app node scripts/set-webhook.js');
  process.exit(1);
}

const WEBHOOK_URL = `https://${VERCEL_URL}/api/telegram-webhook`;

async function setWebhook() {
  console.log(`\n📡 Setting Telegram webhook...`);
  console.log(`   Bot Token: ${BOT_TOKEN.slice(0, 10)}...`);
  console.log(`   Webhook URL: ${WEBHOOK_URL}\n`);

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/setWebhook`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          url: WEBHOOK_URL,
          allowed_updates: ['message'],
        }),
      }
    );

    const result = await response.json();

    if (result.ok) {
      console.log('✅ Webhook set successfully!');
      console.log(`   Description: ${result.result.description || 'N/A'}`);
      console.log(`   URL: ${result.result.url}`);
      console.log(`   Has custom certificate: ${result.result.has_custom_certificate}`);
      console.log(`   Pending updates: ${result.result.pending_update_count}`);
      
      // Verify webhook
      console.log('\n🔍 Verifying webhook...');
      const verifyResponse = await fetch(
        `https://api.telegram.org/bot${BOT_TOKEN}/getWebhookInfo`
      );
      const verifyResult = await verifyResponse.json();
      
      if (verifyResult.ok) {
        console.log(`   Current URL: ${verifyResult.result.url || 'Not set'}`);
        console.log(`   Pending updates: ${verifyResult.result.pending_update_count}`);
      }
      
      console.log('\n✨ Setup complete! Your Telegram replies should now appear on your website.');
    } else {
      console.error('❌ Failed to set webhook:');
      console.error(`   Error code: ${result.error_code}`);
      console.error(`   Description: ${result.description}`);
      process.exit(1);
    }
  } catch (error) {
    console.error('❌ Error setting webhook:', error.message);
    process.exit(1);
  }
}

setWebhook();