// const Sequelize = require('sequelize');

// const sequelize = new Sequelize('node-complete', 'root', 'nodecomplete', {
//   dialect: 'mysql',
//   host: 'localhost'
// });

// module.exports = sequelize;


const mongodb = require("mongodb")

const mongodbClient = mongodb.MongoClient

const mongoConnect = (callBack) => {
  mongodbClient.connect('mongodb+srv://mahdi-jafaree:node-practice@cluster0.plodo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    .then(result => {
      console.log("Connected")
      callBack(result)
    })
    .catch(err => {
      console.log("Error", err)
    })
}

module.exports = mongoConnect;