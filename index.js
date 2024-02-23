import express from "express";
import jediRouter from "./routes/jedi.js";
import sithRouter from "./routes/sith.js";
//import * as path from "path";

const app = express();

const port = 3000;

app.get("/", (req,res)=> {
    res.render(
        "pages/home.ejs",
        {
            pageTitle: "Welcome to the force"
        });
})


app.listen(port, ()=> {
    console.log("Server connected");
})
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use("/jedi", jediRouter)
app.use("/sith", sithRouter)