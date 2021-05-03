import axios from "axios";
import React, { useState } from "react";
import { withRouter } from "react-router-dom";

const WriteBoard = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const submitPaper = () => {
    // alert(title);
    // alert(description);
    axios
      .post(
        "http://localhost:5000/boards/startup/writeBoard",
        {
          title,
          description,
        },
        {
          headers: {
            Authorization: `Bearer ${props.accessToken}`,
          },
        }
      )
      .then((result) => {
        props.history.push("/company/getMyPaper");
      });
  };
  return (
    <div className="writeBoardContainer">
      <h1>Write Board</h1>
      <br />
      제목{" "}
      <input type="text" name="title" value={title} onChange={handleTitle} />
      <br />
      내용{" "}
      <textarea
        name="description"
        value={description}
        onChange={handleDescription}
      ></textarea>
      <br />
      <button onClick={submitPaper}>제출</button>
    </div>
  );
};

export default withRouter(WriteBoard);
