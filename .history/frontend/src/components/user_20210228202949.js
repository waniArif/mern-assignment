import axios from "axios";
import React from "react";

const User = () => {

    const [user, setUser] = useState([]);

    useEffect(() => {
      const users = await axios.get('localhost:5000/users')
      if(users.length === 0) {
          return user = 'no user found'
      }

    }, [input])
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
