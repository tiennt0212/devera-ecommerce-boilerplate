const { MongoClient } = require('mongodb');

// Replace the uri string with your MongoDB deployment's connection string.
const uri = 'mongodb://root:test123@localhost:27017';

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function run() {
  try {
    await client.connect();

    const db = client.db('ec-web');
    const product = db.collection('product');

    // insert document
    await product.insertMany([{ name: 'p1', price: 1, locaction: undefined }]);

    // query document
    const queryProduct = await product.findOne({
      name: 'p1'
    });

    console.log('-- my document:', queryProduct);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run().catch(console.dir);
