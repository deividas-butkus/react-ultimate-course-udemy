import { useState } from "react";
import DaysVsDateResultBar from "../molecules/DaysVsDateResultBar";
import MeasurementBar from "../molecules/MeasurementBar";

const MeasurementArea = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  return (
    <>
      <MeasurementBar
        unitName="Step"
        measurementValue={step}
        onDecrease={() => {
          setStep((prevStep) => prevStep - 1);
        }}
        onIncrease={() => {
          setStep((prevStep) => prevStep + 1);
        }}
      />

      <MeasurementBar
        unitName="Count"
        measurementValue={count}
        onDecrease={() => {
          setCount((prevCount) => prevCount - step);
        }}
        onIncrease={() => {
          setCount((prevCount) => prevCount + step);
        }}
      />
      <DaysVsDateResultBar count={count} />
    </>
  );
};

export default MeasurementArea;
