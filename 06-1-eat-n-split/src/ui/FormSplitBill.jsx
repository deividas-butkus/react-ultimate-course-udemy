import Button from "./Button";

const FormSplitBill = ({ selectedFriend }) => {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label htmlFor="billValue">Bill value</label>
      <input name="billValue" id="billValue" type="text" />

      <label htmlFor="yourExpense">Your expense</label>
      <input name="yourExpense" id="yourExpense" type="text" />

      <label htmlFor="friendExpense">X's expense</label>
      <input name="friendExpense" id="friendExpense" type="text" disabled />

      <label htmlFor="who">Who is paying the bill</label>
      <select name="who" id="who" defaultValue="">
        <option value="" disabled>
          Select
        </option>
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>

      <Button type="submit">Split bill</Button>
    </form>
  );
};

export default FormSplitBill;
