/*
  Warnings:

  - You are about to drop the column `todosId` on the `Todos` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Todos" DROP CONSTRAINT "Todos_todosId_fkey";

-- AlterTable
ALTER TABLE "Todos" DROP COLUMN "todosId",
ADD COLUMN     "parentTodoId" INTEGER;

-- AddForeignKey
ALTER TABLE "Todos" ADD CONSTRAINT "Todos_parentTodoId_fkey" FOREIGN KEY ("parentTodoId") REFERENCES "Todos"("id") ON DELETE SET NULL ON UPDATE CASCADE;
