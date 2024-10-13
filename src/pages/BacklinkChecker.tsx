import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, Link, ExternalLink, BarChart2 } from 'lucide-react';

interface Backlink {
  sourceUrl: string;
  targetUrl: string;
  anchorText: string;
  domainAuthority: number;
}

const BacklinkChecker: React.FC = () => {
  const [url, setUrl] = useState('');
  const [backlinks, setBacklinks] = useState<Backlink[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulating API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Mock data generation
    const generatedBacklinks: Backlink[] = Array.from({ length: 10 }, (_, i) => ({
      sourceUrl: `https://example${i + 1}.com/page-linking-to-you`,
      targetUrl: url,
      anchorText: ['Click here', 'Read more', 'Learn about', 'Discover', 'Find out'][Math.floor(Math.random() * 5)],
      domainAuthority: Math.floor(Math.random() * 100),
    }));

    setBacklinks(generatedBacklinks);
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
          Backlink Checker
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
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter a URL to check backlinks"
              className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-r-md hover:bg-blue-700 transition-colors duration-300"
              disabled={loading}
            >
              {loading ? 'Checking...' : 'Check Backlinks'}
            </button>
          </div>
        </motion.form>

        {backlinks.length > 0 && (
          <motion.div
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Source URL</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Anchor Text</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Domain Authority</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {backlinks.map((backlink, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <a href={backlink.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center">
                        {backlink.sourceUrl.length > 30 ? backlink.sourceUrl.substring(0, 30) + '...' : backlink.sourceUrl}
                        <ExternalLink size={14} className="ml-1" />
                      </a>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{backlink.anchorText}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                          <div
                            className="bg-blue-600 rounded-full h-2"
                            style={{ width: `${backlink.domainAuthority}%` }}
                          ></div>
                        </div>
                        <span>{backlink.domainAuthority}</span>
                      </div>
                    </td>
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

export default BacklinkChecker;