import { useNavigate } from "@remix-run/react";
import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";

const AddExpensePage = () => {
  const navigate = useNavigate();
  const closeHandler = () => {
    navigate("..");
  };
  return (
    <Modal onClose={closeHandler}>
      <ExpenseForm />
    </Modal>
  );
};

export default AddExpensePage;