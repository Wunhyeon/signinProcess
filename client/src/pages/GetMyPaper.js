import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const GetMyPaper = (props) => {
  const [paperList, setPaperList] = useState("");
  const getMyPaper = () => {
    axios
      .get("http://localhost:5000/boards/startup/getBoard", {
        headers: {
          Authorization: `Bearer ${props.accessToken}`,
        },
      })
      .then((result) => {
        console.log("result.data : ", result.data);
        setPaperList(result.data.result);
      });
  };

  useEffect(() => {
    getMyPaper();
  }, []);

  return (
    <div className="getMyPaperContainer">
      <h1>우리 회사 자료</h1>
      <br />
      <Link to="/writeBoard">글쓰기</Link>
      {paperList &&
        paperList.map((el, i) => (
          <div key={i}>
            제목 : {el.title} 내용 : {el.description}
          </div>
        ))}
    </div>
  );
};

export default GetMyPaper;
