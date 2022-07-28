import mongoose from "mongoose";
import { envMongo } from "config/env";

export const connectMongoose = async () => {
  const mongooseUri = `mongodb://${envMongo.HOST}:${envMongo.PORT}/${envMongo.DATABASE}`;
  console.log(mongooseUri);

  try {
    await mongoose.connect(mongooseUri, {
      serverSelectionTimeoutMS: 300,
    });
    console.log("mongodb connected");
  } catch (err) {
    if (err instanceof mongoose.Error.MongooseServerSelectionError) {
      const error = new Error(
        "mongoose failed to connect mongodb. please recheck mongooseUri or mongodb(docker)"
      );
      throw error;
    }
  }
};

export const disconnectMongoose = async () => {
  await mongoose.disconnect();
};
