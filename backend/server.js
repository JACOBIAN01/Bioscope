const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const movieRouter = require("./Routes/MovieRoute.js");
 
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;;

app.use(
  cors({
    origin: ["http://localhost:5000", "https://bioscope-delta.vercel.app"],
  })
);

app.use(express.json());

app.use("/api/movies", movieRouter);

const MongoDB_URI = process.env.MONGODB_URI;


mongoose
  .connect(MongoDB_URI)
  .then(() => {
    console.log("🚀Connected to MongoDB .");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("❌ MongoDB connection error:", error);
  });

  //http://localhost:5000/api/movies

  