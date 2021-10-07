const express = require('express');
const { resolveInclude } = require('ejs')
const route = express.Router()  //gerenciador de rotas do express
const cadastroLogin = require("./src/controllers/CadastroController")
const loginController = require("./src/controllers/LoginController")
const animalController = require("./src/controllers/AnimalController")
const viewAllAnimals = require("./src/controllers/ConsultaAnimaisController")
const session = require('express-session')
route.use(session({secret:'key',saveUninitialized: false,resave: false}))
route.use(express.json())
 


route.get("/", (req,res) =>{
    if(req.session.login){
        res.render("main",{sessao:req.session.login})
    }else{
        res.render("main",{sessao:null})
    }
 
})

route.get("/logout",(req,res)=>{
    req.session.destroy()
    res.redirect("/")
})

route.get("/sistema" , async (req,res) => {
   /*  if(req.session.login){
       
    }else{
        res.redirect("/")
    } */
    const animals = await viewAllAnimals.view()
    res.render("sistema",{sessao:req.session.login,allanimals:animals})
    
})

route.get("/aboutus" , (req,res) => {
    res.render("aboutus")
})

route.get("/login",(req,res)=>{
    res.render("login",{sessao:null})
})

route.get("/cadastro",(req,res)=>{
    res.render("cadastro",{sessao:null})
})

route.post("/create-account", cadastroLogin.create)
route.post("/login-account",loginController.enter)
route.post("/create-animal",animalController.create)
route.post("/delete-animal/:id",animalController.delete)
route.post("/edit-animal/:id",animalController.edit)

module.exports = route