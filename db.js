const mysql = require("mysql");
require("dotenv").config();

let pool = null;

exports.connect = function () {
  pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  });

  if (!pool) {
    console.error("Unable to create the connection pool.");
  }

  setInterval(function () {
    pool.query("SELECT 1;");
  }, 900000);
};

exports.query = function (q, params) {
  return new Promise((resolve, reject) => {
    pool.query(q, params, (err, rows) => {
      console.log(mysql.format(q, params));
      if (err) {
        console.log(mysql.format(q, params));
        console.error(err);
        reject(err);
      } else resolve(rows);
    });
  });
};
