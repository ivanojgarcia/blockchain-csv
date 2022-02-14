const { format, loggers, transports } = require("winston");

const timezoned = () => {
  return new Date().toLocaleString("es-CL", {
    timeZone: "America/Santiago",
  });
};

loggers.add("app-logger", {
  format: format.combine(
    format.simple(),
    format.timestamp({ format: timezoned }),
    format.printf((log) => `${log.timestamp} | ${log.level} | ${log.message}`)
  ),
  transports: [
    new transports.Console({
      level: "debug",
    }),
  ],
});

module.exports = loggers;
