const express = require("express")
const Database = require("../db/config")


module.exports = {

    async create(req,res){
        const db = await Database()
        var {nome,raca,tipo,cor} = req.body
     
        let verifyCreate = await db.all(`SELECT * FROM animais WHERE nome = '${nome}' `)

        if(!verifyCreate.length > 0 ){
            await db.run(`INSERT INTO animais(nome,raca,tipo,cor)  VALUES('${nome}',${raca},'${tipo}','${cor}')`)
        }
       
    }
}