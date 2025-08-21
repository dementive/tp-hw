// src/index.ts
import { NotificationFactory } from './factory/notification-factory';
import { Config } from './config/config';

async function main() {
  const message = 'Hello There';
  const recipient = 'test@example.com'; 
  const phoneNumber = '+1234567890';
  const userId = 'user123';

  // Load enabled notifications configuration
  Config.load();

  // Register notifictions
  try {
    NotificationFactory.register();
  } catch (error: any) {
    console.error(`Error registering notification type: ${error.message}`);
  }

  // Send email notification
  try {
    const emailNotification = NotificationFactory.create('email');
    await emailNotification.send(message, recipient);
  } catch (error: any) {
    console.error(`Error sending email: ${error.message}`);
  }

  // Send SMS notification
  try {
    const smsNotification = NotificationFactory.create('sms');
    await smsNotification.send(message, phoneNumber);
  } catch (error: any) {
    console.error(`Error sending SMS: ${error.message}`);
  }

  // Send push notification (should be disabled based on config.json)
  try {
    const pushNotification = NotificationFactory.create('push');
    await pushNotification.send(message, userId);
  } catch (error: any) {
    console.error(`Error sending push notification: ${error.message}`);
  }
}

main();
