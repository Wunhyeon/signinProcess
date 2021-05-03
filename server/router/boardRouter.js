const express = require("express");
const boardRouter = express.Router();
const controller = require("../controller/board");

boardRouter.post("/startup/writeBoard", controller.postBoard.writeBoard);

boardRouter.get("/startup/getBoard", controller.getBoard.getBoard);
boardRouter.get("/admin/getAllPaper", controller.getBoard.getAllBoard);

module.exports = boardRouter;
