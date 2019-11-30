import './config/env'
import cors from "cors";
import express from "express";
import bodyParser from "body-parser"
import { ApolloServer } from "apollo-server-express";
import dbConnection from "./db/connection";
import typeDefs from "./services/graphql/todo.schema"
import resolvers from "./services/graphql/todo.resolvers";

const server = new ApolloServer({ typeDefs, resolvers: resolvers() });
const app: express.Application = express();

// Perform db connection
dbConnection(app);

// Apply Middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json({ type: 'application/graphql' }));

server.applyMiddleware({ app });

export default app;