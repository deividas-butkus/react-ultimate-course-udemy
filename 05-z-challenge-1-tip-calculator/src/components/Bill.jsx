const Bill = ({ bill, setBill }) => {
  const handleChange = (e) => {
    setBill(Number(e.target.value));
  };

  return (
    <div>
      <label htmlFor="bill">How much was the bill?</label>
      <input type="text" id="bill" value={bill} onChange={handleChange} />
    </div>
  );
};

export default Bill;
