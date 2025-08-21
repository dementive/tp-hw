# Setup

To setup the project run:

```bash
npm init -y
npm install typescript ts-node nodemailer @types/node @types/nodemailer
npx tsc --init
```

I implemented the real email notifications using [nodemailer](https://nodemailer.com/) but it requires setting up a gmail account to properly test it. See `src/notifications/email.ts` for more details.

# Scenario

You are tasked with building a small notification service in Node.js using TypeScript. The service should be extensible, so new notification types can be added later with minimal changes.

Requirements:

1. Define a base interface Notification with:

a send(message: string, recipient: string): Promise<void> method (async to mimic real-world APIs).

2. Implement at least three notification types:

a. EmailNotification (pretend to send email by logging: "EMAIL to <recipient>: <message>").

b. SMSNotification (log: "SMS to <recipient>: <message>").

c. PushNotification (log: "PUSH to <recipient>: <message>").

3. Create a factory class NotificationFactory that:

Exposes a method create(type: NotificationType): Notification.

Uses a type-safe enum or union type for NotificationType.

Allows new notification types to be registered without rewriting a giant if/else chain.

4. Configuration

Add a JSON config file (e.g., config.json) that configures which notification types are enabled. Example:

{

  "enabledNotifications": ["email", "sms"]

}

The factory should only allow creating notifications listed in the config.

5. Demonstration script (index.ts)

Load the factory.

Attempt to send messages with all three notification types.

If a type is disabled in config, throw a clear error: "Push notifications are not enabled".

6. (Stretch) Choose one of the notification types to implement for real, instead of mocking with logs.



