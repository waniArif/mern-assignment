import React, { useState, useEffect } from "react";

import axios from "axios";

const User = () => {
  const [users, setUser] = useState([]);

  useEffect(async () => {
    const response = await axios.get("http://localhost:5000/");
    const users = response.data;
    if (users.length === 0) {
      return (users = "no user found");
    }
  }, [users]);
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
