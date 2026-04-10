import "dotenv/config";
import express from "express"
import connectDB from "./utils/connectDB";


connectDB();
const app = express();
const port = process.env.PORT || 3000;


app.listen(port, () => {
  console.log("Server is running on port 3000");
});
