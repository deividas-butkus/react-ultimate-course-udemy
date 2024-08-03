const Progress = ({
  index,
  numQestions,
  points,
  maxPossiblePoints,
  answer,
}) => {
  return (
    <header className="progress">
      <progress max={numQestions} value={index - 1 + Number(answer !== null)} />
      <p>
        Question <strong>{index}</strong> /{numQestions}
      </p>
      <p>
        <strong>{points} </strong>/ {maxPossiblePoints}
      </p>
    </header>
  );
};

export default Progress;
