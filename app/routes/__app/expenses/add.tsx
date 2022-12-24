import { ActionArgs, redirect } from "@remix-run/node";
import { useNavigate } from "@remix-run/react";
import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";
import { addExpense } from "~/data/expenses.server";
import { validateExpenseInput } from "~/data/validation.server";
import { IExpense } from "~/interfaces/expense";

const AddExpensePage = () => {
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

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  const expenseData = Object.fromEntries(formData);
  try {
    validateExpenseInput(expenseData as unknown as IExpense);
  } catch (error) {
    return error;
  }

  await addExpense(expenseData as unknown as IExpense);
  return redirect("/expenses");
}

export default AddExpensePage;
