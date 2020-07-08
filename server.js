const express = require("express");
const connectDB = require("./config/db");
const path = require("path");

const app = express();

//Connect DB

connectDB();

// Initalise middleware

app.use(express.json());

//Define routes

app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));

// Serve static assets in production

if (process.env.NODE_ENV === "production") {
  //set Static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 8443;

app.listen(PORT, () =>
  console.log(`Server started. Listening to the port ${PORT}`)
);
