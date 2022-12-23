import { LinksFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import ExpensesHeader from "~/components/navigation/ExpensesHeader";
import expensesStyles from "~/styles/expenses.css";

const ExpensesAppLayout = () => {
  return (
    <>
      <ExpensesHeader />
      <Outlet />
    </>
  );
};

export default ExpensesAppLayout;

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: expensesStyles,
    },
  ];
};
