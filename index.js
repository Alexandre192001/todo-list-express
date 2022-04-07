const express = require('express');
const path = require('path')
require("./config/database")


const routerIndex = require("./src/routers/index")
const checklistRouter = require("./src/routers/checklist")

const app = express();
app.use(express.json())

app.set("views", path.join(__dirname,"src/views"))
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"public")))
app.use("/", routerIndex)
app.use("/checklist", checklistRouter)


app.listen(3000,(req,res)=>{
  console.log("Servidor Iniciado")
})