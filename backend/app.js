const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.get("/", (req, res) => {
  res.status(200).send("<h1>Welcome to HomePage...</h1>");
});
const users = [
  {
    username: "Gautam",
    password: "12345",
    email: "email123@outlook.com",
  },
];
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With, content-type"
  );
  next();
});
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const getUser = users.filter((user) => {
    return user.username === username && user.password === password;
  });
  if (getUser.length >0) {
    res
      .status(200)
      .send(`Welcome ${username} Your Credentials are : ${password}`);
  } else {
    res.status(401).send("Please Provide Correct User Name And Credentials");
  }
});
app.post("/register", (req, res) => {
  const { username, password, email } = req.body;
  console.log(req.body);
  const checkUser = users.filter((user) => {
    return user.username===username
  })
  if (checkUser.length >0) {
    res.status(201).send(`${username} Already exists`);
  } else {
    users.push({ "username": username, "password": password, "email": email });
    res.status(200).send("Successfully Signed up ...");
  }
});
app.listen(3300, () => {
  console.log("app is listening on 3300....");
});
