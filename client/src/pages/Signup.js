import React, { useState } from "react";
import "./signup.css";

const Signup = () => {
  const [labelingStatus, setLabelingStatus] = useState("judge");

  const handleLabeling = (e) => {
    setLabelingStatus(e.target.value);
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
              <input type="text" name="email" id="email" />
            </label>
            <label>
              <span>이름</span>
              <input type="text" name="name" id="name" />
            </label>
            <label>
              <span>비밀번호</span>
              <input type="password" name="password" id="password" />
            </label>
            <label>
              <span>핸드폰 번호</span>
              <input type="phone" name="phone" id="phone" />
            </label>
          </div>
        </div>
        <div className="signup__labeling">
          <input
            type="radio"
            name="labeling"
            value="judge"
            checked={labelingStatus === "judge"}
            onChange={handleLabeling}
          />
          심사역
          <input
            type="radio"
            name="labeling"
            value="startup"
            checked={labelingStatus === "startup"}
            onChange={handleLabeling}
          />
          회사 담당자
        </div>
        {labelingStatus === "startup" && (
          <div className="signup__contents--companyInfo">
            <h2>회사정보</h2>
            <label>
              <span>회사명</span>
              <input type="text" name="companyName" id="companyName" />
            </label>
            <label>
              <span>전화번호</span>
              <input type="phone" name="compnayPhone" id="companyPhone" />
            </label>
            <label>
              <span>대표성명</span>
              <input type="text" name="ceoName" id="ceoName" />
            </label>
            <label>
              <span>사업자 번호</span>
              <input type="text" name="corporateNumber" id="corporateNumber" />
            </label>
            <label>
              <span>담당자 이름</span>
              <input type="text" name="chargerName" id="chargerName" />
            </label>
            <label>
              <span>담당자 이메일</span>
              <input type="text" name="chargerEmail" id="chargerEmail" />
            </label>
          </div>
        )}
        <div className="signup__button">
          <button>회원가입</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
