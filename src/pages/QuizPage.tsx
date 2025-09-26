import React, { useState, useEffect } from 'react';
import { Brain, Clock, Target } from 'lucide-react';
import QuizQuestion from '../components/quiz/QuizQuestion';
import QuizResults from '../components/quiz/QuizResults';
import { quizQuestions, QuizQuestion as QuizQuestionType } from '../data/quizQuestions';

const QuizPage: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);

  // Randomize questions for better replayability
  const [shuffledQuestions, setShuffledQuestions] = useState<QuizQuestionType[]>([]);

  useEffect(() => {
    // Shuffle questions when component mounts
    const shuffled = [...quizQuestions].sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled.slice(0, 10)); // Take only 10 random questions
  }, []);

  const handleAnswerSelect = (answer: boolean) => {
    if (!hasAnswered) {
      setSelectedAnswer(answer);
    }
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer !== null) {
      const isCorrect = selectedAnswer === shuffledQuestions[currentQuestionIndex].isMyth;
      if (isCorrect) {
        setScore(score + 1);
      }
      setHasAnswered(true);
    }
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setHasAnswered(false);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handleStartQuiz = () => {
    setQuizStarted(true);
    setStartTime(Date.now());
  };

  const resetQuiz = () => {
    const shuffled = [...quizQuestions].sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled.slice(0, 10));
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setHasAnswered(false);
    setQuizStarted(false);
    setStartTime(null);
  };

  const getTotalQuestions = () => shuffledQuestions.length;
  const getProgressPercentage = () => 
    getTotalQuestions() > 0 ? ((currentQuestionIndex + 1) / getTotalQuestions()) * 100 : 0;

  // Loading state while questions are being shuffled
  if (shuffledQuestions.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <Brain className="mx-auto h-12 w-12 text-blue-600 dark:text-blue-400 animate-pulse mb-4" />
          <p className="text-gray-600 dark:text-gray-400">Loading your quiz...</p>
        </div>
      </div>
    );
  }

  // Quiz intro screen
  if (!quizStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 md:p-12 text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Brain className="h-10 w-10 text-white" />
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Myth-Busting Quiz Challenge
            </h1>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Test your knowledge and separate fact from fiction! This quiz features {getTotalQuestions()} carefully 
              selected questions designed to challenge common misconceptions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white">
                <Target className="h-8 w-8 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">{getTotalQuestions()} Questions</h3>
                <p className="text-blue-100 text-sm">Curated myths & facts</p>
              </div>
              
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-6 text-white">
                <Clock className="h-8 w-8 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">No Time Limit</h3>
                <p className="text-purple-100 text-sm">Take your time to think</p>
              </div>
              
              <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white">
                <Brain className="h-8 w-8 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Learn & Grow</h3>
                <p className="text-green-100 text-sm">Detailed explanations</p>
              </div>
            </div>

            <button
              onClick={handleStartQuiz}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Start Quiz Challenge
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Quiz completed - show results
  if (currentQuestionIndex >= getTotalQuestions()) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
        <QuizResults
          score={score}
          totalQuestions={getTotalQuestions()}
          onRestart={resetQuiz}
        />
      </div>
    );
  }

  const currentQuestion = shuffledQuestions[currentQuestionIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Enhanced Progress Header */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                Myth-Busting Quiz
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Question {currentQuestionIndex + 1} of {getTotalQuestions()}
              </p>
            </div>
            <div className="mt-4 md:mt-0 text-right">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Current Score</p>
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {score}/{currentQuestionIndex + (hasAnswered ? 1 : 0)}
              </p>
            </div>
          </div>

          {/* Enhanced Progress Bar */}
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-2">
            <div
              className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full transition-all duration-500 ease-out"
              style={{
                width: `${getProgressPercentage()}%`,
              }}
            ></div>
          </div>
          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
            <span>Progress: {Math.round(getProgressPercentage())}%</span>
            <span>{getTotalQuestions() - currentQuestionIndex} remaining</span>
          </div>
        </div>

        {/* Category Badge */}
        <div className="mb-6 flex justify-center">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 capitalize">
            {currentQuestion.category}
          </span>
        </div>

        {/* Quiz Question Component */}
        <QuizQuestion
          question={currentQuestion}
          selectedAnswer={selectedAnswer}
          hasAnswered={hasAnswered}
          onAnswerSelect={handleAnswerSelect}
          onSubmit={handleSubmitAnswer}
          onNextQuestion={handleNextQuestion}
          isLastQuestion={currentQuestionIndex === getTotalQuestions() - 1}
        />
      </div>
    </div>
  );
};

export default QuizPage;