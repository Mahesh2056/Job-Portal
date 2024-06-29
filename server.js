// imports
const express = require("express");

//rest object
const app = express();

//routes
app.get("/", (req,res) => {
    res.send("<h1>Welcome to JOB PORTAL</h1>");
});

//listen
app.listen(8080, () => {
    console.log("Node Server Running on port 8080");
});