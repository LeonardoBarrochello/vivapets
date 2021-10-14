const Database =  require('../database/config.js')
const express = require('express')
const session = require('express-session')
const { OPEN_READWRITE } = require('sqlite3')
const app = express()
app.use(session({secret:'wswswswdfweweeewewe'}))

module.exports = {
        async enter(req,res){
           
           const db = await Database()
           const email = req.body.email;
           const pass = req.body.password;
           const verifyUser =  await db.get(`SELECT * FROM usuarios WHERE email = '${email}' and password = ${pass} `)
           console.log(email)
           console.log(pass)
           if(!verifyUser == ''){
                    req.session.login = {
                            user : verifyUser.email,
                            name : verifyUser.name
                        }
                    res.redirect(`/`) 
           }else{
                res.render("parts/passincorrect")
           }
        
        }
}