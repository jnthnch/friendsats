const { Client } = require("pg");
// const constants = require('../constants')
const db = process.env.NODE_ENV === "test" ? "friendsats-test" : "friendsats";

const client = new Client({
  connectionString: `postgresql://localhost/${db}`
});
// const database_url = `postgres://dhtkdntprvmhjt:ac2f2e4453496829f1b716025bd645773278987243fb75f189c4893d249ce87f@ec2-34-192-30-15.compute-1.amazonaws.com:5432/dak2j4fn2stc1j?sslmode=require`
// const client = new Client({
//   connectionString: database_url
// });

client.connect();

client.query('SELECT * FROM games', (err, res) => {
  if (err) {
    console.log('HIT ERROR', err)
    throw err
  };
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  // client.end();
});

module.exports = client;