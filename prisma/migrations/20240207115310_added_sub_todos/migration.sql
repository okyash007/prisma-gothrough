-- AlterTable
ALTER TABLE "Todos" ADD COLUMN     "todosId" INTEGER;

-- AddForeignKey
ALTER TABLE "Todos" ADD CONSTRAINT "Todos_todosId_fkey" FOREIGN KEY ("todosId") REFERENCES "Todos"("id") ON DELETE SET NULL ON UPDATE CASCADE;
