import React, { useState } from "react";

const SignUpPage = () => {
  const [signFormData,setSignFormData] = useState({
    name: "",
    email: "",
    password: "",
    mobileNumber: "",
    address: "",
    pinCode: "",
  });

  const handleChange = (e) =>{
    setSignFormData({
      // ...signFormData,
      [e.target.name] : e.target.value,
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registered Successfully");

    setSignFormData({
      name: "",
      email: "",
      password: "",
      mobileNumber: "",
      address: "",
      pinCode: "",
    })
  };

  return (
    <div className="signUp-container">
      <form className="signUp-form" onSubmit={handleSubmit}>
        <h2>SignUp</h2>
        <input
          type="text"
          placeholder="Name"
          value={signFormData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={signFormData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={signFormData.password}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          placeholder="Mobile Number"
          value={signFormData.mobileNumber}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Address"
          value={signFormData.address}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          placeholder="Postal Code"
          value={signFormData.pinCode}
          onChange={handleChange}
          required
        />
        <button type="submit">SignUp</button>
      </form>
    </div>
  );
};

export default SignUpPage;
