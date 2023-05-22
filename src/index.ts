// ------------------------------
// Import Modules
// ------------------------------
import express from "express";
import mongoose from "mongoose";
import {config} from "./config/config";
import Logging from "./library/logging";
import ticketRoutes from "./routes/tickets.routes"
import noteRoutes from "./routes/notes.routes"
import authenticationRoutes from "./routes/authentication.routes"

// ------------------------------
// Create Express Instance
// ------------------------------
const app = express();

// ------------------------------
// Connect to MongoDB
// ------------------------------
mongoose.connect(config.mongo.url, {retryWrites: true, w: 'majority'})
    .then(() => {
        Logging.info("Connected to MongoDB");
        StartServer();
    })
    .catch((error) => {
        Logging.error('Unable to connect: ');
        Logging.error(error);
    });

// ------------------------------
// Server Logic
// ------------------------------
const StartServer = () => {

    /* Logging for requests */
    app.use((req, res, next) => {
        Logging.info(`Incomming -> Method: [${req.method}] - Url [${req.url}] - IP: [${req.socket.remoteAddress}]`);

        res.on("finish", () => {
            Logging.info(`Incomming -> Method: [${req.method}] - Url [${req.url}] - IP: [${req.socket.remoteAddress}] - Status [${res.statusCode}]`);
        });

        next();
    })

    /* Use standard middleware */
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    /* Rules of our API */
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

        if (req.method == 'OPTIONS') {
            res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
            return res.status(200).json({});
        }

        next();
    });

    /* Routes */
    app.use("/tickets", ticketRoutes);
    app.use("/notes", noteRoutes);
    app.use("/auth/", authenticationRoutes);

    /* Health Check */
    app.get('/ping', (req, res, next) => res.status(200).json({ hello: 'world' }));

    /* Error handling */
    app.use((req, res, next) => {
        const error = new Error('Not found');

        Logging.error(error);

        res.status(404).json({
            message: error.message
        });
    });

    app.listen(config.server.port, () => {
        Logging.info(`Server is running on port ${config.server.port}.`);
    })
}