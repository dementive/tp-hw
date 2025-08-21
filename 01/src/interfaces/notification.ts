export interface Notification {
  send(message: string, recipient: string): Promise<void>;
}
