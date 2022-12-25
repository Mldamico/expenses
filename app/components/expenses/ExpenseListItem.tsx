import { Form, Link } from "@remix-run/react";
import { IExpense } from "~/interfaces/expense";

function ExpenseListItem({ id, title, amount }: IExpense) {
  function deleteExpenseItemHandler() {
    // tbd
  }

  return (
    <article className="expense-item">
      <div>
        <h2 className="expense-title">{title}</h2>
        <p className="expense-amount">${parseFloat(amount).toFixed(2)}</p>
      </div>
      <menu className="expense-actions">
        <Form method="delete" action={`/expenses/${id}`}>
          <button>Delete</button>
        </Form>
        {/* <button onClick={deleteExpenseItemHandler}>Delete</button> */}
        <Link to={id}>Edit</Link>
      </menu>
    </article>
  );
}

export default ExpenseListItem;
