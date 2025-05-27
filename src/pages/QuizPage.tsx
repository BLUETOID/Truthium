import React, { useState } from 'react';

export interface QuizQuestion {
  id: string;
  statement: string;
  isMyth: boolean;
  explanation: string;
  category: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: '1',
    statement: 'Humans only use 10% of their brain.',
    isMyth: true,
    explanation:
      'This is a myth. Brain scans clearly show activity throughout the entire brain, even during sleep. Different activities activate different parts of the brain, but over the course of a day, virtually all brain regions are used.',
    category: 'science',
  },
  {
    id: '2',
    statement: 'Sharks can get cancer.',
    isMyth: false,
    explanation:
      "This is a fact. Despite popular belief that sharks don't get cancer, they can and do develop tumors and cancers. The myth was perpetuated to sell shark cartilage supplements.",
    category: 'science',
  },
  {
    id: '3',
    statement: 'Eating carrots improves your night vision.',
    isMyth: true,
    explanation:
      "This is a myth. While carrots contain vitamin A which is essential for eye health, eating extra carrots won't give you super night vision. This myth originated from British propaganda during WWII to hide their radar technology.",
    category: 'health',
  },
  {
    id: '4',
    statement: 'Lightning never strikes the same place twice.',
    isMyth: true,
    explanation:
      'This is a myth. Lightning can and often does strike the same place multiple times. The Empire State Building gets struck about 25 times per year!',
    category: 'science',
  },
  {
    id: '5',
    statement: 'Different parts of your tongue detect different tastes.',
    isMyth: true,
    explanation:
      'This is a myth. The "tongue map" showing sweet, sour, salty, and bitter regions is incorrect. All taste buds can detect all taste sensations, though sensitivity varies slightly.',
    category: 'science',
  },
  {
    id: '6',
    statement: 'The Great Wall of China is visible from space.',
    isMyth: true,
    explanation:
      'This is a myth. Astronauts have confirmed that the Great Wall of China is not visible from space with the naked eye, contrary to popular belief.',
    category: 'history',
  },
  {
    id: '7',
    statement: 'You lose most of your body heat through your head.',
    isMyth: true,
    explanation:
      "This is a myth. You lose heat through any exposed part of your body. The head isn't special in this regard - you lose about the same percentage of heat through any exposed body part.",
    category: 'health',
  },
  {
    id: '8',
    statement: 'Antibiotics can treat viral infections.',
    isMyth: true,
    explanation:
      'This is a myth. Antibiotics only work against bacterial infections, not viral infections like the common cold or flu. Using antibiotics for viral infections contributes to antibiotic resistance.',
    category: 'health',
  },
  {
    id: '9',
    statement: 'The Earth has a molten iron core.',
    isMyth: false,
    explanation:
      "This is a fact. The Earth's core is indeed made primarily of iron, with an inner solid core and an outer liquid core. This creates Earth's magnetic field.",
    category: 'science',
  },
  {
    id: '10',
    statement: 'Cracking your knuckles causes arthritis.',
    isMyth: true,
    explanation:
      'This is a myth. Studies have shown no connection between knuckle cracking and arthritis. The sound comes from gas bubbles in the joint fluid, not from damage to the joints.',
    category: 'health',
  },
  {
    id: '11',
    statement: 'Lightning never strikes the same place twice.',
    isMyth: true,
    explanation:
      'This is a myth. Lightning frequently strikes tall structures repeatedly. The Empire State Building gets struck about 25 times per year.',
    category: 'physics',
  },
  {
    id: '12',
    statement: 'Bats are blind.',
    isMyth: true,
    explanation:
      'This is a myth. While bats use echolocation to navigate, they can see perfectly well. Some species even have excellent vision.',
    category: 'science',
  },
  {
    id: '13',
    statement: 'The five-second rule makes dropped food safe to eat.',
    isMyth: true,
    explanation:
      'This is a myth. Bacteria can contaminate food instantly upon contact with surfaces.',
    category: 'science',
  },
  {
    id: '14',
    statement: 'Chameleons change color to blend with their environment.',
    isMyth: true,
    explanation:
      "This is partially a myth. While they can change color, it's primarily for temperature regulation and communication, not camouflage.",
    category: 'science',
  },
  {
    id: '15',
    statement: 'You should drink at least 8 glasses of water daily.',
    isMyth: true,
    explanation:
      'This is a myth. Water needs vary by individual, and fluids from food and other beverages also count toward hydration.',
    category: 'health',
  },
  {
    id: '16',
    statement: 'Reading in dim light ruins your eyesight.',
    isMyth: true,
    explanation:
      "This is a myth. While it may cause temporary eye strain, it doesn't cause permanent damage.",
    category: 'health',
  },
  {
    id: '17',
    statement: 'Sugar causes hyperactivity in children.',
    isMyth: true,
    explanation:
      'This is a myth. Multiple studies have found no link between sugar and hyperactivity.',
    category: 'health',
  },
  {
    id: '18',
    statement: 'Napoleon Bonaparte was unusually short.',
    isMyth: true,
    explanation:
      'This is a myth. At 5\'7", he was actually slightly taller than the average Frenchman of his time.',
    category: 'history',
  },
  {
    id: '19',
    statement: 'The Titanic was advertised as "unsinkable".',
    isMyth: true,
    explanation:
      'This is a myth. While considered very safe, the White Star Line never actually claimed it was unsinkable.',
    category: 'history',
  },
  {
    id: '20',
    statement: 'Columbus proved the Earth was round.',
    isMyth: true,
    explanation:
      'This is a myth. Educated people had known the Earth was round for centuries before Columbus.',
    category: 'history',
  },
  {
    id: '21',
    statement: 'Ostriches bury their heads in the sand.',
    isMyth: true,
    explanation:
      'This is a myth. Ostriches never do this - they sometimes lower their heads to eat or dig nests.',
    category: 'science',
  },
  {
    id: '22',
    statement: 'Lemmings commit mass suicide.',
    isMyth: true,
    explanation:
      'This is a myth. The misconception came from a staged Disney documentary where lemmings were pushed off a cliff.',
    category: 'science',
  },
  {
    id: '23',
    statement: 'Daddy longlegs are the most venomous spiders.',
    isMyth: true,
    explanation:
      "This is a myth. They're not true spiders, and their venom is harmless to humans.",
    category: 'science',
  },
  {
    id: '24',
    statement: 'MSG causes headaches.',
    isMyth: true,
    explanation:
      'This is a myth. Numerous studies have found no consistent evidence that MSG causes adverse effects.',
    category: 'health',
  },
  {
    id: '25',
    statement: 'Caramel is made by burning sugar.',
    isMyth: true,
    explanation:
      'This is a myth. Caramelization is a complex chemical process that occurs when sugar is heated to about 170°C (340°F), not burned.',
    category: 'science',
  },
  {
    id: '26',
    statement: 'More megapixels means a better camera.',
    isMyth: true,
    explanation:
      'This is a myth. Sensor size, lens quality, and pixel size matter more than megapixel count alone.',
    category: 'science',
  },
  {
    id: '27',
    statement: "Mac computers can't get viruses.",
    isMyth: true,
    explanation:
      'This is a myth. While less common, Macs are still vulnerable to malware and viruses.',
    category: 'science',
  },
  {
    id: '28',
    statement: 'Hair and nails continue growing after death.',
    isMyth: true,
    explanation:
      'This is a myth. The skin dehydrates and retracts, making them appear longer.',
    category: 'science',
  },
  {
    id: '29',
    statement: 'You swallow 8 spiders per year in your sleep.',
    isMyth: true,
    explanation:
      'This is a complete myth with no scientific basis, originally spread as an example of how misinformation spreads online.',
    category: 'health',
  },
  {
    id: '30',
    statement: "The Moon's dark side never sees sunlight.",
    isMyth: true,
    explanation:
      'This is a myth. The "dark side" simply means the side facing away from Earth - it gets just as much sunlight as the near side.',
    category: 'science',
  },
  {
    id: '31',
    statement: 'The Sun is yellow.',
    isMyth: true,
    explanation:
      "This is a myth. The Sun is actually white - it appears yellow through Earth's atmosphere due to Rayleigh scattering.",
    category: 'science',
  },
  {
    id: '32',
    statement: 'People only use 10% of their brains.',
    isMyth: true,
    explanation:
      'This is a myth. Brain scans show activity throughout the entire brain, even during sleep.',
    category: 'science',
  },
  {
    id: '33',
    statement: 'Opposites attract in relationships.',
    isMyth: true,
    explanation:
      'This is largely a myth. Research shows people tend to be attracted to those with similar personalities and values.',
    category: 'science',
  },
];

