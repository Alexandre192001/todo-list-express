const mongoose = require('mongoose')

const TaskSchema = mongoose.Schema({
  nome:{type:String, required: true},
  done:{Boolean, default: false},
  checklist:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"Checklist",
    required: true
  }
})

module.exports = mongoose.model("Tasks", TaskSchema)