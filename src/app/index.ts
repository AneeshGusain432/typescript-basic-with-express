import express from "express";
import type { Application } from "express";
import todoRouter from './todos/routes.js'

export function createExpressServerApplication(): Application {
  const app = express();

  app.get("/", (req, res) => {
    res.json({ msg: "hello from express server" });
  });

  //#region  //*=========== middleware ===========
  app.use(express.json())

  app.use("/api/todos", todoRouter)
  
  //#endregion  //*======== middleware ===========


  return app;
}
