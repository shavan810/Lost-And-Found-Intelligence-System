const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const lostRoutes = require("./routes/lostRoutes");
const foundRoutes = require("./routes/foundRoutes");
const notificationRoutes = require("./routes/notificationRoutes");

const app = express();


// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", require("./routes/auth"));
app.use("/api/lost", lostRoutes);
app.use("/api/found", foundRoutes);



app.use("/api/notifications", notificationRoutes);

// test route
app.get("/", (req, res) => {
  res.send("API running...");
});

// DB connect
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
