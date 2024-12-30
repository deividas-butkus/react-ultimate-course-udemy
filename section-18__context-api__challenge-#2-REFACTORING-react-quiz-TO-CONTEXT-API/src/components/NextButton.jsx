import useQuiz from "../contexts/useQuiz";

const NextButton = () => {
  const { dispatch, answer, index, numQuestions } = useQuiz();

  if (index < numQuestions - 1)
    return answer === null ? null : (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );

  if (index === numQuestions - 1)
    return answer === null ? null : (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
};

export default NextButton;
