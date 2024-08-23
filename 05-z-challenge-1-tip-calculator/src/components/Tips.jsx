const Tips = ({ tips, setTips, children }) => {
  const handleChange = (e) => {
    e.preventDefault();
    setTips(e.target.value);
  };

  return (
    <div>
      <label htmlFor="tips">{children}</label>
      <select type="select" id="tips" value={tips} onChange={handleChange}>
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was OK (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
};

export default Tips;
