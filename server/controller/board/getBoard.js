const boardModel = require("../../model/boardModel");
const { parseToken } = require("../../util/token/token");

const getBoard = {
  getBoard: async (req, res) => {
    console.log("getBoard");
    // console.log(req.headers);
    let token = parseToken(req.headers.authorization);
    if (token) {
      let { CompanyID } = token;
      let result = await boardModel.getBoard(CompanyID);
      //   console.log("result : ", result);
      res.send({ message: "ok", result });
    } else {
      res.status(403).send({ message: "Invalid User" });
    }
  },
  getAllBoard: async (req, res) => {
    console.log("getAllBoard");

    let token = parseToken(req.headers.authorization);
    console.log(token);
    if ((token && token.Laveling === 0) || (token && token.Laveling === 1)) {
      let result = await boardModel.getAllBoard();
      console.log(result);
      res.send({ message: "ok", result });
    } else {
      res.status(403).send({ message: "Invalid User" });
    }
  },
};

module.exports = getBoard;
