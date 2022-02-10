const { MongoClient } = require('mongodb');

require('dotenv').config('/config/.development.env');

const uri = process.env.mongo_uri;

const mongoClient = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

export default mongoClient;
