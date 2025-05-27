import { useState } from "react";
import Button from "./Button";

const FormSplitBill = ({ selectedFriend, onSplitBill }) => {
  const [formData, setFormData] = useState({
    billValue: "",
    yourExpense: "",
    whoIsPaying: "",
  });

  const friendExpense =
    formData.billValue && formData.yourExpense
      ? Number(formData.billValue) - Number(formData.yourExpense)
      : "";

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const bill = Number(formData.billValue);
    const yourPart = Number(formData.yourExpense);

    if (!bill || !yourPart || formData.whoIsPaying === "" || yourPart > bill)
      return;

    const paidByFriend = bill - yourPart;

    const value = formData.whoIsPaying === "user" ? paidByFriend : -yourPart;

    onSplitBill(value, selectedFriend.id);
  };

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label htmlFor="billValue">💰Bill value</label>
      <input
        name="billValue"
        id="billValue"
        type="number"
        value={formData.billValue}
        onChange={handleChange}
      />

      <label htmlFor="yourExpense">🫵Your expense</label>
      <input
        name="yourExpense"
        id="yourExpense"
        type="number"
        value={formData.yourExpense}
        onChange={handleChange}
        max={formData.billValue}
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
        onChange={handleChange}
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
