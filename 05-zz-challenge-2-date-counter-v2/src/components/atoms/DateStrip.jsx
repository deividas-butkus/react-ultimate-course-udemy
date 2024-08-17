const DateStrip = ({ count }) => {
  const calculatedDate = new Date(
    new Date().getTime() + count * 24 * 60 * 60 * 1000
  );
  return <span>{calculatedDate.toDateString()}</span>;
};

export default DateStrip;
