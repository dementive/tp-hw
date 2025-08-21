import { readFileSync } from 'fs';

interface NotificationConfig {
  enabledNotifications: string[];
}

// App configuration
export class Config {
  private static enabledNotifications: string[];
  private constructor() {}

  static notificationIsEnabled(notification: string): boolean {
    return this.enabledNotifications.includes(notification);
  }

  // Load enabled notifications json configuration
  static load(config_file: string='./config.json'): void {
    const configFilePath: string = config_file; 

    try {
      const configFileContent = readFileSync(configFilePath, 'utf8');
      let config: NotificationConfig = JSON.parse(configFileContent);
      Config.enabledNotifications = config.enabledNotifications;
    } catch (error) {
      console.error(`Error loading configuration file: ${error}`);
      Config.enabledNotifications = [];
    }
  }
}
