import Chart from "~/components/expenses/Chart";
import ExpenseStatistics from "~/components/expenses/ExpenseStadistics";

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
  return (
    <main>
      <Chart expenses={DUMMY_EXPENSES} />
      <ExpenseStatistics expenses={DUMMY_EXPENSES} />
    </main>
  );
};

export default AnalysisExpensePage;
