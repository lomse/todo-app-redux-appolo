import app from "./app";
import config from "./config";
import logger from "./utils/logger";
import handleUncaughtExceptions from "./utils/handleUncaughtExceptions";

const port = config("PORT");

app.on("db-connected", () => {
    app.listen(port, () => {
        logger().info(`\u{1F1F9}\u{1F1EC} \u{1F680} Server running on port ${port}`);
    });
});

handleUncaughtExceptions();