import { useEffect, useState } from "react";

export default App = () => {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    countAdvices();
  }

  const countAdvices = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get advice</button>
      <Message count={count} />
    </div>
  );
};

// const Message = ({ count }) => {
//   return (
//     <p>
//       You have read <strong>{count}</strong> pieces of advice
//     </p>
//   );
// };

const Message = (props) => {
  return (
    <p>
      You have read <strong>{props.count}</strong> pieces of advice
    </p>
  );
};
