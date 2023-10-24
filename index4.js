import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
var bandName = "";

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});


function bandNameFunc (req,res,next) {
  console.log(req.body);
  bandName = req.body["street"] + req.body["pet"];
  next();
}
app.use(bandNameFunc);


app.post("/submit", (req, res) => {
  console.log(req.body);
  res.send(bandName + "🥰")
});



app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});