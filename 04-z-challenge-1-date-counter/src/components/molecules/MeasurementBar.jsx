import Button from "../atoms/Button";
import MeasurementStrip from "../atoms/MeasurementStrip";

const MeasurementBar = ({
  unitName,
  measurementValue,
  onDecrease,
  onIncrease,
}) => {
  return (
    <div>
      <Button btnText="-" bcgColor="#FE0605" onClick={onDecrease} />
      <MeasurementStrip
        unitName={unitName}
        measurementValue={measurementValue}
      />
      <Button btnText="+" bcgColor="#0B8001" onClick={onIncrease} />
    </div>
  );
};

export default MeasurementBar;
