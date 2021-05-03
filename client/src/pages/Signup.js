import React, { useState } from "react";
import axios from "axios";
import "./signup.css";
import { withRouter } from "react-router-dom";

const Signup = (props) => {
  const [lavelingStatus, setlavelingStatus] = useState("judge");
  const [userInfo, setUserInfo] = useState("");
  const [companyInfo, setCompanyInfo] = useState("");
  const [emailCheckMessage, setEmailCheckMessage] = useState();

  const handlelaveling = (e) => {
    setlavelingStatus(e.target.value);
  };

  const handleUserInfoChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUserInfo({ ...userInfo, [name]: value });
    // console.log(userInfo);
  };

  const handleCompanyInfoChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setCompanyInfo({ ...companyInfo, [name]: value });
    // console.log(userInfo);
  };

  const checkEmail = () => {
    if (userInfo.email === undefined) {
      alert("이메일을 입력해주세요");
    } else {
      const { email } = userInfo;
      axios
        .post("http://localhost:5000/users/signup/checkemail", {
          email,
        })
        .then((result) => {
          console.log(result);
          setEmailCheckMessage("사용할 수 있는 이메일입니다.");
        })
        .catch((err) => {
          console.log(err);
          setEmailCheckMessage("중복된 이메일 입니다.");
        });
    }
  };

  // const checkCompanyName = () => {
  //   if(companyInfo.companyName === undefined){
  //     alert('회사명을 입력해주세요');
  //   }else{
  //     const {companyName} = companyInfo;
  //     axios.post("http://localhost:5000/users/signup/checkCompany",{
  //       companyName
  //     })
  //   }
  // }

  const categorizeSignupForm = () => {
    if (lavelingStatus === "judge") {
      submitJudgeSignupForm();
    } else if (lavelingStatus === "startup") {
      submitStartupSignupForm();
    }
  };

  const submitJudgeSignupForm = () => {
    alert("Judge");
    axios
      .post("http://localhost:5000/users/signup", {
        userInfo,
        laveling: lavelingStatus,
      })
      .then((result) => {
        console.log("Success Signup");
        alert("관리자의 승인을 기다려주세요");
        props.history.push("/signin");
      })
      .catch((err) => {
        alert("에러가 발생하였습니다.");
      });
  };

  const submitStartupSignupForm = () => {
    alert("startUp");
    axios
      .post("http://localhost:5000/users/signup", {
        userInfo,
        companyInfo,
        laveling: lavelingStatus,
      })
      .then((result) => {
        console.log("Success Signup");
        alert("성공적으로 가입되었습니다");
        props.history.push("/signin");
      })
      .catch((err) => {
        alert("에러가 발생하였습니다.");
      });
  };

  return (
    <div className="signupConatiner">
      <h1>회원가입 페이지</h1>
      <div className="signup__contents">
        <div className="signup__contents--userInfo">
          <h2>계정정보</h2>
          <div className="signupForm__indi">
            <label>
              <span>이메일</span>
              <input
                type="text"
                name="email"
                id="email"
                onChange={handleUserInfoChange}
              />
              <button onClick={checkEmail}>중복확인</button>
              {emailCheckMessage}
            </label>
            <label>
              <span>이름</span>
              <input
                type="text"
                name="name"
                id="name"
                onChange={handleUserInfoChange}
              />
            </label>
            <label>
              <span>비밀번호</span>
              <input
                type="password"
                name="password"
                id="password"
                onChange={handleUserInfoChange}
              />
            </label>
            <label>
              <span>핸드폰 번호</span>
              <input
                type="phone"
                name="phone"
                id="phone"
                onChange={handleUserInfoChange}
              />
            </label>
          </div>
        </div>
        <div className="signup__laveling">
          <input
            type="radio"
            name="laveling"
            value="judge"
            checked={lavelingStatus === "judge"}
            onChange={handlelaveling}
          />
          심사역
          <input
            type="radio"
            name="laveling"
            value="startup"
            checked={lavelingStatus === "startup"}
            onChange={handlelaveling}
          />
          회사 담당자
        </div>
        {lavelingStatus === "startup" && (
          <div className="signup__contents--companyInfo">
            <h2>회사정보</h2>
            <label>
              <span>회사명</span>
              <input
                type="text"
                name="companyName"
                id="companyName"
                onChange={handleCompanyInfoChange}
                value={companyInfo.companyName || ""}
              />
              {/* <button>회사명 검색</button> */}
            </label>
            <label>
              <span>전화번호</span>
              <input
                type="tel"
                name="companyPhone"
                id="companyPhone"
                onChange={handleCompanyInfoChange}
                value={companyInfo.companyPhone || ""}
              />
            </label>
            <label>
              <span>대표성명</span>
              <input
                type="text"
                name="ceoName"
                id="ceoName"
                onChange={handleCompanyInfoChange}
                value={companyInfo.ceoName || ""}
              />
            </label>
            <label>
              <span>사업자 번호</span>
              <input
                type="text"
                name="corporateNumber"
                id="corporateNumber"
                onChange={handleCompanyInfoChange}
                value={companyInfo.corporateNumber || ""}
              />
            </label>
            <label>
              <span>담당자 이름</span>
              <input
                type="text"
                name="chargerName"
                id="chargerName"
                onChange={handleCompanyInfoChange}
                value={companyInfo.chargerName || ""}
              />
            </label>
            <label>
              <span>담당자 이메일</span>
              <input
                type="text"
                name="chargerEmail"
                id="chargerEmail"
                onChange={handleCompanyInfoChange}
                value={companyInfo.chargerEmail || ""}
              />
            </label>
          </div>
        )}
        <div className="signup__button">
          <button onClick={categorizeSignupForm}>회원가입</button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Signup);
