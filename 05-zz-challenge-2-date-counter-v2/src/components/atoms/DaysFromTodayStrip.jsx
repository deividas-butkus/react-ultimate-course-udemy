const DaysFromTodayStrip = ({ count }) => {
  return (
    <span>
      {/* {Math.abs(count) === 0 && `Today is `}
      {count === 1 && `${count} day from today is `}
      {count === -1 && `${Math.abs(count)} day ago was `}
      {count > 1 && `${count} days from today is `}
      {count < -1 && `${Math.abs(count)} days ago was `} */}

      {count === 0
        ? `Today is `
        : count === 1
        ? `${count} day from today is `
        : count === -1
        ? `${Math.abs(count)} day ago was `
        : count > 1
        ? `${count} days from today is `
        : `${Math.abs(count)} days ago was `}
    </span>
  );
};

export default DaysFromTodayStrip;
