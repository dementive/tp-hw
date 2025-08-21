import { Notification } from '../interfaces/notification';

export class SMSNotification implements Notification {
  async send(message: string, recipient: string): Promise<void> {
    console.log(`SMS to ${recipient}: ${message}`);
  }
}