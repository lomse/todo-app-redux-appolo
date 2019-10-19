import * as winston from "winston";

const logger = (): winston.Logger => {
    return winston.createLogger({
        exitOnError: true,
        format: winston.format.json(),
        transports: [
            new winston.transports.Console()
        ]
    });
};

export default logger;