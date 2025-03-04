const connection = require("../config/database");
const postAddUser = (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  let add = req.body.address;

  console.log(name, email, add);
  connection.query(
    `Insert into Users (email,name,city)
    Values (?,?,?)
    `,
    [email, name, add],
    function (err, results) {
      console.log(results);
      res.send("Create Succed");
      console.log(err);
    }
  );
};

module.exports = {
  postAddUser,
};
