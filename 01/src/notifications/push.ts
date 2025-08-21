import { Notification } from '../interfaces/notification';

export class PushNotification implements Notification {
  async send(message: string, recipient: string): Promise<void> {
    console.log(`PUSH to ${recipient}: ${message}`);
  }
}