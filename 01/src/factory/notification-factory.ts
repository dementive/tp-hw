import { Notification } from '../interfaces/notification';
import { EmailNotification } from '../notifications/email';
import { SMSNotification } from '../notifications/sms';
import { PushNotification } from '../notifications/push';
import { Config } from '../config/config'; 

type NotificationType = 'email' | 'sms' | 'push';

export class NotificationFactory {
  private static registeredNotifications: Map<NotificationType, Notification> = new Map();

  static registerNotification(type: NotificationType, notificationInstance: Notification): void {
    this.registeredNotifications.set(type, notificationInstance);
  }

  static create(type: NotificationType): Notification {
    if (!Config.notificationIsEnabled(type)) {
      throw new Error(`${type} notifications are not enabled`);
    }

    const notification = this.registeredNotifications.get(type);
    if (!notification) {
      throw new Error(`Notification type ${type} is not registered.`);
    }
    return notification;
  }

  static register() {
    // Register default notification types
    NotificationFactory.registerNotification('email', new EmailNotification());
    NotificationFactory.registerNotification('sms', new SMSNotification());
    NotificationFactory.registerNotification('push', new PushNotification());
  }
}
