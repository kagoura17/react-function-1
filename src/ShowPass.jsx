import React, { useState } from 'react';
const ShowPass = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div>
      <input
        type={showPassword ? "text" : "password" }
        id="password"  />
       <button onClick={togglePassword}>
        {showPassword ? "Hide" : "Show"} 
      </button>
    </div>
  );
};
export default ShowPass;
