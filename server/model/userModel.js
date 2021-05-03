const connection = require("../db");

module.exports = {
  getAllUser: async () => {
    let result = await (await connection).execute("SELECT * FROM Users");
    return result[0];
  },
};
