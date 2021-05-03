const express = require("express");
const app = express();
const dotenv = require("dotenv");
const userRouter = require("./router/userRouter");
const morgan = require("morgan");
const cors = require("cors");

dotenv.config();

const PORT = process.env.PORT;
app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);
app.use(express.json());
app.use(morgan("dev"));

app.use("/users", userRouter);

app.listen(PORT, () => {
  console.log(`Server Listening on ${PORT}`);
});
