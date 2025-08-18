-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_pajamas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "season" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "favorite" BOOLEAN NOT NULL DEFAULT false,
    "onSale" BOOLEAN NOT NULL DEFAULT true,
    "salePercent" REAL
);
INSERT INTO "new_pajamas" ("description", "favorite", "gender", "id", "image", "name", "onSale", "price", "salePercent", "season", "type") SELECT "description", "favorite", "gender", "id", "image", "name", "onSale", "price", "salePercent", "season", "type" FROM "pajamas";
DROP TABLE "pajamas";
ALTER TABLE "new_pajamas" RENAME TO "pajamas";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
