import { LoaderArgs } from "@remix-run/node";
import { useNavigate, useLoaderData } from "@remix-run/react";
import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";
import { getExpense } from "~/data/expenses.server";

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
