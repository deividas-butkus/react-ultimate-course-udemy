import { useState } from "react";
import DaysVsDateResultBar from "../molecules/DaysVsDateResultBar";
// import MeasurementBar from "../molecules/MeasurementBar";
import RangeInput from "../molecules/RangeInput";
import Button from "../atoms/Button";
import MeasureBarWithTextInput from "../molecules/MeasureBarWithTextInput";

const MeasurementArea = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  // const [resetVisible, setResetVisible] = useState(false);

  const handleResetBtnClick = () => {
    setStep(1);
    setCount(0);
    // setResetVisible(false);
  };

  return (
    <>
      <RangeInput unitName="Step" measurementValue={step} setStep={setStep} />

      <MeasureBarWithTextInput
        unitName="Count"
        measurementValue={count}
        setCount={setCount}
        onDecrease={() => {
          setCount((prevCount) => prevCount - step);
        }}
        onIncrease={() => {
          setCount((prevCount) => prevCount + step);
        }}
      />

      <DaysVsDateResultBar count={count} />
      {(step !== 1 || count !== 0) && (
        <Button btnText="Reset" onClick={handleResetBtnClick} />
      )}
    </>
  );
};

export default MeasurementArea;
