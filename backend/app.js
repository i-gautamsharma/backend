const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.get("/", (req, res) => {
  res.status(200).send("<h1>Welcome to HomePage...</h1>");
});
const users = {
  base_uname: "Gautam",
  base_password:"12345"
}
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, content-type");
  next();
});
app.post("/register", (req, res) => {
  const { username, password } = req.body;
  console.log(req.body)
  if (users.base_uname === username && users.base_password === password) {
      // users.push({"username":username,"Password":password})
      res.status(200).send(`Welcome ${username} Your Credentials are : ${password}`);
  } else {
      res.status(401).send("Please Provide Correct User Name And Credentials");
  }
});

app.listen(3300, () => {
  console.log("app is listening on 3300....");
});
