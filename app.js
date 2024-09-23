import { typeDefs } from "./typeDef.js";
import { resolvers } from "./resolvers.js";
import express from 'express'
import students from './rounter/student.js'
import { ApolloServer } from "apollo-server-express";
const app=express()
app.use('/std',students)
const server =new ApolloServer({typeDefs,resolvers})
 await server.start()
 server.applyMiddleware({app})
 app.listen(4000)
 console.log("server started")