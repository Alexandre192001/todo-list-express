const express = require('express');
require("./config/database")
const server = express();

server.listen(3000,(req, res)=>{
  console.log("Servidor ativo");
})


server.use((req, res)=>{
  res.send("<h1>Alexandre</h1>")
})