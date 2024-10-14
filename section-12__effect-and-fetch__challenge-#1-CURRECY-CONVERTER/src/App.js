import { useState, useEffect } from "react";

// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

export default function App() {
  const [input, setInput] = useState("");
  const [currency1, setCurrency1] = useState("");
  const [currency2, setCurrency2] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleCurrency1Change = (e) => {
    setCurrency1(e.target.value);
  };

  const handleCurrency2Change = (e) => {
    setCurrency2(e.target.value);
  };

  useEffect(() => {
    const getExchange = async () => {
      const normalizedInput = Number(input);

      if (currency1 && currency2) {
        if (input.trim() === "" || isNaN(normalizedInput)) {
          setOutput("");
          return;
        } else if (normalizedInput === 0) {
          setOutput(0);
          return;
        } else if (currency1 === currency2) {
          setOutput(Number(input));
        } else {
          try {
            const res = await fetch(
              `https://api.frankfurter.app/latest?amount=${input}&from=${currency1}&to=${currency2}`
            );
            if (!res.ok) throw new Error("Failed to fetch exchange rates");

            const data = await res.json();
            console.log(data);
            setOutput(data.rates[currency2]);
            setError(null);
          } catch (err) {
            setError("Failed to fetch exchange rates", err);
            setOutput("");
          }
        }
      }
    };
    getExchange();
  }, [input, currency1, currency2]);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter amount"
        value={input}
        onChange={handleInputChange}
      />
      <select value={currency1} onChange={handleCurrency1Change}>
        <option value="" disabled>
          Select Currency 1
        </option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select value={currency2} onChange={handleCurrency2Change}>
        <option value="" disabled>
          Select Currency 2
        </option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>
        {output.toLocaleString("en-US", {
          style: "currency",
          currency: currency2,
        })}
      </p>
      {error && <p>{error}</p>}
    </div>
  );
}
