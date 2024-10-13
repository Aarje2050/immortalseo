import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Network, Plus, Trash2, Edit3 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Cluster {
  id: string;
  name: string;
  topics: string[];
}

const TopicalCluster: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [clusters, setClusters] = useState<Cluster[]>([]);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  const parseInput = useCallback(() => {
    return input.split(/[,\n]/).map(query => query.trim()).filter(query => query !== '');
  }, [input]);

  const generateClusters = async () => {
    setLoading(true);
    const queries = parseInput();
    
    // Simulating API call for clustering
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Simple clustering algorithm (for demonstration purposes)
    const clusteredQueries = clusterQueries(queries);
    
    const generatedClusters: Cluster[] = clusteredQueries.map((cluster, index) => ({
      id: `cluster-${index}`,
      name: cluster[0], // Use the first query as the cluster name
      topics: cluster,
    }));

    setClusters(generatedClusters);
    setLoading(false);
  };

  // Simple clustering function (you may want to replace this with a more sophisticated algorithm)
  const clusterQueries = (queries: string[]): string[][] => {
    const clusters: string[][] = [];
    const usedQueries = new Set<string>();

    queries.forEach(query => {
      if (!usedQueries.has(query)) {
        const cluster = [query];
        usedQueries.add(query);

        queries.forEach(otherQuery => {
          if (!usedQueries.has(otherQuery) && areQueriesSimilar(query, otherQuery)) {
            cluster.push(otherQuery);
            usedQueries.add(otherQuery);
          }
        });

        clusters.push(cluster);
      }
    });

    return clusters;
  };

  // Simple similarity check (you may want to use a more advanced method)
  const areQueriesSimilar = (query1: string, query2: string): boolean => {
    const words1 = new Set(query1.toLowerCase().split(' '));
    const words2 = new Set(query2.toLowerCase().split(' '));
    const intersection = new Set([...words1].filter(x => words2.has(x)));
    return intersection.size > 0;
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.header
          className="text-center mb-12"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Topical Cluster Generator</h1>
          <p className="text-xl text-gray-600">Create topical clusters for your content strategy</p>
        </motion.header>

        <motion.div
          className="bg-white rounded-lg shadow-lg p-6 mb-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Enter Your Queries</h2>
          <p className="text-gray-600 mb-4">Enter multiple keywords or queries, separated by commas or new lines.</p>
          <textarea
            value={input}
            onChange={handleInputChange}
            placeholder="Enter your queries here..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-40 resize-none"
          />
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <button
            onClick={generateClusters}
            disabled={loading || input.trim() === ''}
            className={`px-8 py-3 bg-blue-600 text-white rounded-md text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 ${
              loading || input.trim() === '' ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {loading ? 'Generating...' : 'Generate Clusters'}
          </button>
        </motion.div>

        {clusters.length > 0 && (
          <motion.div
            className="mt-12"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-center mb-8">Generated Clusters</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {clusters.map((cluster) => (
                <motion.div
                  key={cluster.id}
                  className="bg-white rounded-lg shadow-lg p-6"
                  whileHover={{ y: -5, boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}
                >
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Network className="mr-2" /> {cluster.name}
                  </h3>
                  <ul className="space-y-2">
                    {cluster.topics.map((topic, index) => (
                      <li key={index} className="flex items-center justify-between">
                        <span>{topic}</span>
                        <Link
                          to={`/content-writer?topic=${encodeURIComponent(topic)}`}
                          className="text-blue-500 hover:text-blue-700"
                        >
                          <Edit3 size={18} />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default TopicalCluster;