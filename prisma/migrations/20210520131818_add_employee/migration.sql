-- CreateTable
CREATE TABLE "Employee" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "role" INTEGER NOT NULL,
    "referenceManager" INTEGER,
    "departmentName" TEXT NOT NULL,
    "departmentId" INTEGER NOT NULL
);
