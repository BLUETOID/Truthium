import React from 'react';
import { BookOpen, Users, Globe, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Header */}
      <div className="bg-teal-600 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">About Truverse</h1>
            <p className="text-lg text-teal-100">
              Learn more about our mission to combat misinformation and spread factual awareness.
            </p>
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Mission section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Truverse was founded with a simple yet powerful mission: to combat misinformation by making 
              factual information accessible, engaging, and easy to understand. In an age where 
              information spreads faster than ever before, the ability to distinguish fact from fiction 
              has become an essential skill.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              We believe that everyone deserves access to accurate information presented in a way that's 
              both educational and enjoyable. By debunking common myths across various fields like science, 
              health, history, technology, and the environment, we aim to foster critical thinking and 
              promote a more informed society.
            </p>
          </section>
          
          {/* Values section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Accuracy</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  We're committed to thorough research and fact-checking. Every myth and fact on our platform 
                  is carefully vetted and supported by credible sources.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Accessibility</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  We believe knowledge should be accessible to everyone. We strive to present information 
                  in clear, engaging, and jargon-free language.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Education</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  We're passionate about education and lifelong learning. Our content is designed to not just 
                  debunk myths but to help people develop critical thinking skills.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Community</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  We're building a community of curious minds and critical thinkers. We encourage dialogue, 
                  questions, and the sharing of knowledge.
                </p>
              </div>
            </div>
          </section>
          
          {/* Call to action */}
          <section className="bg-blue-600 text-white rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Join Us in Spreading Facts!</h2>
            <p className="text-blue-100 mb-6">
              Whether you're a student, educator, or simply a curious mind, you can help combat 
              misinformation by sharing reliable information and encouraging critical thinking.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/myths"
                className="bg-white text-blue-600 hover:bg-blue-50 py-3 px-6 rounded-lg font-medium transition-colors"
              >
                Explore Myths
              </Link>
              <Link
                to="/quiz"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 py-3 px-6 rounded-lg font-medium transition-colors"
              >
                Take a Quiz
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;