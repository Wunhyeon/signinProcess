const connection = require("../db");

module.exports = {
  writeBoard: async (title, description, companyID, userID) => {
    console.log(title, description, companyID, userID);

    let result = await (await connection)
      .execute(`INSERT INTO companyboards(title,description,companyID,userID)
        VALUES ('${title}', '${description}', ${companyID}, ${userID})`);
    return result;
  },
};
