const connection = require("../config/database");

const getAllUser = async () => {
  let [results, fields] = await connection.query("Select * from Users");
  return results;
};
const getAllUserByID = async (id) => {
  console.log("User id query : " + id);
  let [results, fields] = await connection.query(
    "Select * from Users where id = (?)",
    [id]
  );
  return results;
};
module.exports = {
  getAllUser,
  getAllUserByID,
};
