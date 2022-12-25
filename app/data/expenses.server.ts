import { IExpense } from "~/interfaces/expense";
import { prisma } from "./database.server";

export async function addExpense(expenseData: IExpense) {
  try {
    return await prisma.expense.create({
      data: {
        id: expenseData.id,
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

export async function getExpenses() {
  try {
    return await prisma.expense.findMany({ orderBy: { date: "desc" } });
  } catch (error) {
    console.log(error);
    throw error;
  }
}
