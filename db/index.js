const { Client } = require("pg");

const client = new Client({
  connectionString: "postgresql://localhost/friendsats"
});

client.connect();

module.exports = client;