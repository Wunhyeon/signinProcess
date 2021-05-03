const express = require("express");
const userRouter = express.Router();
const controller = require("../controller/user");

userRouter.post("/signup", controller.postUser.signUp);
userRouter.post("/signup/checkemail", controller.postUser.checkEmail);
userRouter.post("/signin", controller.postUser.signIn);

userRouter.get("/admin/getAllUser", controller.getUser.getAllUser);

module.exports = userRouter;
