
const Database = require("../database/config")


module.exports = {

    async view(){
        const db = await Database()
        var animais = await db.all("SELECT * FROM animais")
        return animais; 
       
    }
}