const express = require("express");
const app = express();
const port = process.env.PORT || 3500;

app.get("/", (req, res) => res.send("Hello from 1dmahesh joshi!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
