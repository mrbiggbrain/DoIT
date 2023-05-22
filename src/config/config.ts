import dotenv from 'dotenv';

dotenv.config();

const MONGODB_CONNECTION_STRING = process.env.MONGODB_CONNECTION_STRING || '';
const EXPRESS_HTTP_PORT = process.env.EXPRESS_HTTP_PORT ? Number(process.env.EXPRESS_HTTP_PORT) : 3000;
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET || '';
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET || '';

export const config = {
    mongo: {
        url: MONGODB_CONNECTION_STRING
    },
    server: {
        port: EXPRESS_HTTP_PORT
    },
    JWT: {
        accessTokenSecret: ACCESS_TOKEN_SECRET,
        refreshTokenSecret: REFRESH_TOKEN_SECRET
    }
};

export default config