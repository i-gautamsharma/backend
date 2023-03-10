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
      .post("http://localhost:3300/login", {
        username: Login.username,
        password: Login.password,
      })
      .then(
        (response) => {
          alert(response.data);
        },
        (error) => {
          alert(error.response.data);
        }
      );
  }
  let imgpath="./show.png"
  const [hidden, sethidden] = React.useState(true)
  function show() {
    sethidden(!hidden)
  }
  if (hidden) {
    imgpath = "../show.png"
    if (document.getElementById('user-password')) {
      document.getElementById('user-password').type='password'
    }
  } else if (!hidden) {
    imgpath = "../hide.png"
    document.getElementById('user-password').type='text'
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
            <div className="password-container">
              <input
                id="user-password"
                type="password"
                placeholder="Password "
                name="password"
                onChange={handleChange}
                value={Login.password}
              />
              <img src={imgpath} className="password-icon" onClick={show}/>
            </div>
            <button className="formbutton" type="Submit">
              Login
            </button>
            <a href="#main-body2">
              <button className="formbutton" type="button">
                Not Registered? Signup Here
              </button>
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
