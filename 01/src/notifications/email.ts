import { Notification } from '../interfaces/notification';
import nodemailer from 'nodemailer';

// Uses NodeMailer to send email notifications: https://nodemailer.com/#example-using-an-ethereal-test-account with gmail.
// See https://dev.to/swapnil-ahmmed-shishir/set-up-gmail-app-password-for-nodemailer-5288 for setting up with gmail.
// Once gmail is setup also have to set the environment variables EMAIL_USER to the sender's gmail address and EMAIL_PASS to the gmail App Password.
export class EmailNotification implements Notification {
  private static transporter: nodemailer.Transporter;

  constructor() {
    EmailNotification.transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  }

  async send(message: string, recipient: string): Promise<void> {
    try {
      const info = await EmailNotification.transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: recipient,
        subject: 'Hello',
        text: message,
        html: `<b>${message}</b>`,
      });
      console.log(`Email sent to ${recipient}: ${message} with Id: ${info.messageID}`);
    } catch (error) {
      console.error(`Error sending email: ${error}`);
    }
  }
}
