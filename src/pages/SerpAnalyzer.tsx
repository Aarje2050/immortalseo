import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Globe, BarChart2, ArrowUp, ArrowDown } from 'lucide-react';

interface SerpResult {
  title: string;
  url: string;
  description: string;
  position: number;
}

const SerpAnalyzer: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SerpResult[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulating API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Mock data generation
    const generatedResults: SerpResult[] = Array.from({ length: 10 }, (_, i) => ({
      title: `${query} - Result ${i + 1}`,
      url: `https://example${i + 1}.com/${query.toLowerCase().replace(/\s+/g, '-')}`,
      description: `This is a sample description for the search result about ${query}. It provides a brief overview of the content found on the page.`,
      position: i + 1,
    }));

    setResults(generatedResults);
    setLoading(false);
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl font-bold text-center mb-8"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          SERP Analyzer
        </motion.h1>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg shadow-lg p-6 mb-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex items-center">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Enter a search query"
              className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-r-md hover:bg-blue-700 transition-colors duration-300"
              disabled={loading}
            >
              {loading ? 'Analyzing...' : 'Analyze'}
            </button>
          </div>
        </motion.form>

        {results.length > 0 && (
          <motion.div
            className="space-y-6"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {results.map((result, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-xl font-semibold text-blue-600">{result.title}</h2>
                  <span className="text-sm font-medium text-gray-500">Position: {result.position}</span>
                </div>
                <a href={result.url} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline mb-2 block">
                  {result.url}
                </a>
                <p className="text-gray-600">{result.description}</p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default SerpAnalyzer;