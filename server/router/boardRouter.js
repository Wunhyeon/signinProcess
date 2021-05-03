const express = require("express");
const boardRouter = express.Router();
const controller = require("../controller/board");

boardRouter.post("/startup/writeBoard", controller.postBoard.writeBoard);

module.exports = boardRouter;
