import { LinksFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import React from "react";
import expensesStyles from "~/styles/expenses.css";

const ExpensesAppLayout = () => {
  return <Outlet />;
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
