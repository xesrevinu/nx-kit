export interface Logger {
  readonly info: (_: string) => void;
}

export const Logger = Service.Tag<Logger>();

export const LiveLoggerLayer = Layer.fromValue(Logger, {
  info: (_: string) => console.log(Date.now() + '-prefix-3', _),
});
