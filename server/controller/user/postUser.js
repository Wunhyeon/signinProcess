const connection = require("../../db");
const userModel = require("../../model/userModel");

const postUser = {
  signUp: async (req, res) => {
    console.log("user Signup!");

    // let result = await connPool.execute("DESC Users");
    // let result = await connection.execute("SELECT * FROM Users");
    // const [rows, fields] = await connection.execute("SELECT * FROM Users");
    // let result = await (await connection).execute("SELECT * FROM Users");
    // console.log("result : ", result[0]);

    // let result = await (await connection).execute(
    //   'INSERT INTO Users(Email, Name, Password, Phone, Laveling, Company) values("test2@test.com","test2","pass123","123214124",1,"testCor")'
    // );
    // console.log("result : ", result);
    let allUser = await userModel.getAllUser();
    console.log(allUser);
  },
};

module.exports = postUser;
