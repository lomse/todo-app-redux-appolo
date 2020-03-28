import mongoose from "mongoose";
import logger from "../utils/logger";
import { Application } from "express";
import config from "../config";

const dbConnection = (app: Application) => {
    const connectionString = config("DB_CONNECTION_URL");

    mongoose.connect(connectionString, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false });

    mongoose.connection.once("open", () => {
        logger().info(`\u{1F49A} Successfully connected to the database`);
        app.emit("db-connected");
    });

    return mongoose;
};

export default dbConnection;