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
      <section className="relative gradient-hero py-24 md:py-32 overflow-hidden">
        {/* Enhanced background with subtle pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/95 via-primary-700/90 to-secondary-600/95" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight text-shadow">
              Unmasking Myths,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-100">
                Unveiling Truths
              </span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-10 text-blue-50 max-w-3xl mx-auto leading-relaxed">
              Join us on a journey to discover facts, debunk myths, and cultivate critical thinking in an age of information overload.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
              <Link
                to="/myths"
                className="btn-primary bg-white text-primary-700 hover:bg-neutral-50 hover:text-primary-800 shadow-premium"
              >
                Explore Myths
              </Link>
              <Link
                to="/quiz"
                className="bg-transparent border-2 border-white/80 text-white hover:bg-white/10 hover:border-white py-3 px-8 rounded-xl font-medium transition-all duration-200"
              >
                Take a Quiz
              </Link>
            </div>
          </div>
        </div>
        
        {/* Elegant wave transition */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160" className="fill-current text-white dark:text-neutral-950">
            <path d="M0,128L80,117.3C160,107,320,85,480,90.7C640,96,800,128,960,128C1120,128,1280,96,1360,80L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" />
          </svg>
        </div>
      </section>
      
      {/* Featured myths section */}
      <section className="py-20 bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-4 md:px-6">
          <MythsCarousel myths={featuredMyths} title="Featured Myths" />
        </div>
      </section>
      
      {/* Mission statement */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium rounded-full mb-4">
                Our Mission
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-8 leading-tight">
              Distinguishing Fact from Fiction in the Information Age
            </h2>
            <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 mb-10 leading-relaxed">
              In a world flooded with information, distinguishing fact from fiction has never been more important. 
              At Truthium, we're dedicated to providing clear, evidence-based explanations that debunk common 
              misconceptions while making learning enjoyable and accessible to everyone.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center btn-secondary group"
            >
              Learn more about us 
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Latest myths section */}
      <section className="py-20 bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-2">Latest Myths</h2>
                <p className="text-neutral-600 dark:text-neutral-400">Recently added to our collection</p>
              </div>
              <Link
                to="/myths"
                className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 group"
              >
                View all 
                <ArrowRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {recentMyths.map((myth, index) => (
                <div key={myth.id} className={`card hover:shadow-card-elevated transition-all duration-300 p-8 group ${
                  index === 0 ? 'animate-slide-up' : index === 1 ? 'animate-slide-up animation-delay-100' : 'animate-slide-up animation-delay-200'
                }`} style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-primary-700 dark:text-primary-300 bg-primary-100 dark:bg-primary-900/30 rounded-full">
                      {myth.category.charAt(0).toUpperCase() + myth.category.slice(1)}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-neutral-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">{myth.title}</h3>
                  <p className="text-neutral-700 dark:text-neutral-300 line-clamp-3 mb-4 leading-relaxed">{myth.mythText}</p>
                  <div className="flex items-center justify-between pt-4 mt-4 border-t border-neutral-100 dark:border-neutral-800">
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                      {new Date(myth.dateAdded).toLocaleDateString('en-US', { 
                        month: 'long', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}
                    </p>
                    <button
                      onClick={() => {}}
                      className="text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 text-sm group-hover:underline"
                    >
                      Read more
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      {/* Call to action section */}
      <section className="py-20 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/90 to-secondary-600/90" />
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='20' cy='20' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-shadow">Ready to Test Your Knowledge?</h2>
            <p className="text-lg md:text-xl text-blue-50 mb-10 leading-relaxed max-w-3xl mx-auto">
              Challenge yourself with our myth-busting quiz and see how well you can separate fact from fiction! 
              Put your critical thinking skills to the test.
            </p>
            <Link
              to="/quiz"
              className="btn-primary bg-white text-primary-700 hover:bg-neutral-50 hover:text-primary-800 shadow-premium inline-flex items-center group"
            >
              Take the Quiz
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;