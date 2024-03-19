const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Bot is running");
})

app.get("/nodejstest", (req, res) => {
  res.send("Hello world!");
})
