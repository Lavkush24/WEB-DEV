-- CreateTable
CREATE TABLE "UserNext" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "UserNext_username_key" ON "UserNext"("username");
