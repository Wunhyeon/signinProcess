import axios from "axios";
import React, { useEffect, useState } from "react";

const GetAllPaper = (props) => {
  const [paperList, setPaperList] = useState("");

  const getAllPaper = () => {
    axios
      .get("http://localhost:5000/boards/admin/getAllPaper", {
        headers: {
          Authorization: `Bearer ${props.accessToken}`,
        },
      })
      .then((result) => {
        console.log("getAllPaper : ", result);
        setPaperList(result.data.result);
      });
  };

  useEffect(() => {
    getAllPaper();
  }, []);
  return (
    <div className="getAllPaperContainer">
      <h1>모든 게시물 관리</h1>
      <br />
      <br />
      {paperList &&
        paperList.map((el, i) => (
          <div key={i}>
            제목 : {el.title} 설명 : {el.description} 회사 : {el.companyName}{" "}
            글쓴이 : {el.UserName} 글쓴이 이메일 : {el.UserEmail}
            <hr />
          </div>
        ))}
    </div>
  );
};

export default GetAllPaper;
