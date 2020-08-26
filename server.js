
const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;
const app = express();
//We can use options like json
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
   let num1 = Number(req.body.num1);
   let num2 = Number(req.body.num2);

   let result = num1 + num2;

   res.send("<h2>result is: " + result + "</h2>");

});

app.listen(port, () =>{
    console.log(`listening at http://localhost:${port}`);
});