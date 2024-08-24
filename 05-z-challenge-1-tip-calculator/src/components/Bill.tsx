type PropsType = {
  bill: number;
  setBill: React.Dispatch<React.SetStateAction<number>>;
};

const Bill = ({ bill, setBill }: PropsType) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
