import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { string, required: true },
    price: { Number, required: true },
    Image: { string, required: true },
  },
  { timestamps: true } //createdAt, updatedAt
);

const Product = mongoose.model("Product", productSchema);
// will pluralize the model name to create the collection name
// e.g. Product -> products
export default Product;
