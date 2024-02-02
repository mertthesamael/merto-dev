/*
  Warnings:

  - Added the required column `category` to the `Articles` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Articles" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "category" TEXT NOT NULL
);
INSERT INTO "new_Articles" ("id", "link", "source", "title") SELECT "id", "link", "source", "title" FROM "Articles";
DROP TABLE "Articles";
ALTER TABLE "new_Articles" RENAME TO "Articles";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
