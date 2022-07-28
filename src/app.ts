import Express from "express";
import { envApp } from "config/env";

const app = Express();

app.use(Express.json());
app.use(Express.urlencoded({ extended: false }));

const startServer = async () =>
  new Promise((resolve, reject) => {
    const httpServer = app.listen(+envApp.PORT, () => {
      console.log("server started");
      resolve(httpServer);
    });
  });

export default startServer;
