const express = require("express");
const cors = require("cors");

const containers = require("./routes/containers");
const file = require("./routes/files");
const root = require("./routes/superUser");
const search = require("./routes/imageSearch");
const images = require("./routes/images");

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

// Routes
app.use("/containers", containers);
app.use("/file", file);
app.use("/root", root);
app.use("/search", search);
app.use("/images", images);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
