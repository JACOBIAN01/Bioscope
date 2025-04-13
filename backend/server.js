import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import router from "./Routes/MovieRoute.js";

dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

//Routes
app.use("/api/movies", router);

const MongoDB_URI =
  "mongodb+srv://subhadeep:Subha%40%282003%29@moviedb.0tmjtzd.mongodb.net/";

mongoose
  .connect(MongoDB_URI, {})
  .then(() => {
    console.log("🚀Connected to MongoDB .");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("❌ MongoDB connection error:", error);
  });
