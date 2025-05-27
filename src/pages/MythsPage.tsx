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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Header */}
      <div className="bg-blue-600 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Myths Archive</h1>
            <p className="text-lg text-blue-100">
              Explore our collection of common myths and discover the facts behind them.
              Search by keyword or filter by category to find specific topics.
            </p>
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="container mx-auto px-4 md:px-6 py-12">
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