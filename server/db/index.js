require("dotenv").config();
const mysql = require("mysql2/promise");

const host = process.env.DB_HOST;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_DATABASE;

const connection = mysql.createConnection({
  host,
  user,
  password,
  database,
});

// const connPool = mysql.createPool({
//   host,
//   user,
//   password,
//   database,
// });

// module.exports = connPool;
module.exports = connection;
