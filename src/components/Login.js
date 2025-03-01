import React, { useState } from "react";

const Login = () => {
  const [loginFormData,setLoginFormData] = useState({
    email: "",
    password: "",
  });
  
  const handleChange = (e) =>{
    setLoginFormData({
      // ...loginFormData,
      [e.target.name] : e.target.value,
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login Successfully");

    setLoginFormData({
      email: "",
      password: "",
    })
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Enter Email"
          value={loginFormData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={loginFormData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
