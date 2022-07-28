const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect(process.env.DB_URI, { useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
  console.log("Conectado ao mongodb");
}).catch((error)=>{
  console.log(error)
})