const connection = require("../db");

module.exports = {
  writeBoard: async (title, description, companyID, userID) => {
    console.log(title, description, companyID, userID);

    let result = await (await connection)
      .execute(`INSERT INTO companyboards(title,description,companyID,userID)
        VALUES ('${title}', '${description}', ${companyID}, ${userID})`);
    return result;
  },
  getBoard: async (companyID) => {
    let result = await (await connection).execute(
      `SELECT * FROM companyboards WHERE companyID = ${companyID}`
    );
    // console.log(result);
    return result[0];
  },
  getAllBoard: async () => {
    let result = await (await connection).execute(
      `SELECT boardId, cb.title, cb.description, cp.companyName, Users.Name AS UserName, Users.Email AS UserEmail
      FROM companyboards AS cb 
      LEFT OUTER JOIN companies AS cp ON (cb.companyID = cp.companyID)
      LEFT OUTER JOIN Users ON (cb.userID = Users.UserID)`
    );

    return result[0];
  },
};
