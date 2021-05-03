import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = (props) => {
  return (
    <div className="headerContainer">
      <h1 className="header__logo">회원가입 프로세스</h1>
      <div className="header__contents">
        {!props.isLogin && (
          <>
            <Link to="/signin">로그인</Link>&nbsp;
            <Link to="/signup">회원가입</Link>
          </>
        )}
        {props.isLogin && props.laveling === 0 && (
          <>
            <span>관리자</span>&nbsp;&nbsp;
            <Link to="/admin/allUser">모든회원관리</Link>&nbsp;&nbsp;
            <Link to="/admin/allContent">모든 게시물 관리</Link>
          </>
        )}
        {props.isLogin && props.laveling === 1 && (
          <>
            <div>심사역</div>
          </>
        )}
        {props.isLogin && props.laveling === 2 && (
          <>
            <span>스타트업 관계자</span>&nbsp;&nbsp;
            <Link to="/company/getMyPaper">우리회사자료</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
