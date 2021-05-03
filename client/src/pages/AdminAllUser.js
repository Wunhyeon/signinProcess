import axios from "axios";
import React, { useEffect, useState } from "react";

const AdminAllUser = (props) => {
  const [userList, setUserList] = useState("");

  const getAllUser = () => {
    axios
      .get("http://localhost:5000/users/admin/getAllUser", {
        headers: {
          Authorization: `Bearer ${props.accessToken}`,
        },
      })
      .then((result) => {
        console.log("!@# : ", result.data.result);
        setUserList(result.data.result);
      })
      .catch((err) => {
        console.log("Err in get All user : ", err);
      });
  };

  useEffect(() => {
    getAllUser();
  }, []);
  return (
    <div className="adminAllUserContainer">
      <h1>모든 회원 관리</h1>
      {userList &&
        userList.map((el, i) => (
          <div key={i}>
            Mail : {el.Email}, Name : {el.Name} Phone : {el.Phone}
            <hr />
          </div>
        ))}
    </div>
  );
};

export default AdminAllUser;
