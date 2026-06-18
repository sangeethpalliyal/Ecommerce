import express from "express";
import path from "path"
import { ENV } from "./config/env.js";
const app = express()

const _dirname = path.resolve();

app.get("/api/health",(res,req) => {
    res.status(200).json({message:"Success"});
})

if(ENV.NODE_ENV === "production"){
    app.use(express.static(path.join(_dirname,"../admin/dist")))
}
app.listen(ENV.PORT,() => console.log("Server is up and running"));
