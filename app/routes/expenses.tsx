import { LinksFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import expensesStyles from "~/styles/expenses.css";

const ExpensesLayout = () => {
  return (
    <main>
      <p>Shared Element</p>
      <Outlet />
    </main>
  );
};

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: expensesStyles },
];

export default ExpensesLayout;
