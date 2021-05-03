const userModel = require("../../model/userModel");
const { parseToken } = require("../../util/token/token");

const getUser = {
  getAllUser: async (req, res) => {
    console.log("getAllUser!");
    // console.log(req.headers.authorization);
    let token = parseToken(req.headers.authorization);
    console.log(token);
    if (token && token.Laveling === 0) {
      let result = await userModel.getAllUser();
      res.send({ message: "ok", result });
    } else {
      res.status(403).send({ message: "Invalid User" });
    }
  },
};

module.exports = getUser;
