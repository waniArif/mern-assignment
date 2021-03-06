import React, { useState, useEffect } from "react";

import axios from "axios";

const User = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/user/users").then(res => {
      console.log("res", res);
      setUser(res?.data);
    });
  }, []);

  return (
    <div>
      {users.map(user => {
        return (
          <ul key={user._id}>
            <li>{user.username}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default User;
