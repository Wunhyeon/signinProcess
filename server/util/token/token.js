const jwt = require("jsonwebtoken");

const createToken = (obj) => {
  let token = jwt.sign(obj, process.env.WEBTOKEN_SALTKEY, { expiresIn: "1h" });
  return token;
};

module.exports.createToken = createToken;
