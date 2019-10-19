import logger from "./logger";

const handleUncaughtExceptions = () => {
    process
        .on("unhandledRejection", (reason) => {
            logger().error(`\u{1F62D} Unhandled Rejection at: Promise ${reason}`);
            process.exit(1);
        })
        .on("uncaughtException", (err) => {
            logger().info(`Uncaught Exception thrown ${err.message}`);
            process.exit(1);
        });
};

export default handleUncaughtExceptions;    