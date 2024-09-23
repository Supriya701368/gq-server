import getDB from "./common/dbConn.js";
export const resolvers = {
    Query: {
        getName: function () {
            return "Sachin"
        },
        getUsers: function () {
            return [
                {
                    name: "u1",
                    loc: 109
                },
                {
                    name: "u2",
                    loc: 11
                }
            ]
        },
        getStudents: async function () {

            try {
                const db = await getDB();
                const collection = db.collection('students');
                const result = await collection.find().toArray()
                return result

            } catch (ex) {
                console.log("error", ex)
                return ex;
            }
        }
    },
    Mutation: {
        saveUser: function () {
            return true
        },
        savePlayer: function (a, inputData, c, d) {
            console.log('data', inputData)
            return 1;
        },
        saveStudent: async function (a, inputData, c, d) {
            try {
                const data = inputData.data;
                const db = await getDB();
                const collection = db.collection('students')
                const result = await collection.insertOne(data)
                return result;
            } catch (ex) {
                console.log("error", ex)
                return { "exception": ex }
            }
        }
    }
}