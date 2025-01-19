-- CreateTable
CREATE TABLE "User" (
    "user_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Company" (
    "company_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Category" (
    "category_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "parentCategoryId" INTEGER,
    CONSTRAINT "Category_parentCategoryId_fkey" FOREIGN KEY ("parentCategoryId") REFERENCES "Category" ("category_id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Product" (
    "product_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "companyCompany_id" INTEGER NOT NULL,
    CONSTRAINT "Product_companyCompany_id_fkey" FOREIGN KEY ("companyCompany_id") REFERENCES "Company" ("company_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "User_Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userUser_id" INTEGER NOT NULL,
    "productsProduct_id" INTEGER NOT NULL,
    CONSTRAINT "User_Product_userUser_id_fkey" FOREIGN KEY ("userUser_id") REFERENCES "User" ("user_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "User_Product_productsProduct_id_fkey" FOREIGN KEY ("productsProduct_id") REFERENCES "Product" ("product_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Category_Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "categoryCategory_id" INTEGER NOT NULL,
    "productProduct_id" INTEGER NOT NULL,
    CONSTRAINT "Category_Product_categoryCategory_id_fkey" FOREIGN KEY ("categoryCategory_id") REFERENCES "Category" ("category_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Category_Product_productProduct_id_fkey" FOREIGN KEY ("productProduct_id") REFERENCES "Product" ("product_id") ON DELETE RESTRICT ON UPDATE CASCADE
);
