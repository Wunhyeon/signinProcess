import axios from "axios";
import React, { useState } from "react";
// import "./signin.css";
import { withRouter } from "react-router-dom";

const Signin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSignin = () => {
    axios
      .post("http://localhost:5000/users/signin", {
        email,
        password,
      })
      .then((result) => {
        console.log("로그인 성공");
        console.log("result : ", result.data);
        props.setIsLogin(true);
        props.setLaveling(result.data.Laveling);
        props.setAccessToken(result.data.token);
        // localStorage.setItem("accessToken", result.data.token);
        // localStorage.setItem("Laveling", result.data.Laveling);
        props.history.push("/");
      })
      .catch((err) => {
        console.log("Err in signin : ", err);
        // setEmail("");
        // setPassword("");
        alert("아이디와 비밀번호를 확인해주세요");
      });
  };

  return (
    <div className="signinContainer">
      <h1>로그인 페이지</h1>
      <div className="signinContents">
        <label>
          Email{" "}
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={handleEmail}
          />
        </label>
        <br />
        <br />
        <label>
          Password
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handlePassword}
          />
        </label>
        <br /> <br />
        <button onClick={handleSignin}>로그인</button>
      </div>
    </div>
  );
};

export default withRouter(Signin);
