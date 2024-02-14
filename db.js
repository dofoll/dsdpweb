const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'test';

async function main() {
  const client = new MongoClient(url);

  try {
    await client.connect();

    const db = client.db(dbName);

    // Perform database operations here using the `db` object

    console.log(`Connected to ${dbName} database`);
  } catch (error) {
    console.error('Error connecting to database:', error);
  } finally {
    await client.close();
  }
}

main().catch(console.error);