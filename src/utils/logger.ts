/**
 * Logger utility for standardized logging across the application.
 * Only logs in development environment.
 */

type LogLevel = 'info' | 'warn' | 'error' | 'debug';

class Logger {
  private isDevelopment = process.env.NODE_ENV !== 'production';

  private formatMessage(level: LogLevel, message: string, ...data: any[]) {
    const timestamp = new Date().toISOString();
    return `[${timestamp}] [${level.toUpperCase()}] ${message}`;
  }

  info(message: string, ...data: any[]) {
    if (this.isDevelopment) {
      console.info(this.formatMessage('info', message), ...data);
    }
  }

  warn(message: string, ...data: any[]) {
    if (this.isDevelopment) {
      console.warn(this.formatMessage('warn', message), ...data);
    }
  }

  error(message: string, ...data: any[]) {
    // We might want to log errors even in production, or send them to a tracking service
    console.error(this.formatMessage('error', message), ...data);
  }

  debug(message: string, ...data: any[]) {
    if (this.isDevelopment) {
      console.debug(this.formatMessage('debug', message), ...data);
    }
  }
}

export const logger = new Logger();
