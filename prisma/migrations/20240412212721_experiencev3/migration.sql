/*
  Warnings:

  - Added the required column `projectYear` to the `Experience` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Experience" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "companyName" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "projectLink" TEXT NOT NULL,
    "projectYear" TEXT NOT NULL
);
INSERT INTO "new_Experience" ("companyName", "description", "id", "img", "projectLink", "role") SELECT "companyName", "description", "id", "img", "projectLink", "role" FROM "Experience";
DROP TABLE "Experience";
ALTER TABLE "new_Experience" RENAME TO "Experience";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
