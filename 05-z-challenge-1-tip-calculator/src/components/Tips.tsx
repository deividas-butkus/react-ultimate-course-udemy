type PropsType = {
  tips: number;
  setTips: React.Dispatch<React.SetStateAction<number>>;
  children: React.ReactNode;
};

const Tips = ({ tips, setTips, children }: PropsType) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setTips(Number(e.target.value));
  };

  return (
    <div>
      <label htmlFor="tips">{children}</label>
      <select id="tips" value={tips} onChange={handleChange}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was OK (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
};

export default Tips;