const QuizPage: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleAnswer = (answer: boolean) => {
    const isCorrect = answer === quizQuestions[currentQuestionIndex].isMyth;
    if (isCorrect) {
      setScore(score + 1);
    }
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    setShowExplanation(false);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowExplanation(false);
  };

  const currentQuestion = quizQuestions[currentQuestionIndex];

  if (currentQuestionIndex >= quizQuestions.length) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-8">
          <h2 className="text-2xl font-bold text-center mb-6">Quiz Complete!</h2>
          <p className="text-xl text-center mb-8">
            Your score: {score} out of {quizQuestions.length}
          </p>
          <div className="flex justify-center">
            <button
              onClick={resetQuiz}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-8">
        <div className="text-center mb-8">
          <p className="text-sm text-gray-500">
            Question {currentQuestionIndex + 1} of {quizQuestions.length}
          </p>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
            <div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{
                width: `${((currentQuestionIndex + 1) / quizQuestions.length) * 100}%`,
              }}
            ></div>
          </div>
        </div>

        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          {currentQuestion.statement}
        </h2>

        {!showExplanation ? (
          <div className="space-y-4">
            <button
              onClick={() => handleAnswer(true)}
              className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-4 rounded"
            >
              Myth
            </button>
            <button
              onClick={() => handleAnswer(false)}
              className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-4 rounded"
            >
              Fact
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">{currentQuestion.explanation}</p>
            </div>
            <button
              onClick={nextQuestion}
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded"
            >
              Next Question
            </button>
          </div>
        )}

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Current Score: {score} / {currentQuestionIndex + 1}
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;