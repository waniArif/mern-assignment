import React, { useState, useEffect } from "react";
import axios from "axios";

// dummy data to test
// const data = [
//   {
//     username: "username 1",
//     description: "this is user ones first friend",
//   },
//   {
//     username: "username 2",
//     description: "this is user ones second friend",
//   },
//   {
//     username: "username 3",
//     description: "this is user ones third friend",
//   },
// ];
const Friends = () => {
  const [friends, setFriends] = useState(data);
  const [decription, setDescription] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:5000/friend/")
      .then(response => {
        console.log("response", response);
        if (response.data.length > 0) {
          setFriends(response.data);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <ul>
        {friends.map(({ username, description }) => (
          <li>
            {username}:&nbsp;{description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Friends;
