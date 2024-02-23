import express from "express";

const jediRouter= express.Router();

jediRouter.get("/", (req,res)=> 
res.render(
    "pages/team.ejs",
    { 
        teamHeader: "Jediiiiii",
        className: "jedi"
    }
    )
)

export default jediRouter;
