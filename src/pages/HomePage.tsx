import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import MythsCarousel from '../components/myths/MythsCarousel';
import { myths } from '../data/myths';

const featuredMyths = myths.filter(myth => myth.isFeatured);
const recentMyths = [...myths].sort((a, b) => 
  new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
).slice(0, 3);

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Unmasking Myths, Unveiling Truths.
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Join us on a journey to discover facts, debunk myths, and cultivate critical thinking.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/myths"
                className="bg-white text-blue-600 hover:bg-blue-50 py-3 px-8 rounded-lg font-medium transition-colors"
              >
                Explore Myths
              </Link>
              <Link
                to="/quiz"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 py-3 px-8 rounded-lg font-medium transition-colors"
              >
                Take a Quiz
              </Link>
            </div>
          </div>
        </div>
        
        {/* Wave SVG at bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160">
            <path
              fill="#fff"
              fillOpacity="1"
              d="M0,128L80,117.3C160,107,320,85,480,90.7C640,96,800,128,960,128C1120,128,1280,96,1360,80L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>
      
      {/* Featured myths section */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 md:px-6">
          <MythsCarousel myths={featuredMyths} title="Featured Myths" />
        </div>
      </section>
      
      {/* Mission statement */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              In a world flooded with information, distinguishing fact from fiction has never been more important. 
              At Truverse, we're dedicated to providing clear, evidence-based explanations that debunk common 
              misconceptions while making learning enjoyable and accessible to everyone.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300"
            >
              Learn more about us <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Latest myths section */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Latest Myths</h2>
              <Link
                to="/myths"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300"
              >
                View all <ArrowRight size={18} className="ml-1" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recentMyths.map((myth) => (
                <div key={myth.id} className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl shadow-sm">
                  <div className="inline-block px-3 py-1 mb-3 text-xs font-semibold text-white bg-blue-600 rounded-full">
                    {myth.category.charAt(0).toUpperCase() + myth.category.slice(1)}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{myth.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 line-clamp-3 mb-4">{myth.mythText}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    Added on {new Date(myth.dateAdded).toLocaleDateString()}
                  </p>
                  <button
                    onClick={() => {}}
                    className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300"
                  >
                    Read more
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to Test Your Knowledge?</h2>
            <p className="text-lg text-blue-100 mb-8">
              Challenge yourself with our myth-busting quiz and see how well you can separate fact from fiction!
            </p>
            <Link
              to="/quiz"
              className="bg-white text-blue-600 hover:bg-blue-50 py-3 px-8 rounded-lg font-medium transition-colors inline-block"
            >
              Take the Quiz
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;