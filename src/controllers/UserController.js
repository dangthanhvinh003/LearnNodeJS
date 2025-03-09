const connection = require("../config/database");
const User = require("../models/User");

const postAddUser = async (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  let add = req.body.address;

  console.log(name, email, add);
  // connection.query(
  //   `Insert into Users (email,name,city)
  //   Values (?,?,?)
  //   `,
  //   [email, name, add],
  //   function (err, results) {
  //     console.log(results);
  //     res.send("Create Succed");
  //     console.log(err);
  //   }
  // );
  await User.create({ name: name, email: email, city: add });
  res.send("Create Succed");
};

const postEditUser = async (req, res) => {
  let id = req.body.id;
  let name = req.body.name;
  let email = req.body.email;
  let add = req.body.address;

  await connection.query(
    `UPDATE Users
  SET name = ?, email = ?, city = ?
  WHERE id = ?;
    `,
    [name, email, add, id]
  );
  res.redirect("/");
};

const getDeleteUser = async (req, res) => {
  let id = req.param("id");
  await connection.query(
    `DELETE FROM Users WHERE id = ?;
    `,
    [id]
  );
  res.redirect("/");
};

module.exports = {
  postAddUser,
  postEditUser,
  getDeleteUser,
};
