import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, AlertTriangle, Search, Zap, FileText, Globe, BarChart2 } from 'lucide-react';

interface AuditResult {
  category: string;
  items: {
    name: string;
    status: 'success' | 'warning' | 'error';
    description: string;
  }[];
}

const SeoAudit: React.FC = () => {
  const [url, setUrl] = useState('');
  const [auditResults, setAuditResults] = useState<AuditResult[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulating API call
    await new Promise(resolve => setTimeout(resolve, 3000));

    // Mock data generation
    const generatedResults: AuditResult[] = [
      {
        category: 'On-Page SEO',
        items: [
          {
            name: 'Title Tag',
            status: Math.random() > 0.7 ? 'success' : Math.random() > 0.3 ? 'warning' : 'error',
            description: 'The title tag is properly optimized.',
          },
          {
            name: 'Meta Description',
            status: Math.random() > 0.7 ? 'success' : Math.random() > 0.3 ? 'warning' : 'error',
            description: 'The meta description is present and well-written.',
          },
          {
            name: 'Header Tags',
            status: Math.random() > 0.7 ? 'success' : Math.random() > 0.3 ? 'warning' : 'error',
            description: 'Header tags are used correctly throughout the page.',
          },
        ],
      },
      {
        category: 'Technical SEO',
        items: [
          {
            name: 'SSL Certificate',
            status: Math.random() > 0.7 ? 'success' : Math.random() > 0.3 ? 'warning' : 'error',
            description: 'The website has a valid SSL certificate.',
          },
          {
            name: 'Mobile Responsiveness',
            status: Math.random() > 0.7 ? 'success' : Math.random() > 0.3 ? 'warning' : 'error',
            description: 'The website is mobile-friendly.',
          },
          {
            name: 'Page Speed',
            status: Math.random() > 0.7 ? 'success' : Math.random() > 0.3 ? 'warning' : 'error',
            description: 'The page loads quickly on both desktop and mobile.',
          },
        ],
      },
      {
        category: 'Content',
        items: [
          {
            name: 'Keyword Usage',
            status: Math.random() > 0.7 ? 'success' : Math.random() > 0.3 ? 'warning' : 'error',
            description: 'Keywords are used naturally throughout the content.',
          },
          {
            name: 'Content Length',
            status: Math.random() > 0.7 ? 'success' : Math.random() > 0.3 ? 'warning' : 'error',
            description: 'The content is of sufficient length for the topic.',
          },
          {
            name: 'Image Optimization',
            status: Math.random() > 0.7 ? 'success' : Math.random() > 0.3 ? 'warning' : 'error',
            description: 'Images have appropriate alt text and are optimized.',
          },
        ],
      },
    ];

    setAuditResults(generatedResults);
    setLoading(false);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success':
        return <CheckCircle className="w-6 h-6 text-green-500" />;
      case 'warning':
        return <AlertTriangle className="w-6 h-6 text-yellow-500" />;
      case 'error':
        return <XCircle className="w-6 h-6 text-red-500" />;
      default:
        return null;
    }
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
          SEO Audit Tool
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
              placeholder="Enter a website URL to audit"
              className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-r-md hover:bg-blue-700 transition-colors duration-300"
              disabled={loading}
            >
              {loading ? 'Auditing...' : 'Run Audit'}
            </button>
          </div>
        </motion.form>

        {auditResults.length > 0 && (
          <motion.div
            className="space-y-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {auditResults.map((category, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <h2 className="text-2xl font-semibold mb-4">{category.category}</h2>
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        {getStatusIcon(item.status)}
                      </div>
                      <div className="ml-3">
                        <h3 className="text-lg font-medium">{item.name}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default SeoAudit;