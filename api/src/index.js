const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

// settings
app.set("port", process.env.PORT || 4000);

const corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));

// middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
/* app.use((req, res) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
}); */

// routes
app.use("/api/phones", require("./routes/index.js"));

// starting the server
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
