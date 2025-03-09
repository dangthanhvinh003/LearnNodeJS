const connection = require("../config/database");

const getAllUserByID = async (id) => {
  console.log("User id query : " + id);
  let [results, fields] = await connection.query(
    "Select * from Users where id = (?)",
    [id]
  );
  let user = results && results.length > 0 ? results : {};
  return user;
};
module.exports = {
  getAllUserByID,
};
