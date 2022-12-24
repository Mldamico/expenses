import { LinksFunction } from "@remix-run/node";
import { Link, Outlet } from "@remix-run/react";
import ExpensesList from "~/components/expenses/ExpensesList";
import expensesStyles from "~/styles/expenses.css";
import { FaPlus, FaDownload } from "react-icons/fa";
const DUMMY_EXPENSES = [
  {
    id: "1",
    title: "First",
    amount: "12.99",
    date: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Second",
    amount: "14.99",
    date: new Date().toISOString(),
  },
];
const ExpensesLayout = () => {
  return (
    <>
      <Outlet />
      <main>
        <section id="expenses-actions">
          <Link to="add">
            <FaPlus />
            <span>Add Expense</span>
          </Link>
          <a href="/expenses/raw">
            <FaDownload />
            <span>Load Raw Data</span>
          </a>
        </section>
        <ExpensesList expenses={DUMMY_EXPENSES} />
      </main>
    </>
  );
};

export default ExpensesLayout;
