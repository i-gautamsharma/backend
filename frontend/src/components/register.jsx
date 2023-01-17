import React from "react";

const Register = () => {
  const [user, setuser] = React.useState({
    username: "",
    email: "",
    password: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setuser((prevdata) => {
      return {
        ...prevdata,
        [name]: value,
      };
    });
  }
  return (
    <div className="main-body2" id="main-body2">
      <div className="formContainer">
        <h1 id="action-text">Sign Up</h1>
        <form className="inputform" onSubmit="">
          <input
            type="text"
            placeholder="User Name"
            name="username"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Email "
            name="email"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password "
            name="password"
            onChange={handleChange}
          />
          <button className="formbutton">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
