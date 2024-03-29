require("dotenv").config()
const express = require('express');
const path = require('path')
const methodOverride = require('method-override')
require("./config/database")
const routerIndex = require("./src/routers/index")
const checklistRouter = require("./src/routers/checklist")
const TaskRouter = require("./src/routers/tasks")
const porta = process.env.PORT;
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(methodOverride("_method", {methods: ['POST','GET']}))
app.set("views", path.join(__dirname,"src/views"))
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"public")))
app.use("/", routerIndex)
app.use("/checklist", checklistRouter)
app.use("/checklist", TaskRouter.checklistDepedent)

app.listen(porta,(req,res)=>{
  console.log("Servidor Iniciado")
})