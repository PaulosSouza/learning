import { readFileSync } from "fs";
import { resolve } from "path";
import { ApolloServer } from "apollo-server";

import { Resolvers } from "../generated/resolvers-types";
import Category from "../resolvers/Category";
import Mutation from "../resolvers/Mutation";
import Product from "../resolvers/Product";
import Query from "../resolvers/Query";
import db from "./db";

const typeDefs = readFileSync(resolve(__dirname, "./schema.graphql"), "utf8");

const resolvers: Resolvers = {
  Query,
  Product,
  Category,
  Mutation,
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    db,
  },
});

server.listen().then(({ url }) => {
  console.log("Server is running at " + url);
});
