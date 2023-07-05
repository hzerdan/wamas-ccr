const db = require("../db");

db.connect();

const create = (data) => {
  let query = "insert into lane_route set ?";
  return db.query(query, [data]);
};

const deleteL = (data) => {

  let query= "update lane_route set lane_route_deleted = 0 where  ?";
  return db.query(query,[data])
};
module.exports = {
  create,
  deleteL
};
