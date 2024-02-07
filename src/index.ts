import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(
  email: string,
  password: string,
  fullname: string,
  phoneNumber: string
) {
  const result = await prisma.user.create({
    data: {
      email,
      fullname,
      phoneNumber,
      password,
    },
  });

  console.log(result);
}

async function addTodo(title: string, description: string, userId: number) {
  const res = await prisma.todos.create({
    data: {
      description,
      title,
      userId,
    },
  });
  console.log(res);
}

async function addSubTodo(
  title: string,
  description: string,
  parentTodoId: number,
  userId: number
) {
  const newSubTodo = await prisma.todos.create({
    data: {
      title,
      description,
      parentTodoId,
      userId,
    },
  });
  console.log(newSubTodo);
}

async function todosAndSubTodos(userId: number) {
  const allTodos = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      todos: {
        include: {
          subTodos: true, // Include all fields of subtodos
        },
      },
    },
  });
  console.log(allTodos);
}

async function updateUser(userId: number, email: string, fullname: string) {
  const res = await prisma.user.update({
    where: { id: userId },
    data: {
      fullname,
      email,
    },
  });
  console.log(res);
}

// insertUser("hello2@gmail.com", "yash@7122000", "Yash Verma", "8006679475");
// addTodo("Todo1", "Todo description 1", 4);
// addSubTodo("SubTodo1", "subTodo description 1", 1, 4);
// todosAndSubTodos(4);
