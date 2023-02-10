const express = require("express");
const cors = require("cors");

const detailsController = require("./routes/details");
const copperDomesController = require("./routes/defence");
const mapController = require("./routes/map");

const app = express();

app.use(cors());

// const port = 9000;

app.use(express.json());

app.use("/details/qirya", detailsController);
app.use("/domes/qirya", copperDomesController);
app.use("/map", mapController)


// app.listen(port, () => console.log(`Server is listening on port ${port}`));

module.exports = app;
