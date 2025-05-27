import { useState } from "react";
import Button from "./Button";

const FormSplitBill = ({ selectedFriend }) => {
  const [formData, setFormData] = useState({
    billValue: "",
    yourExpense: "",
    whoIsPaying: "",
  });

  const friendExpense =
    formData.billValue && formData.yourExpense
      ? Number(formData.billValue) - Number(formData.yourExpense)
      : "";

  const handleDChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form className="form-split-bill">
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label htmlFor="billValue">💰Bill value</label>
      <input
        name="billValue"
        id="billValue"
        type="number"
        value={formData.billValue}
        onChange={handleDChange}
      />

      <label htmlFor="yourExpense">🫵Your expense</label>
      <input
        name="yourExpense"
        id="yourExpense"
        type="number"
        value={formData.yourExppense}
        onChange={handleDChange}
      />

      <label htmlFor="friendExpense">🤝{selectedFriend.name}'s expense</label>
      <input
        name="friendExpense"
        id="friendExpense"
        type="number"
        value={friendExpense}
        disabled
      />

      <label htmlFor="whoIsPaying">❓Who is paying the bill</label>
      <select
        name="whoIsPaying"
        id="whoIsPaying"
        value={formData.whoIsPaying}
        onChange={handleDChange}
      >
        <option value="" disabled>
          Select
        </option>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button type="submit">Split bill</Button>
    </form>
  );
};

export default FormSplitBill;
