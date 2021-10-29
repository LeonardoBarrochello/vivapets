const express = require("express")
const Database = require("../database/config")


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
        await db.run(`UPDATE animais SET raca = '${breed}' WHERE animal_id = ${id}`)
        res.redirect("/sistema")
       
    },

    async deletall(req,res){
        const db = await Database()
        await db.run(`delete from animais`)
        res.redirect("/sistema")
    },

    async adoptAnimal(req,res){
        const db = await Database()
        const animal_id = req.params.id;
        const user_id = req.params.userId;
        var {name,age,address,phone,city} = req.body 
        const verifyAdopted = await db.get(`SELECT dono_id FROM animais WHERE animal_id = ${animal_id}`)  
        console.log(verifyAdopted)
            if(verifyAdopted.dono_id == null){
                await db.run(`INSERT INTO dono(nome,idade,endereco,cidade,telefone,usuario_id)  VALUES('${name}',${age},'${phone}','${address}','${city}',${user_id})`)
                let findDonoID = await db.get(`SELECT dono_id FROM dono WHERE usuario_id = ${user_id} `)
                await db.run(`UPDATE animais SET dono_id = ${findDonoID.dono_id} WHERE animal_id = ${animal_id}`)
                await db.run(`UPDATE animais SET adotado = 1 WHERE animal_id = ${animal_id}`)
                await db.run(`INSERT INTO adocao(animal_id)  VALUES(${animal_id})`)
                res.redirect("/animais")
            }else{
                res.render("parts/animalAlreadyAdopted")
            }
            
        
       
        
        
    }
}