const boardModel = require("../../model/boardModel");
const { parseToken } = require("../../util/token/token");

const postBoard = {
  writeBoard: async (req, res) => {
    console.log("writeBoard!");

    let token = parseToken(req.headers.authorization);

    const { title, description } = req.body;
    const { CompanyID, UserID } = token;

    let result = await boardModel.writeBoard(
      title,
      description,
      CompanyID,
      UserID
    );

    res.send({ message: "ok" });
  },
};

module.exports = postBoard;
