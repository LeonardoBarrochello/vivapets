const express = require('express')
const route = require('./routes')
const server = express()
const path = require('path')

server.set("view engine","ejs")  // informa para o express que a view engine é o ejs

server.use(express.static("public"))
server.set("views" , path.join(__dirname,'src/views'))  // altera o caminho padrão para a pasta views
server.use(express.urlencoded({extended:true}))
server.use(route)   //informa para o express usar o arquivo route senão não funciona 


server.listen(5000,()=>{
    console.log("Rodando!!")   
})