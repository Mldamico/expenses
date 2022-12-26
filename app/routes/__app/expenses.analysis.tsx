import Chart from "~/components/expenses/Chart";
import ExpenseStatistics from "~/components/expenses/ExpenseStadistics";
import { useCatch, useLoaderData } from "@remix-run/react";
import { getExpenses } from "~/data/expenses.server";
import { json, LoaderArgs } from "@remix-run/node";
import Error from "~/components/util/Error";
import { requireUserSession } from "~/data/auth.server";

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

const AnalysisExpensePage = () => {
  const expenses = useLoaderData();
  console.log(expenses);
  return (
    <main>
      <Chart expenses={expenses} />
      <ExpenseStatistics expenses={expenses} />
    </main>
  );
};

export default AnalysisExpensePage;

export async function loader({ request }: LoaderArgs) {
  await requireUserSession(request);
  const expenses = await getExpenses();

  if (!expenses || expenses.length === 0) {
    throw json(
      { message: "Could not find any expenses" },
      { status: 404, statusText: "No Expenses Found" }
    );
  }

  return expenses;
}

export function CatchBoundary() {
  const caughtResponse = useCatch();
  return (
    <main>
      <Error title={caughtResponse.statusText}>
        <p>
          {caughtResponse.data?.message ||
            "Something went wrong. Could not load expenses"}
        </p>
      </Error>
    </main>
  );
}
