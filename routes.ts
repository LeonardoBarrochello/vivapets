const express = require('express');
const { resolveInclude } = require('ejs')
const route = express.Router()  //gerenciador de rotas do express
const cadastroLogin = require("./src/controllers/CadastroController")
const loginController = require("./src/controllers/LoginController")
const animalController = require("./src/controllers/AnimalController")
const viewAllAnimals = require("./src/controllers/ConsultaAnimaisController")
require("dotenv").config();
const session = require('express-session')
var day = 3600000 * 24
route.use(session({ secret:process.env.SECRET ,saveUninitialized: false,resave: false , expires: new Date(Date.now() + day )  }))
route.use(express.json())
 

route.get("/allAnimals" ,async (req,res) =>{
    const animals = await viewAllAnimals.view()
    return  res.json(animals)
})

route.get("/", (req,res) =>{
    if(req.session.login){
        res.render("main",{sessao:req.session.login  , page:'home'})
    }else{
        res.render("main",{sessao:null , page:'home'})
    }
 
})

route.get("/logout",(req,res)=>{
    req.session.destroy()
    res.redirect("/")
})

route.get("/sistema" , async (req,res) => {
    if(req.session.login){
       
    }else{
        res.redirect("/")
    } 
    const animals = await viewAllAnimals.view()
    res.render("sistema",{sessao:req.session.login,allanimals:animals , page:'sistema'})
    
})


route.get("/animais" ,async (req,res) => {
    const animals = await viewAllAnimals.view()
    if(req.session.login){
        res.render("animais",{sessao:req.session.login,allanimals:animals , page:'animais'})
    }else{
        res.render("animais",{sessao:null,allanimals:animals , page:'animais'})
    }
  
})

route.get("/login",(req,res)=>{
    res.render("login",{sessao:null , page:'login'})
})

route.get("/cadastro",(req,res)=>{
    res.render("cadastro",{sessao:null , page:'cadastro'})
})

route.post("/create-account",cadastroLogin.create)
route.post("/login-account",loginController.enter)
route.post("/create-animal",animalController.create)
route.post("/delete-animal/:id",animalController.delete)
route.post("/edit-animal/:id",animalController.edit)

export  default route