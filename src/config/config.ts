import dotenv from 'dotenv';

dotenv.config();

const MONGODB_CONNECTION_STRING = process.env.MONGODB_CONNECTION_STRING || '';

const SERVER_PORT = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 3000;

export const config = {
    mongo: {
        url: MONGODB_CONNECTION_STRING
    },
    server: {
        port: SERVER_PORT
    }
};