import { LoaderArgs, ActionArgs, redirect } from "@remix-run/node";
import { useNavigate, useLoaderData } from "@remix-run/react";
import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";
import {
  deleteExpense,
  getExpense,
  updateExpense,
} from "~/data/expenses.server";
import { validateExpenseInput } from "~/data/validation.server";
import { IExpense } from "~/interfaces/expense";
import type { MetaFunction } from "@remix-run/node";

const ExpensePage = () => {
  const navigate = useNavigate();

  const closeHandler = () => {
    navigate("..");
  };
  return (
    <Modal onClose={closeHandler}>
      <ExpenseForm />
    </Modal>
  );
};

export default ExpensePage;

// export function loader({ params }: LoaderArgs) {
//   const expenseId = params.id;
//   if (!expenseId) {
//     throw Error("No Id");
//   }
//   return getExpense(expenseId);
// }

export async function action({ params, request }: ActionArgs) {
  const expenseId = params.id!;
  if (request.method === "PATCH") {
    const formData = await request.formData();
    const expenseData = Object.fromEntries(formData);

    try {
      validateExpenseInput(expenseData as unknown as IExpense);
    } catch (error) {
      return error;
    }

    await updateExpense(expenseId, expenseData as unknown as IExpense);
    return redirect("/expenses");
  } else if (request.method === "DELETE") {
    await deleteExpense(expenseId);
    return { expenseId };
  }
}

export const meta: MetaFunction = ({ params, location, data, parentsData }) => {
  const expense = parentsData["routes/__app/expenses"].find(
    (expense: IExpense) => expense.id === params.id
  );
  return {
    title: expense.title,
    description: "Update expense",
  };
};
