import axios from "axios";
import React from "react";

const User = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const getData = async () => {
      await axios
        .get("http://localhost:5000")
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    };
    getData();
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
