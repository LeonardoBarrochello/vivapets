-- CreateTable
CREATE TABLE "usuarios" (
    "usuario_id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "dono" (
    "dono_id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,
    "endereco" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "usuario_dono_id" TEXT NOT NULL,
    CONSTRAINT "dono_usuario_dono_id_fkey" FOREIGN KEY ("usuario_dono_id") REFERENCES "usuarios" ("usuario_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "animais" (
    "animal_id" TEXT NOT NULL PRIMARY KEY,
    "raca" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "cor" TEXT NOT NULL,
    "animal_dono_id" TEXT NOT NULL,
    CONSTRAINT "animais_animal_dono_id_fkey" FOREIGN KEY ("animal_dono_id") REFERENCES "dono" ("dono_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "adocao" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "animal_id" TEXT NOT NULL,
    "dono_id" TEXT NOT NULL,
    CONSTRAINT "adocao_animal_id_fkey" FOREIGN KEY ("animal_id") REFERENCES "animais" ("animal_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "adocao_dono_id_fkey" FOREIGN KEY ("dono_id") REFERENCES "dono" ("dono_id") ON DELETE RESTRICT ON UPDATE CASCADE
);
