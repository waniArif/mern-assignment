import React, { useState } from "react";
import axios from "axios";

const Friends = () => {
  const [username, setUsername] = useState("");
  const [decription, setDescription] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:5000/friend")
      .then(response => {
        if (response.data.length > 0) {
          setUsername(response.data[0].username);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }, [input]);
  return (
    <div>
      <h5>{username}</h5>
    </div>
  );
};

export default Friends;
