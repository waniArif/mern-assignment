import axios from "axios";
import React from "react";

const User = () => {

    const [user, setUser] = useState([]);

    useEffect(() => {
      const data = await axios.get('http://localhost:5000/')
      const users = await data.json()
      if(users.length === 0) {
          return user = 'no user found'
      }

    }, [user])
  return (
    <div>
      {
          users.map((user)=>{
              return <ul key={user._id}>
                  <li>{user.username}</li>
              </ul>
          })
      }
    </div>
  );
};

export default User;
