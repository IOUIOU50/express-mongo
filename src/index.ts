import startServer from "app";
import { connectMongoose } from "loader/mongoose";

(async () => {
  await connectMongoose();
  await startServer();
})();
