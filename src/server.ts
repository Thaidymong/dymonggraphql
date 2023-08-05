import express, { Request, Response } from "express";
import * as pgk from "package.json";
import bodyParser from "body-parser";
import { ApolloServer } from "@apollo/server";
import loadMergeSchema from "./libs/loadMergedSchema";
import { Resolvers } from "./resolvers";
import { expressMiddleware } from "@apollo/server/express4";

async function CreateAppolloServer() {
  const app = express();
  
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  const server = new ApolloServer({
    typeDefs:loadMergeSchema,
    resolvers:Resolvers,
  })
  
  await server.start();
  app.use("/dymonggrahpql",express.json(),expressMiddleware(server, {}));

  app.listen({ port: 1010 }, () => {
    console.log("Server run at port 1010");
  });
}

CreateAppolloServer();
