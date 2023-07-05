const lane = require("../models/lane.model");
const route = require("../models/route.model");
const lane_route = require("../models/lane_route.model");

/* const createLane = (data) => {
  let obj = {
    lane_id: data,
  };
  return new Promise((res, rej) => {
    lane.create(obj).then(
      (d) => res(d),
      (err) => rej(err)
    );
  });
}; */

const FindOrCreateRoute = async (data) => {
let flag = await route.find({route_id : data.route_id})
if (flag.length == 0) {
  try {
    console.log("se crea ruta ya que no existe");
  let obj = {
    route_id: data.route_id,
    route_name: data.route_name,
  };
  let flag = await route.create(obj)
  if (flag.length != 0) {
    console.log("si entro");
    return FindOrCreateRoute(data)
  }
  } catch (error) {
    console.log(error);
  }
} else{
  console.log("no se crea la ruta porque ya existe",flag[0].id);
  return flag[0].id
}

};

const createLane_route = async (data) => {
 let findLane = await lane.find({lane_id:data.nested[0].nested[0].parameters.lane_id})
  let lane_id = findLane[0].id
  let route_id = await FindOrCreateRoute(data.nested[1].parameters);
  let newData = {
    lane_id: lane_id,
    route_id: route_id,
  };
  let result = await lane_route.create(newData)
  if (result.result !== 0) {
    return true
  }
};

const deleteLane_route = async (data)=> {
  let obj ={
    route_id : data.nested.parameters.route_id
  }
  let deleteRelation= await lane_route.deleteL(obj);

  return deleteRelation;
}

module.exports = {
  FindOrCreateRoute,
  createLane_route,
  deleteLane_route
};
