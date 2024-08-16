const MeasurementStrip = ({ unitName, measurementValue }) => {
  return <span>{`${unitName}: ${measurementValue}`}</span>;
};

export default MeasurementStrip;
