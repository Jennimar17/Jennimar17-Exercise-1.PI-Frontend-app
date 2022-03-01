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

// routes
app.use("/api/phones", require("./routes/index.js"));
app.use("/api/phones/:id", require("./routes/index.js"));


// starting the server
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
