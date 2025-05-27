import React from 'react';
import { QuizQuestion as QuizQuestionType } from '../../data/quizQuestions';

interface QuizQuestionProps {
  question: QuizQuestionType;
  selectedAnswer: boolean | null;
  hasAnswered: boolean;
  onAnswerSelect: (answer: boolean) => void;
  onSubmit: () => void;
  onNextQuestion: () => void;
  isLastQuestion: boolean;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  selectedAnswer,
  hasAnswered,
  onAnswerSelect,
  onSubmit,
  onNextQuestion,
  isLastQuestion,
}) => {
  const getMythButtonClasses = () => {
    if (!hasAnswered && selectedAnswer === true) {
      return 'bg-purple-100 dark:bg-purple-900/30 border-2 border-purple-600 text-purple-600 dark:text-purple-400';
    }

    if (hasAnswered) {
      if (question.isMyth) {
        return 'bg-green-600 border-2 border-green-600 text-white';
      }
      if (selectedAnswer === true) {
        return 'bg-red-600 border-2 border-red-600 text-white';
      }
    }

    return 'bg-white dark:bg-gray-800 border-2 border-purple-600 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-gray-700';
  };

  const getFactButtonClasses = () => {
    if (!hasAnswered && selectedAnswer === false) {
      return 'bg-teal-100 dark:bg-teal-900/30 border-2 border-teal-600 text-teal-600 dark:text-teal-400';
    }

    if (hasAnswered) {
      if (!question.isMyth) {
        return 'bg-green-600 border-2 border-green-600 text-white';
      }
      if (selectedAnswer === false) {
        return 'bg-red-600 border-2 border-red-600 text-white';
      }
    }

    return 'bg-white dark:bg-gray-800 border-2 border-teal-600 text-teal-600 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-gray-700';
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 md:p-8 max-w-2xl mx-auto">
      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6">
        {question.statement}
      </h3>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <button
          onClick={() => onAnswerSelect(true)}
          disabled={hasAnswered}
          className={`py-3 px-6 rounded-lg font-medium transition-colors ${getMythButtonClasses()}`}
        >
          Myth
        </button>

        <button
          onClick={() => onAnswerSelect(false)}
          disabled={hasAnswered}
          className={`py-3 px-6 rounded-lg font-medium transition-colors ${getFactButtonClasses()}`}
        >
          Fact
        </button>
      </div>

      {!hasAnswered && selectedAnswer !== null && (
        <button
          onClick={onSubmit}
          className="w-full py-3 px-6 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors mb-6"
        >
          Submit Answer
        </button>
      )}

      {hasAnswered && (
        <>
          <div
            className={`p-4 rounded-lg mb-6 ${
              selectedAnswer === question.isMyth
                ? 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200'
                : 'bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-200'
            }`}
          >
            <p className="font-medium mb-2">
              {selectedAnswer === question.isMyth
                ? '✓ Correct!'
                : '✗ Incorrect!'}
            </p>
            <p>{question.explanation}</p>
          </div>

          <button
            onClick={onNextQuestion}
            className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            {isLastQuestion ? 'See Your Results' : 'Next Question'}
          </button>
        </>
      )}
    </div>
  );
};

export default QuizQuestion;
