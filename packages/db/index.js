const { MongoClient } = require('mongodb');

// Replace the uri string with your MongoDB deployment's connection string.
const uri = 'mongodb://root:test123@localhost:27017/?authSource=admin';

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function run() {
  try {
    await client.connect();

    const db = client.db('ec-web');

    const product = db.collection('product');

    product.insertMany([{ name: 'p1', price: 1 }]);

    const queryProduct = await product.findOne({
      name: 'p1 1'
    });

    console.log(queryProduct);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run().catch(console.dir);
