const express = require("express")
const Database = require("../db/config")
const send = require('../controllers/SendEmailController')

module.exports = {

    async create(req,res){
        const db = await Database()
        var {name,email,password} = req.body
        name = name.toUpperCase()
        let verifyCreate = await db.all(`SELECT * FROM usuarios WHERE email = '${email}' `)
        if( !verifyCreate.length > 0){
            const bodyMessage = `
                                                Olá ${name}!! Seja Bem vindo ao Viva Pets!!

            Ao analisarmos as situações do dia a dia, notamos que muitas vezes deixamos passar despercebidos aqueles que nunca nos esquecem, os animais!

            Todos sabemos o quanto estes se apegam e necessitam do auxílio humano para sobreviver, porém, infelizmente existes pessoas que acabam deixando essa relação de lado e abandonando seus pets.
            
            Claro que não podemos generalizar, mas segundo a Organização Mundial da Saúde estima-se que só no Brasil existem mais de 30 milhões de animais abandonados, algo assustador.
            
            É levando essas informações em conta, que resolvemos desenvolver um software capaz integrar toda a população e ONGs num objetivo de um maior controle sobre toda essa situação. Pelo próprio aplicativo e site será possível realizar diversas operações, como o cadastro e a divulgação de animais abandonados, possibilitando então estes serem adotados rapidamente ou até mesmo serem encontrados.
            Mas que para isso ocorra da melhor maneira possível, contamos com sua colaboração!
            Suporte VivaPets`
            await db.run(`INSERT INTO usuarios(email,password,name)  VALUES('${email}',${password},'${name}')`)
            send.send(email,bodyMessage)
            res.render('parts/confirmCreate')
        }else{
            res.render("parts/userAlready")
        }
    }
}