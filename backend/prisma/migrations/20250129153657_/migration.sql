/*
  Warnings:

  - The primary key for the `Category` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `category_id` on the `Category` table. All the data in the column will be lost.
  - You are about to alter the column `name` on the `Company` table. The data in that column could be lost. The data in that column will be cast from `String` to `Json`.
  - The primary key for the `Product` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `product_id` on the `Product` table. All the data in the column will be lost.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `user_id` on the `User` table. All the data in the column will be lost.
  - Added the required column `id` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Category" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "parentCategoryId" INTEGER,
    CONSTRAINT "Category_parentCategoryId_fkey" FOREIGN KEY ("parentCategoryId") REFERENCES "Category" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Category" ("name", "parentCategoryId") SELECT "name", "parentCategoryId" FROM "Category";
DROP TABLE "Category";
ALTER TABLE "new_Category" RENAME TO "Category";
CREATE TABLE "new_Category_Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "categoryCategory_id" INTEGER NOT NULL,
    "productProduct_id" INTEGER NOT NULL,
    CONSTRAINT "Category_Product_categoryCategory_id_fkey" FOREIGN KEY ("categoryCategory_id") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Category_Product_productProduct_id_fkey" FOREIGN KEY ("productProduct_id") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Category_Product" ("categoryCategory_id", "id", "productProduct_id") SELECT "categoryCategory_id", "id", "productProduct_id" FROM "Category_Product";
DROP TABLE "Category_Product";
ALTER TABLE "new_Category_Product" RENAME TO "Category_Product";
CREATE TABLE "new_Company" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" JSONB NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Company" ("id", "name") SELECT "id", "name" FROM "Company";
DROP TABLE "Company";
ALTER TABLE "new_Company" RENAME TO "Company";
CREATE TABLE "new_Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "companyCompany_id" INTEGER NOT NULL,
    CONSTRAINT "Product_companyCompany_id_fkey" FOREIGN KEY ("companyCompany_id") REFERENCES "Company" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Product" ("companyCompany_id", "description", "name") SELECT "companyCompany_id", "description", "name" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_User" ("created_at", "passwordHash", "username") SELECT "created_at", "passwordHash", "username" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE TABLE "new_User_Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userUser_id" INTEGER NOT NULL,
    "productsProduct_id" INTEGER NOT NULL,
    CONSTRAINT "User_Product_userUser_id_fkey" FOREIGN KEY ("userUser_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "User_Product_productsProduct_id_fkey" FOREIGN KEY ("productsProduct_id") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_User_Product" ("created_at", "id", "productsProduct_id", "userUser_id") SELECT "created_at", "id", "productsProduct_id", "userUser_id" FROM "User_Product";
DROP TABLE "User_Product";
ALTER TABLE "new_User_Product" RENAME TO "User_Product";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
