const connection = require("../../db");
const userModel = require("../../model/userModel");

const postUser = {
  signUp: async (req, res) => {
    console.log("user Signup!");
    console.log(req.body);
    try {
      const { userInfo, companyInfo } = req.body;
      let { laveling } = req.body;
      if (laveling === "judge") {
        console.log("@@@@@@@@@");
        // laveling = 1;  //원래 심사역의 laveling은 1이지만 관리자가 승인을 해줘야 1이되고 그 전까지는 3
        laveling = 3;
      } else if (laveling === "startup") {
        laveling = 2;
      }

      userInfo.laveling = laveling;
      if (laveling === 2) {
        // 스타트업 일 때
        let companyInsertResult = await userModel.insertCompany(companyInfo);
        console.log("@@@companyInsertResult : ", companyInsertResult);

        let companyID = companyInsertResult[0].insertId;
        userInfo.companyID = companyID;
        // userInfo.laveling = laveling;
        // let userInsertResult = await userModel.insertUser(userInfo);
      } else if (laveling === 3) {
        //심사역일 때
        userInfo.companyID = 1;
        // userInfo.laveling = laveling;
      }

      let userInsertResult = await userModel.insertUser(userInfo);
      res.send({ message: "OK" });
    } catch (e) {
      console.log("Err in Signup : ", e);
      res.status(500).send({ message: "Err in signup" });
    }
  },
  checkEmail: async (req, res) => {
    console.log("check Email!");
    const { email } = req.body;
    let result = await userModel.checkEmail(email);
    console.log(result);
    if (result.length !== 0) {
      res.status(409).send({ message: "Duplicate Email" });
    } else {
      res.send({ message: "OK" });
    }
  },
};

module.exports = postUser;
