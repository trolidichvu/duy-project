const express = require("express");

require("dotenv").config();

const app = express();


app.get("/", async (req, res) => {
  // const result=await sendMail();
  console.log('eee')
  res.send("Welcome to Gmail API with NodeJS");
});

app.post("/", async (req, res) => {
  console.log(req.body)
  res.send("Welcome to Gmail API with NodeJS");
})

app.listen(process.env.PORT, () => {
  console.log("listening on port " + process.env.PORT);
});
