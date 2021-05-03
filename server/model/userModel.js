const connection = require("../db");

module.exports = {
  getAllUser: async () => {
    let result = await (await connection).execute("SELECT * FROM Users");
    return result[0];
  },

  checkEmail: async (email) => {
    let result = await (await connection).execute(
      `SELECT * FROM Users WHERE Email = '${email}'`
    );
    // console.log(result);
    return result[0];
  },

  insertCompany: async (companyInfo) => {
    const {
      companyName,
      companyPhone,
      corporateNumber,
      ceoName,
      chargerName,
      chargerEmail,
    } = companyInfo;
    console.log("companyInfo : ", companyInfo);
    console.log(companyPhone);
    let result = await (await connection).execute(
      `INSERT INTO Companies (companyName, CompanyPhone, corporateNumber, ceoname, chargername, chargeremail)
      VALUES ('${companyName}', '${companyPhone}', ${corporateNumber}, '${ceoName}', '${chargerName}', '${chargerEmail}')`
    );
    return result;
  },

  // getCompanyIDbyCompanyName: async (companyName) => {
  //   let result = await (await connection).execute(
  //     `SELECT companyID FROM Companies WHERE CompanyName = '${companyName}'`
  //   );
  //   console.log("id : ", result);
  //   return result;
  // },

  insertUser: async (userInfo) => {
    const { email, name, password, phone, companyID, laveling } = userInfo;

    let result = await (await connection)
      .execute(`INSERT INTO Users (Email, Name, Password, Phone, Laveling, CompanyID) 
                VALUES('${email}', '${name}','${password}', '${phone}', '${laveling}', '${companyID}')`);
    return result;
  },

  signinCheck: async (email, password) => {
    let result = await (await connection).execute(
      `SELECT * FROM Users WHERE email = '${email}' AND password = '${password}' LIMIT 1`
    );
    return result[0];
  },
};
