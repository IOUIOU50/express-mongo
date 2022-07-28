import { config } from "dotenv";

config({ path: `.env.${process.env["NODE_ENV"]}` });

const envApp = {
  HOST: process.env.APP_HOST || "localhost",
  PORT: process.env.APP_PORT || "3000",
};

const envMongo = {
  HOST: process.env.MONGO_HOST || "localhost",
  PORT: process.env.MONGO_PORT || "27017",
  DATABASE: process.env.MONGO_DATABASE || "mongo",
};

export { envApp, envMongo };
