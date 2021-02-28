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
      <h1>i am a user component</h1>
    </div>
  );
};

export default User;
