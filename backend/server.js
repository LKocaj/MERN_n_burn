import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();

app.use(express.json()); // Middleware to parse JSON data in req.body

app.post("/api/products", async (req, res) => {
  const product = req.body;

  if (product.name || product.price || product.Image) {
    return res
      .status(400)
      .json({ success: false, message: "Please fill all the fields" });
  }

  const newproduct = new Product(product);

  try {
    await newproduct.save();
    res.status(201).json({ success: true, data: newproduct });
  } catch (error) {
    console.error("Error in saving product:", error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

app.listen(5000, () => {
  connectDB();
  console.log("Server is running on http://localhost:5000");
});
