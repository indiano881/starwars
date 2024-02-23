import express from "express";
const sithRouter= express.Router();

sithRouter.get("/", (req,res)=> 
res.render(
    "pages/team.ejs",
    {
        teamHeader: "Sith page",
        className: "sith"
    })

)

export default sithRouter;
