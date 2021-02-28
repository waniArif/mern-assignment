import React, { useState, useEffect } from "react";
import axios from "axios";

const Friends = () => {
  const [friends, setFriends] = useState("");
  const [decription, setDescription] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:5000/friend/")
      .then(response => {
        if (response.data.length > 0) {
          setFriends(response.data[0].username);
          setDescription(response.data[0].decription);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <h5>{username}</h5>
    </div>
  );
};

export default Friends;
