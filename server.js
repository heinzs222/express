const express = require("express");

const app = express();

var d = new Date();
var n = d.getHours();

if (n > 8 && n < 17) {
  app.get("/home", (req, res) => {
    res.sendFile(__dirname + "/public/home.html");
  });

  app.get("/contact", (req, res) => {
    res.sendFile(__dirname + "/public/contact.html");
  });

  app.get("/services", (req, res) => {
    res.sendFile(__dirname + "/public/ourServices.html");
  });
} else {
  app.get("/home", (req, res) => {
    res.send("the website is open between 8 am and 5 pm");
  });
}

app.listen(3000, err => {
  if (err) console.log("server is out");
  else console.log("server is running on port 3000");
});
