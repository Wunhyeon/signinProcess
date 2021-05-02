import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div className="headerContainer">
      <h1 className="header__logo">회원가입 프로세스</h1>
      <div className="header__contents">
        <Link to="/signin">로그인</Link>&nbsp;
        <Link to="/signup">회원가입</Link>
      </div>
    </div>
  );
};

export default Header;
