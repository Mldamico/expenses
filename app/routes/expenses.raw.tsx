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
export function loader() {
  return DUMMY_EXPENSES;
}
