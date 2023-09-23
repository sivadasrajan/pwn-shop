import express from "express"
import bodyParser from "body-parser"
import { Request, Response } from "express"
import { AppDataSource } from "./data-source"
import  routes  from "./routes"
import { User } from "./entity/User"
import helmet from "helmet";
import cors from "cors";

const port = process.env.PORT || 8080
AppDataSource.initialize().then(async () => {

  // create express app
  const app = express()

  app.use(cors());
  app.use(helmet());
  app.use(bodyParser.json());
  // register express routes from defined application routes
  app.use("/", routes);

  // setup express app here
  // ...

  // start express server
  app.listen(port)


  console.log("Express server has started on port 8080. Open http://localhost:8080 to see results")

}).catch(error => console.log(error))

