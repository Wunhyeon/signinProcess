const express = require("express");
const app = express();
const dotenv = require("dotenv");
const userRouter = require("./router/userRouter");
const morgan = require("morgan");

dotenv.config();

const PORT = process.env.PORT;

app.use(express.json());
app.use(morgan("dev"));

app.use("/users", userRouter);

app.listen(PORT, () => {
  console.log(`Server Listening on ${PORT}`);
});
