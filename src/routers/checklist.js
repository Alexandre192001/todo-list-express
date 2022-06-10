const express = require('express');
const Checklist = require('../models/checklists');
const router = express.Router()

router.get("/", async (req, res) => {
  try {
    let checklists = await Checklist.find({});
    res.render("checklists/index", {checklists: checklists})
  } catch (error) {
    res.status(500).render("pages/error",{error:""})   
  }
})

router.get("/new", async(req, res) => {
  try {
    let checklist = new Checklist();
    res.status(200).render("checklists/new",{checklist: checklist})
  } catch (error) {
    res.status(500)
  }
})


router.post("/", async (req,res) => {
  let {name} = req.body.checklist
  let checklist = new Checklist({name})
  try { 
    await checklist.save()
    res.redirect("/checklist")
  } catch (error) {
    res.status(422).render("/checklists/new", {checklists:{ ...checklist,error}})
}
}) 

router.get("/:id/editar", async (req, res) => {
  try {
    let checklist = await Checklist.findById(req.params.id);
    res.status(200).render("checklists/editar",{checklist: checklist})
  } catch (error) {
    res.status(500).render("pages/error",{error:"Erro ao editar tarefa"}) 
  }
})

router.get("/:id", async (req, res) => {
  try {
    let checklist = await Checklist.findById(req.params.id);
    res.render("checklists/show", {checklist: checklist})
  } catch (error) {
    res.status(500).render("pages/error",{error:"Ao pegar tarefa"}) 
  }
})

router.put("/:id", async (req,res)=>{
  let {name} = req.body.checklist;
  let checklist = await Checklist.findById(req.params.id);
  try {
    await checklist.update({name});
    res.redirect("/checklist")
  } catch (error) {
    let errors = error.errors;
    res.status(422).render("checklists/editar",{checklist:{...checklist,errors}});
  }
})

router.delete("/:id", async (req,res)=>{
  try {
    let checklist = await Checklist.findByIdAndRemove(req.params.id);
     res.redirect("/checklist")
  } catch (error) {
    res.status(500).render("pages/error",{error:"Error ao deletar tarefa"}) 
  }
})

module.exports =  router;