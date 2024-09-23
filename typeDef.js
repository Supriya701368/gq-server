import { gql } from "apollo-server-express";

export const typeDefs = gql`
scalar JSON
type User{
  name:String
  loc:Int
}
type Student{
  name:String
  rno:String
  loc:String
   _id:String
}
input Player{
    name:String!
    loc:String!
    runs:Int!
   
}
input StudentInput{
 name:String!
 loc:String!
 rno:String!
}
type Query{
 getName:String
 getUsers:[User]
 getStudents:[Student]
}

type Mutation{
 saveUser:Boolean
 savePlayer(data:Player):Int
 saveStudent(data:StudentInput):JSON
}

`