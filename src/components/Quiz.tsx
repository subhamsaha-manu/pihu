import React, { useState } from 'react';
import questionsData from '../features/questions.json';
import type { QuizData } from '../features/quizModel';

const Quiz: React.FC = () => {
  const data: QuizData = questionsData;
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const question = data.questions[current];

  const handleOptionClick = (option: string) => {
    setSelected(option);
  };

  const handleSubmit = () => {
    if (selected === null) return;
    const correct = selected === question.correctAnswer;
    setIsCorrect(correct);
    setShowFeedback(true);
    if (correct) setScore(s => s + 1);
  };

  const handleNext = () => {
    setShowFeedback(false);
    setSelected(null);
    setIsCorrect(null);
    if (current < data.questions.length - 1) {
      setCurrent(c => c + 1);
    } else {
      setFinished(true);
    }
  };

  if (!data.questions.length) {
    return <div className="text-center text-red-500 mt-10">No questions available.</div>;
  }

  if (finished) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] bg-gradient-to-br from-purple-600 to-blue-400 rounded-xl shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-white mb-4">Quiz Complete!</h2>
        <p className="text-xl text-white mb-2">Your Score: <span className="font-bold">{score} / {data.questions.length}</span></p>
        <button className="mt-4 px-6 py-2 bg-white text-purple-700 font-semibold rounded-lg shadow hover:bg-purple-100 transition" onClick={() => { setCurrent(0); setScore(0); setFinished(false); }}>Restart Quiz</button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] bg-gradient-to-br from-purple-600 to-blue-400 rounded-xl shadow-2xl p-8">
      <h1 className="text-2xl md:text-3xl font-bold text-white mb-6 drop-shadow">{data.quizTitle}</h1>
      <div className="w-full max-w-xl bg-white bg-opacity-90 rounded-lg p-6 shadow-lg">
        <div className="mb-4 text-lg font-semibold text-purple-700">Question {current + 1} of {data.questions.length}</div>
        <div className="mb-6 text-xl font-bold text-gray-800">{question.question}</div>
        <div className="grid gap-4 mb-6">
          {question.options.map((option: string) => (
            <button
              key={option}
              className={`w-full px-4 py-2 rounded-lg border-2 transition font-medium text-lg
                ${selected === option ? 'border-purple-600 bg-purple-100' : 'border-gray-300 bg-white hover:bg-purple-50'}
                ${showFeedback && option === question.correctAnswer ? 'border-green-500 bg-green-100' : ''}
                ${showFeedback && selected === option && !isCorrect ? 'border-red-500 bg-red-100' : ''}
              `}
              disabled={showFeedback}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </button>
          ))}
        </div>
        {!showFeedback && (
          <button
            className="w-full py-2 bg-purple-600 text-white font-bold rounded-lg shadow hover:bg-purple-700 transition disabled:opacity-50"
            onClick={handleSubmit}
            disabled={selected === null}
          >
            Submit
          </button>
        )}
        {showFeedback && (
          <div className="flex flex-col items-center">
            <div className={`mt-4 text-lg font-bold ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>{isCorrect ? 'Correct!' : 'Incorrect!'}</div>
            {!isCorrect && (
              <div className="mt-1 text-gray-700">Correct Answer: <span className="font-semibold">{question.correctAnswer}</span></div>
            )}
            <button
              className="mt-6 w-full py-2 bg-blue-500 text-white font-bold rounded-lg shadow hover:bg-blue-600 transition"
              onClick={handleNext}
            >
              {current === data.questions.length - 1 ? 'Finish' : 'Next'}
            </button>
          </div>
        )}
      </div>
      <div className="mt-6 text-white text-lg">Score: {score}</div>
    </div>
  );
};

export default Quiz;
