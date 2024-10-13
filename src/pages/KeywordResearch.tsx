import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, TrendingUp, BarChart2, ArrowRight } from 'lucide-react';

interface Keyword {
  keyword: string;
  volume: number;
  difficulty: number;
  cpc: number;
}

const KeywordResearch: React.FC = () => {
  const [seed, setSeed] = useState('');
  const [keywords, setKeywords] = useState<Keyword[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulating API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Mock data generation
    const generatedKeywords: Keyword[] = Array.from({ length: 20 }, (_, i) => ({
      keyword: `${seed} ${['tips', 'guide', 'tutorial', 'best', 'top'][Math.floor(Math.random() * 5)]} ${i + 1}`,
      volume: Math.floor(Math.random() * 10000),
      difficulty: Math.floor(Math.random() * 100),
      cpc: Number((Math.random() * 5).toFixed(2)),
    }));

    setKeywords(generatedKeywords);
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
          Keyword Research Tool
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
              value={seed}
              onChange={(e) => setSeed(e.target.value)}
              placeholder="Enter a seed keyword"
              className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-r-md hover:bg-blue-700 transition-colors duration-300"
              disabled={loading}
            >
              {loading ? 'Searching...' : 'Search'}
            </button>
          </div>
        </motion.form>

        {keywords.length > 0 && (
          <motion.div
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Keyword</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Volume</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Difficulty</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CPC</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {keywords.map((keyword, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">{keyword.keyword}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{keyword.volume.toLocaleString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                          <div
                            className="bg-blue-600 rounded-full h-2"
                            style={{ width: `${keyword.difficulty}%` }}
                          ></div>
                        </div>
                        <span>{keyword.difficulty}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">${keyword.cpc}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default KeywordResearch;