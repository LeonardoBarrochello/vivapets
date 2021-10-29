const Database = require("./config")

const initDb = {
    async init(){
        const db = await Database()

        await db.exec(`CREATE TABLE usuarios (
            usuario_id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            email TEXT,
            password TEXT
        )`);

        await db.exec(`CREATE TABLE animais (
            animal_id INTEGER PRIMARY KEY AUTOINCREMENT,
            raca TEXT,
            tipo TEXT,
            nome TEXT,
            cor TEXT,
            adotado BOOLEAN,
            dono_id INTEGER,
            FOREIGN KEY(dono_id) REFERENCES dono(dono_id)

        )`);
        await db.exec(`CREATE TABLE dono (
            dono_id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT,
            idade INTEGER,
            endereco TEXT,
            telefone TEXT,
            cidade TEXT,
            usuario_id INTEGER,
            FOREIGN KEY(usuario_id) REFERENCES usuarios(usuario_id)   


        )`);
        await db.exec(`CREATE TABLE adocao (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            data_adocao DATE,
            animal_id INTEGER ,
            FOREIGN KEY(animal_id) REFERENCES animais(animal_id)      
        )`);
        await db.close()
    }
}

initDb.init();
