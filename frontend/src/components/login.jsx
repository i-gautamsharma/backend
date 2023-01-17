import React from "react";
import axios from "axios";
const Login = () => {
  const [Login, setLogin] = React.useState({
    username: "",
    password: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setLogin((preFormData) => {
      return {
        ...preFormData,
        [name]: value,
      };
    });
  }
  function formSubmitHandler(event) {
    event.preventDefault();
    callServer();
  }
  function callServer() {
    axios
      .post("http://localhost:3300/register", {
        "username":Login.username,
        "password":Login.password,
      })
      .then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  }
  return (
    <div>
      <div className="main-body1" id="main-body1">
        <div className="formContainer">
          <h1 id="action-text">Login</h1>
          <form className="inputform" onSubmit={formSubmitHandler}>
            <input
              type="text"
              placeholder="User Name"
              name="username"
              onChange={handleChange}
              value={Login.username}
            />
            <input
              type="password"
              placeholder="Password "
              name="password"
              onChange={handleChange}
              value={Login.password}
            />
            <button className="formbutton" type="Submit">
              Login
            </button>
            <a href="#main-body2">
              <button className="formbutton" type="button">
                Not Registered? Signup
              </button>
            </a>
          </form>
        </div>
      </div>
      <div className="main-footer">Site Under Development</div>
    </div>
  );
};

export default Login;
