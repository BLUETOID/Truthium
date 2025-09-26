import React from 'react';
import { Trophy, Award, Star } from 'lucide-react';

interface QuizResultsProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

const QuizResults: React.FC<QuizResultsProps> = ({
  score,
  totalQuestions,
  onRestart,
}) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  const getResultMessage = () => {
    if (percentage >= 90) {
      return {
        title: 'Myth-Busting Master!',
        message: 'Outstanding! You\'re a true myth-busting expert. Keep spreading facts and fighting misinformation!',
        icon: Trophy,
        color: 'text-yellow-500',
      };
    } else if (percentage >= 70) {
      return {
        title: 'Fact Finder!',
        message: 'Great job! You\'ve got a solid grasp on separating fact from fiction.',
        icon: Award,
        color: 'text-blue-500',
      };
    } else if (percentage >= 50) {
      return {
        title: 'Truth Seeker',
        message: 'Good effort! Keep learning and questioning common beliefs.',
        icon: Star,
        color: 'text-purple-500',
      };
    } else {
      return {
        title: 'Beginner Explorer',
        message: 'Everyone starts somewhere! Keep learning and you\'ll become a myth-busting expert.',
        icon: Star,
        color: 'text-green-500',
      };
    }
  };

  const result = getResultMessage();
  const ResultIcon = result.icon;

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 max-w-2xl mx-auto text-center">
      <div className="mb-8">
        <div className={`w-20 h-20 mx-auto mb-4 ${result.color}`}>
          <ResultIcon size={80} />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          {result.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          {result.message}
        </p>
      </div>

      <div className="mb-8">
        <div className="w-48 h-48 mx-auto relative">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle
              className="text-gray-200 dark:text-gray-700 stroke-current"
              strokeWidth="10"
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
            />
            <circle
              className={`${result.color} stroke-current`}
              strokeWidth="10"
              strokeLinecap="round"
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
              strokeDasharray="251.2"
              strokeDashoffset={251.2 * (1 - percentage / 100)}
              transform="rotate(-90 50 50)"
            />
            <text
              x="50"
              y="50"
              fontFamily="sans-serif"
              fontSize="20"
              textAnchor="middle"
              alignmentBaseline="central"
              className="fill-gray-900 dark:fill-white font-bold"
            >
              {percentage}%
            </text>
          </svg>
        </div>
        
        <p className="text-xl font-medium text-gray-900 dark:text-white mt-4">
          You scored {score} out of {totalQuestions}
        </p>
      </div>

      <div className="space-y-4">
        <button
          onClick={onRestart}
          className="w-full py-3 px-8 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
        >
          Try Again
        </button>
        <button
          onClick={() => window.location.href = '/myths'}
          className="w-full py-3 px-8 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors"
        >
          Learn More Myths
        </button>
      </div>
    </div>
  );
};

export default QuizResults;