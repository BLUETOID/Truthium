import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { Myth } from '../../types';

interface SearchBarProps {
  myths: Myth[];
  onSearch: (results: Myth[]) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ myths, onSearch }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<Myth[]>([]);

  useEffect(() => {
    if (query.length >= 2) {
      const filtered = myths.filter(myth => 
        myth.title.toLowerCase().includes(query.toLowerCase()) ||
        myth.mythText.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 5));
      onSearch(filtered);
    } else {
      setSuggestions([]);
      onSearch(myths);
    }
  }, [query, myths, onSearch]);

  return (
    <div className="relative w-full max-w-xl">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search myths..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
        />
      </div>
      
      {suggestions.length > 0 && (
        <div className="absolute z-10 w-full mt-1 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
          {suggestions.map(myth => (
            <button
              key={myth.id}
              onClick={() => {
                setQuery(myth.title);
                onSearch([myth]);
                setSuggestions([]);
              }}
              className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
            >
              {myth.title}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;