console.log("🚀 TEST DEPLOY CHANGE");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Updated Version Deployed Successfully!");
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});

