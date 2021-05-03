import React from "react";
import { Link } from "react-router-dom";

const GetMyPaper = (props) => {
  return (
    <div className="getMyPaperContainer">
      <h1>우리 회사 자료</h1>
      <br />
      <Link to="/writeBoard">글쓰기</Link>
    </div>
  );
};

export default GetMyPaper;
