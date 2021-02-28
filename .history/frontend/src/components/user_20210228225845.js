import React, { useState, useEffect } from "react";

import axios from "axios";

const User = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000").then(res => {
      setUser(res);
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
