import axios from "axios";
import React, { useEffect } from "react";

const AdminAllUser = (props) => {
  const getAllUser = () => {
    axios.get("http://localhost:5000/users/getAllUser", {
      headers: {
        Authorization: `Bearer ${props.accessToken}`,
      },
    });
  };

  useEffect(() => {
    getAllUser();
  }, []);
  return (
    <div className="adminAllUserContainer">
      <h1>모든 회원 관리</h1>
    </div>
  );
};

export default AdminAllUser;
