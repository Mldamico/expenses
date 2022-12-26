import { IExpense } from "~/interfaces/expense";
import { prisma } from "./database.server";

export async function addExpense(expenseData: IExpense, userId: string) {
  try {
    return await prisma.expense.create({
      data: {
        title: expenseData.title,
        amount: +expenseData.amount,
        date: new Date(expenseData.date!),
        User: { connect: { id: userId } },
      },
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getExpenses(userId: string) {
  if (!userId) {
    throw new Error("Failed to get expenses");
  }
  try {
    return await prisma.expense.findMany({
      where: { userId },
      orderBy: { date: "desc" },
    });
  } catch (error) {
    console.log(error);
    throw new Error("Failed to get expenses");
  }
}

export async function getExpense(id: string) {
  try {
    return await prisma.expense.findFirst({ where: { id } });
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function updateExpense(id: string, expenseData: IExpense) {
  try {
    await prisma.expense.update({
      where: { id },
      data: {
        title: expenseData.title,
        amount: +expenseData.amount,
        date: new Date(expenseData.date!),
      },
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function deleteExpense(id: string) {
  try {
    await prisma.expense.delete({
      where: { id },
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
}
