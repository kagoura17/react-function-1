import React, { useEffect, useState } from 'react';
import UserData from './UserData';

const UserList = () => {
    const [users, setUser]=useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
          .then((response) => response.json())
          .then((data) => setUser(data))
          .catch((error)=>console.log(error))
      }, []);
    return (
        <div>
            <h2>user liste</h2>
            {users.map((user)=> (
                <UserData key={user.id} user={user}></UserData>
                ))}
            
            </div>
    );
};
export default UserList 
