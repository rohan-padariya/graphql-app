const { MongoClient } = require('mongodb');

async function main() {
    const DB_URI = "mongodb+srv://rohan:rohan@cluster0.mi8y3.mongodb.net/project001?retryWrites=true&w=majority";
    const client = new MongoClient(DB_URI);
    try {
        // Connect to the MongoDB cluster
        await client.connect();
        // Make the appropriate DB calls
        await listDatabases(client);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}
// main().catch(console.error);

async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

module.exports = {
    connect: main()
}
