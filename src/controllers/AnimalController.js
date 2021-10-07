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
        var {name,color,type,breed} = req.body
        await db.run(`UPDATE animais SET nome = '${name}'`)
        await db.run(`UPDATE animais SET cor = '${color}'`)
        await db.run(`UPDATE animais SET tipo = '${type}'`)
        await db.run(`UPDATE animais SET raca = '${breed}'`)
        res.redirect("/sistema")
       
    }
}