import { LinksFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import ExpensesList from "~/components/expenses/ExpensesList";
import expensesStyles from "~/styles/expenses.css";
const DUMMY_EXPENSES = [
  {
    id: "1",
    title: "First",
    amount: 12.99,
    date: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Second",
    amount: 14.99,
    date: new Date().toISOString(),
  },
];
const ExpensesLayout = () => {
  return (
    <>
      <Outlet />
      <main>
        <ExpensesList expenses={DUMMY_EXPENSES} />
      </main>
    </>
  );
};

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: expensesStyles },
];

export default ExpensesLayout;
