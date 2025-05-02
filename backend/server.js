import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});

// Zr24fo9dCHQQvCei
