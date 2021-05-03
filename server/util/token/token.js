const jwt = require("jsonwebtoken");

const createToken = (obj) => {
  let token = jwt.sign(obj, process.env.WEBTOKEN_SALTKEY, { expiresIn: "1h" });
  return token;
};

const parseToken = (token) => {
  try {
    let parsed = jwt.verify(token.split(" ")[1], process.env.WEBTOKEN_SALTKEY);
    return parsed;
  } catch (e) {
    console.log("Invalid Token");
    return null;
  }
};

module.exports.createToken = createToken;
module.exports.parseToken = parseToken;
