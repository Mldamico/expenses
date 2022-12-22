import { IExpense } from "~/interfaces/expense";

import ExpenseListItem from "./ExpenseListItem";

function ExpensesList({ expenses }: { expenses: IExpense[] }) {
  return (
    <ol id="expenses-list">
      {expenses.map((expense) => (
        <li key={expense.id}>
          <ExpenseListItem
            id={expense.id}
            title={expense.title}
            amount={expense.amount}
          />
        </li>
      ))}
    </ol>
  );
}

export default ExpensesList;
