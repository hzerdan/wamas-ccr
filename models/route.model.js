const db = require("../db");

db.connect();

const create = (data) => {
  let query = "insert into route set ?";
  return db.query(query, [data]);
};

const find = (data) => {
  let query ="select * from route where ?"
  return db.query(query,[data])
}

module.exports = {
  create,
  find
};
