import React from "react";

const MobileLogin = () => {
  return (
    <>
      <div>Welcome Back!</div>
      <h1>please enter your details</h1>

      <label htmlFor="email">Email</label>
      <input type="text" id="email" />
      <label htmlFor="password">password</label>
      <input type="password" id="password" />
    </>
  );
};

export default MobileLogin;
