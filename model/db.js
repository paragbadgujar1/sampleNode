const mongoose = require('mongoose');
mongoose.Promise = Promise


const url = "mongodb://localhost:27017/books";

mongoose.connection.on('connected', () => {
  console.log('Connection Established')
})

mongoose.connection.on('reconnected', () => {
  console.log('Connection Reestablished')
})

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB Connection Disconnected')
})

mongoose.connection.on('close', () => {
  console.log('Connection Closed')
})

mongoose.connection.on('error', error => {
  console.log('MongoDB ERROR:', error)
  process.exit(1)
})

// MongoClient.connect(url, function(err, db) {
//   if (err) console.log('err : - ', err);
//   console.log("Database connected!");
//   db.close();
// })

const connectMongo = async () => {
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  }
  await mongoose.connect(url,options).catch(error => {
    console.log('ERROR connecting to mongo: ' + error)
    process.exit(1)
  })
}

module.exports=connectMongo;