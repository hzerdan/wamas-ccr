const db = require("../db");

db.connect();

const create = (data) => {
  let query = "insert into lane set ?";
  return db.query(query, [data]);
};

const find = (data) => {
  let query ="select * from lane where ?"
  return db.query(query,[data])
}
module.exports = {
  create,
  find
};
