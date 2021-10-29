-- CreateTable
CREATE TABLE "usuarios" (
    "usuario_id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Dono" (
    "dono_id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,
    "endereco" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "usuario_id" TEXT NOT NULL,
    CONSTRAINT "Dono_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuarios" ("usuario_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Adocao" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "data_adocao" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "animal_id" TEXT NOT NULL,
    "dono_id" TEXT NOT NULL,
    CONSTRAINT "Adocao_animal_id_fkey" FOREIGN KEY ("animal_id") REFERENCES "animais" ("animal_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Adocao_dono_id_fkey" FOREIGN KEY ("dono_id") REFERENCES "Dono" ("dono_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "animais" (
    "animal_id" TEXT NOT NULL PRIMARY KEY,
    "raca" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "cor" TEXT NOT NULL,
    "dono_id" TEXT NOT NULL,
    CONSTRAINT "animais_dono_id_fkey" FOREIGN KEY ("dono_id") REFERENCES "Dono" ("dono_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Dono_usuario_id_key" ON "Dono"("usuario_id");

-- CreateIndex
CREATE UNIQUE INDEX "Adocao_animal_id_key" ON "Adocao"("animal_id");
