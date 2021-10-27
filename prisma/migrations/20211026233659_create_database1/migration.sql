/*
  Warnings:

  - You are about to drop the column `teste` on the `animais` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_animais" (
    "animal_id" TEXT NOT NULL PRIMARY KEY,
    "raca" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "cor" TEXT NOT NULL,
    "dono_id" TEXT NOT NULL,
    CONSTRAINT "animais_dono_id_fkey" FOREIGN KEY ("dono_id") REFERENCES "Dono" ("dono_id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_animais" ("animal_id", "cor", "dono_id", "nome", "raca", "tipo") SELECT "animal_id", "cor", "dono_id", "nome", "raca", "tipo" FROM "animais";
DROP TABLE "animais";
ALTER TABLE "new_animais" RENAME TO "animais";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
