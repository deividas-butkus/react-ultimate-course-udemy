const RangeInput = ({ unitName, measurementValue, setStep }) => {
  const handleChange = (e) => {
    setStep(Number(e.target.value));
  };

  return (
    <div>
      <label htmlFor="step">{unitName + " "}</label>
      <input
        type="range"
        name="step"
        id="step"
        max={10}
        value={measurementValue}
        onChange={handleChange}
      />
      <span>{measurementValue}</span>
    </div>
  );
};

export default RangeInput;
