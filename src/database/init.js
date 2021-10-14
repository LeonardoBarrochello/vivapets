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
            status_id INTEGER,
            dono_id INTEGER,
            FOREIGN KEY(status_id) REFERENCES status(status_id),
            FOREIGN KEY(dono_id) REFERENCES dono(dono_id)

        )`);
        await db.exec(`CREATE TABLE status (
            status_id INTEGER PRIMARY KEY AUTOINCREMENT,
            adotado BOOLEAN,
            abandonado BOOLEAN,
            encontrado BOOLEAN,
            doente_machucado BOOLEAN,
            em_processo_de_adocao BOOLEAN,
            animais_id INTEGER 
        )`);
        await db.exec(`CREATE TABLE dono (
            dono_id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT,
            idade INTEGER,
            endereco TEXT,
            telefone TEXT,
            cidade TEXT,
            animal_id INTEGER ,
            usuario_dono_id,
            FOREIGN KEY(animal_id) REFERENCES animais(animal_id)
            FOREIGN KEY(usuario_dono_id) REFERENCES usuarios(usuario_id)

        )`);
        await db.exec(`CREATE TABLE adocao (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            data_adocao DATE,
            animal_id INTEGER ,
            dono_id INTEGER,
            FOREIGN KEY(animal_id) REFERENCES animais(animal_id),
            FOREIGN KEY(dono_id) REFERENCES dono(dono_id)
            
            
        )`);
        await db.close()
    }
}

initDb.init();
