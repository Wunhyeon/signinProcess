const connection = require("../../db");
const userModel = require("../../model/userModel");
const { createToken } = require("../../util/token/token");

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

      if (laveling === 3) {
        // 심사역으로 가입했을 때 tmp테이블의 content칼럼에 유저의 아이디(프라이머리 키)를 넣어준다.
        // 그리고 관리자계정(laveling = 0)이 로그인 할 때 SELECT content FROM tmp where checked = false 로 심사를 기다리고 있는 데이터들을 뿌려주고,
        // 관리자가 승인을 하면  UPDATE Users SET laveling = 1 where UserId = ? sql문을 통해 업데이트 해준다.
      }

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
  signIn: async (req, res) => {
    console.log("sign In!");
    const { email, password } = req.body;

    let result = await userModel.signinCheck(email, password);
    console.log("result : ", result);
    if (result.length === 0) {
      res.status(404).send({ message: "Invalid User" });
    } else {
      // res.status(200).send({message : 'ok', lavel : });
      const { UserID, Email, Name, CompanyID, Laveling } = result[0];

      const token = createToken({ UserID, Email, Name, CompanyID, Laveling });
      res.status(200).send({ message: "ok", token, Laveling });
    }
  },
};

module.exports = postUser;
