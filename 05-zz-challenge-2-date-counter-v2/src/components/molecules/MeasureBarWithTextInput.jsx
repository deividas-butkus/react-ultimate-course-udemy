import Button from "../atoms/Button";

const MeasureBarWithTextInput = ({
  unitName,
  measurementValue,
  setCount,
  onDecrease,
  onIncrease,
}) => {
  const handleChange = (e) => {
    setCount(Number(e.target.value));
  };

  return (
    <div>
      <label htmlFor="count">{unitName}</label>
      <Button btnText="-" bcgColor="#FE0605" onClick={onDecrease} />
      <input
        type="text"
        name="count"
        id="count"
        value={measurementValue}
        onChange={handleChange}
      />
      <Button btnText="+" bcgColor="#0B8001" onClick={onIncrease} />
    </div>
  );
};

export default MeasureBarWithTextInput;
