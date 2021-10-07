const express = require("express")
const Database = require("../db/config")


module.exports = {

    async create(req,res){
        const db = await Database()
        var {name,color,type,breed} = req.body
    
     
        let verifyCreate = await db.all(`SELECT * FROM animais WHERE nome = '${name}' `)

        if(!verifyCreate.length > 0 ){
            await db.run(`INSERT INTO animais(nome,raca,tipo,cor)  VALUES('${name}','${breed}','${type}','${color}')`)
            res.redirect("/sistema")
        }else{
            res.json({message:"animal ja inserido"})
        }
       
    },
    async delete(req,res){
        const db = await Database()
        await db.run(`DELETE FROM  animais WHERE animal_id = ${req.params.id}`)
        res.redirect("/sistema")

    },

    async edit(req,res){
        const db = await Database()
        var id = req.params.id
        var {name,color,type,breed} = req.body
        await db.run(`UPDATE animais SET nome = '${name}' WHERE animal_id = ${id}`)
        await db.run(`UPDATE animais SET cor = '${color}' WHERE animal_id = ${id}`)
        await db.run(`UPDATE animais SET tipo = '${type}' WHERE animal_id = ${id}`)
        await db.run(`UPDATE animais SET raca = '${breed}' WHERE animal_    id = ${id}`)
        res.redirect("/sistema")
       
    }
}