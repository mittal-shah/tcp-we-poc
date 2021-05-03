export enum LogLevel {
  Debug = 'DEBUG',
  Error = 'ERROR',
  Info = 'INFO',
  Warn = 'WARN',
  Trace = 'TRACE',
}

export default class LogImpl {
  public level: LogLevel | LogLevel.Error = LogLevel.Info;

  public time: Date | undefined;

  public prefix: string | undefined;

  public message: string | undefined;

  constructor(level: LogLevel, time: Date | undefined, prefix: string | undefined, message: string | undefined) {
    this.level = level;
    this.time = time;
    this.prefix = prefix;
    this.message = message;
  }
}
