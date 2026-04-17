import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { connectDB } from "./utils/connectDB.js";
import authRoute from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRouter from "./routes/user.route.js";
import notesRouter from "./routes/generate.route.js";
import pdfRouter from "./routes/pdf.route.js";

// DB CALL
connectDB();

const app = express();
const port = process.env.PORT || 8000;
// const corsOptions={origin:process.env.FRONTEND_URL,credentials:true,methods:["GET","POST","PUT","DELETE","OPTIONS"]};

// MIDDLEWARE
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  }),
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// ROUTES
app.use("/api/auth", authRoute);
app.use("/api/user", userRouter);
app.use("/api/notes", notesRouter);
app.use("/api/pdf", pdfRouter);

app.get("/", (req, res) => {
  res.send("all working routes");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
