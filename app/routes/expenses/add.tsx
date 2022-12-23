import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";

const AddExpensePage = () => {
  return (
    <Modal onClose={() => {}}>
      <ExpenseForm />
    </Modal>
  );
};

export default AddExpensePage;
