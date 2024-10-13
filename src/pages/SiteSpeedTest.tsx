import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Smartphone, Monitor, Clock, Zap, BarChart2 } from 'lucide-react';
import SpeedTestForm from '../components/SpeedTestForm';
import SpeedTestResults from '../components/SpeedTestResults';

const SiteSpeedTest: React.FC = () => {
  const [results, setResults] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (url: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&strategy=mobile&category=performance&category=accessibility&category=best-practices&category=seo`);
      const data = await response.json();
      setResults(data);
    } catch (err) {
      setError('An error occurred while fetching the results. Please try again.');
    } finally {
      setLoading(false);
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
        <motion.header
          className="text-center mb-12"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Site Speed Test</h1>
          <p className="text-xl text-gray-600">Analyze your website's performance and get actionable insights</p>
        </motion.header>

        <motion.div
          className="bg-white rounded-lg shadow-lg overflow-hidden"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="p-8">
            <SpeedTestForm onSubmit={handleSubmit} loading={loading} />

            {error && (
              <motion.div
                className="mt-6 p-4 bg-red-100 text-red-700 rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {error}
              </motion.div>
            )}

            {results && <SpeedTestResults results={results} />}
          </div>
        </motion.div>

        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <FeatureCard
            icon={<Clock className="w-12 h-12 text-blue-500" />}
            title="Core Web Vitals"
            description="Measure and optimize your site's loading, interactivity, and visual stability."
          />
          <FeatureCard
            icon={<Smartphone className="w-12 h-12 text-green-500" />}
            title="Mobile Performance"
            description="Ensure your site performs well on mobile devices for better user experience and SEO."
          />
          <FeatureCard
            icon={<Monitor className="w-12 h-12 text-purple-500" />}
            title="Desktop Performance"
            description="Optimize your site's performance for desktop users to improve conversion rates."
          />
          <FeatureCard
            icon={<Zap className="w-12 h-12 text-yellow-500" />}
            title="Performance Optimization"
            description="Get actionable insights to improve your site's loading speed and efficiency."
          />
          <FeatureCard
            icon={<BarChart2 className="w-12 h-12 text-red-500" />}
            title="Detailed Reports"
            description="Receive comprehensive reports on various aspects of your site's performance."
          />
          <FeatureCard
            icon={<Search className="w-12 h-12 text-indigo-500" />}
            title="SEO Analysis"
            description="Identify SEO improvements to boost your site's search engine rankings."
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <motion.div
    className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center"
    whileHover={{ y: -5, boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}
    transition={{ duration: 0.2 }}
  >
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

export default SiteSpeedTest;