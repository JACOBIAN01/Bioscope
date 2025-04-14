const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const movieRouter = require("./Routes/MovieRoute.js");

dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use("/api/movies", movieRouter);

const MongoDB_URI =
  "mongodb+srv://subhadeep:Subha%40%282003%29@moviedb.0tmjtzd.mongodb.net/moviedb?retryWrites=true&w=majority&appName=MovieDB";

//mongodb+srv://subhadeep:Subha%40%282003%29@moviedb.0tmjtzd.mongodb.net/

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

  