
const express = require("express");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
    res.send("Thanks for sending");
});

app.listen(port, () =>{
    console.log(`listening at http://localhost:${port}`);
});