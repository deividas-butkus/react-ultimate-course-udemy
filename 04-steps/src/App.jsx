import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <>
      <Steps />
    </>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePreviousClick() {
    step > 1 && setStep((prevStep) => prevStep - 1);
  }

  function handleNextClick() {
    step < 3 && setStep((prevStep) => prevStep + 1);
  }

  function handleClose() {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }

  return (
    <div>
      <button className="close" onClick={handleClose}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}> 3</div>
          </div>
          <StepMessage step={step}>
            {messages[step - 1]}

            <div className="buttons">
              <Button
                bgColor="#781616"
                textColor="#fff"
                onClick={() => setStep(1)}
              >
                <span>Start from the beginning</span>
              </Button>
            </div>
          </StepMessage>
          <div className="buttons">
            <Button
              bgColor="#7950f2"
              textColor="#fff"
              onClick={handlePreviousClick}
            >
              <span>👈</span> Previous
            </Button>
            <Button
              bgColor="#7950f2"
              textColor="#fff"
              onClick={handleNextClick}
            >
              Next <span>👉</span>
            </Button>
          </div>
          <Button bgColor="green" textColor="#fff">
            Žalias
          </Button>
          <StepMessage step={1}>
            <p>React is hard, though 🤬</p>
          </StepMessage>
          <StepMessage step={4}>
            <p>Do something else ❌</p>
          </StepMessage>
        </div>
      )}

      <Button bgColor="green" textColor="#fff">
        Žalias
        <h1>laba diena</h1>
        <img src="./" alt="" />
      </Button>
    </div>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
    </div>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
