import DateStrip from "../atoms/DateStrip";
import DaysFromTodayStrip from "../atoms/DaysFromTodayStrip";

const DaysVsDateResultBar = ({ count }) => {
  return (
    <div>
      <DaysFromTodayStrip count={count} />
      <DateStrip count={count} />
    </div>
  );
};

export default DaysVsDateResultBar;
