const express = require('express');
const path = require('path')
require("./config/database")


const routerIndex = require("./src/routers/index")

const app = express();
app.use(express.json())

app.set("views", path.join(__dirname,"src/views"))
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"public")))
app.use("/", routerIndex)



app.listen(3000,(req,res)=>{
  console.log("Servidor Iniciado")
})