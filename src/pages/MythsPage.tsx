import React, { useState, useMemo } from 'react';
import MythsGrid from '../components/myths/MythsGrid';
import MythsFilter from '../components/myths/MythsFilter';
import { myths } from '../data/myths';

const MythsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  
  // Extract unique categories
  const categories = useMemo(() => {
    return Array.from(new Set(myths.map(myth => myth.category)));
  }, []);
  
  // Filter myths based on search query and selected category
  const filteredMyths = useMemo(() => {
    return myths.filter(myth => {
      const matchesSearch = 
        myth.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        myth.mythText.toLowerCase().includes(searchQuery.toLowerCase()) ||
        myth.factText.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory ? myth.category === selectedCategory : true;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);
  
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      {/* Enhanced Header */}
      <div className="gradient-hero py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/90 to-secondary-600/90" />
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-white/20 text-white text-sm font-medium rounded-full mb-4">
                Knowledge Base
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-shadow leading-tight">Myths Archive</h1>
            <p className="text-lg md:text-xl text-blue-50 max-w-3xl mx-auto leading-relaxed">
              Explore our comprehensive collection of common myths and discover the facts behind them.
              Search by keyword or filter by category to find specific topics that interest you.
            </p>
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="container mx-auto px-4 md:px-6 py-16">
        <MythsFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
        
        {filteredMyths.length > 0 ? (
          <MythsGrid myths={filteredMyths} />
        ) : (
          <div className="text-center py-16">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No myths found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try adjusting your search or filter criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MythsPage;