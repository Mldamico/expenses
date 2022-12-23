import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";

const ExpensePage = () => {
  return (
    <Modal onClose={() => {}}>
      <ExpenseForm />
    </Modal>
  );
};

export default ExpensePage;
