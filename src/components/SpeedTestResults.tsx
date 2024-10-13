import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Monitor, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';

interface SpeedTestResultsProps {
  results: any;
}

const SpeedTestResults: React.FC<SpeedTestResultsProps> = ({ results }) => {
  const { lighthouseResult } = results;
  const { categories, audits } = lighthouseResult;

  const getCategoryScore = (categoryName: string) => {
    return Math.round((categories[categoryName]?.score || 0) * 100);
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-500';
    if (score >= 50) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getScoreIcon = (score: number) => {
    if (score >= 90) return <CheckCircle className="w-6 h-6 text-green-500" />;
    if (score >= 50) return <AlertTriangle className="w-6 h-6 text-yellow-500" />;
    return <XCircle className="w-6 h-6 text-red-500" />;
  };

  const formatBytes = (bytes: number) => {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) return '0 Byte';
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)).toString());
    return Math.round((bytes / Math.pow(1024, i)) * 100) / 100 + ' ' + sizes[i];
  };

  const renderOpportunities = () => {
    if (!audits['opportunities'] || !audits['opportunities'].details || !audits['opportunities'].details.items) {
      return <p>No optimization opportunities found.</p>;
    }

    return (
      <ul className="space-y-4">
        {audits['opportunities'].details.items.map((item: any, index: number) => (
          <li key={index} className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <AlertTriangle className="w-5 h-5 text-yellow-500" />
            </div>
            <div className="ml-3">
              <p className="font-medium">{item.title}</p>
              <p className="text-sm text-gray-600">{item.description}</p>
              {item.overallSavingsMs && (
                <p className="text-sm text-green-600">
                  Potential savings: {item.overallSavingsMs.toFixed(2)}ms
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <motion.div
      className="mt-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-6">Speed Test Results</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <ScoreCard
          title="Performance"
          score={getCategoryScore('performance')}
          icon={getScoreIcon(getCategoryScore('performance'))}
        />
        <ScoreCard
          title="Accessibility"
          score={getCategoryScore('accessibility')}
          icon={getScoreIcon(getCategoryScore('accessibility'))}
        />
        <ScoreCard
          title="Best Practices"
          score={getCategoryScore('best-practices')}
          icon={getScoreIcon(getCategoryScore('best-practices'))}
        />
        <ScoreCard
          title="SEO"
          score={getCategoryScore('seo')}
          icon={getScoreIcon(getCategoryScore('seo'))}
        />
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h3 className="text-xl font-semibold mb-4">Core Web Vitals</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <MetricCard
            title="Largest Contentful Paint (LCP)"
            value={audits['largest-contentful-paint']?.displayValue || 'N/A'}
            description={audits['largest-contentful-paint']?.description || ''}
          />
          <MetricCard
            title="First Input Delay (FID)"
            value={audits['max-potential-fid']?.displayValue || 'N/A'}
            description={audits['max-potential-fid']?.description || ''}
          />
          <MetricCard
            title="Cumulative Layout Shift (CLS)"
            value={audits['cumulative-layout-shift']?.displayValue || 'N/A'}
            description={audits['cumulative-layout-shift']?.description || ''}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <Smartphone className="mr-2" /> Mobile Performance
          </h3>
          <ul className="space-y-2">
            <li>First Contentful Paint: {audits['first-contentful-paint']?.displayValue || 'N/A'}</li>
            <li>Speed Index: {audits['speed-index']?.displayValue || 'N/A'}</li>
            <li>Time to Interactive: {audits.interactive?.displayValue || 'N/A'}</li>
            <li>Total Blocking Time: {audits['total-blocking-time']?.displayValue || 'N/A'}</li>
          </ul>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <Monitor className="mr-2" /> Desktop Performance
          </h3>
          <ul className="space-y-2">
            <li>First Contentful Paint: {audits['first-contentful-paint']?.displayValue || 'N/A'}</li>
            <li>Speed Index: {audits['speed-index']?.displayValue || 'N/A'}</li>
            <li>Time to Interactive: {audits.interactive?.displayValue || 'N/A'}</li>
            <li>Total Blocking Time: {audits['total-blocking-time']?.displayValue || 'N/A'}</li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">Performance Optimization Opportunities</h3>
        {renderOpportunities()}
      </div>
    </motion.div>
  );
};

const ScoreCard: React.FC<{ title: string; score: number; icon: React.ReactNode }> = ({ title, score, icon }) => (
  <motion.div
    className="bg-white rounded-lg shadow-md p-6 flex items-center justify-between"
    whileHover={{ y: -5, boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}
    transition={{ duration: 0.2 }}
  >
    <div>
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className={`text-3xl font-bold ${getScoreColor(score)}`}>{score}</p>
    </div>
    {icon}
  </motion.div>
);

const MetricCard: React.FC<{ title: string; value: string; description: string }> = ({ title, value, description }) => (
  <motion.div
    className="bg-gray-100 rounded-lg p-4"
    whileHover={{ y: -5, boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}
    transition={{ duration: 0.2 }}
  >
    <h4 className="font-semibold mb-2">{title}</h4>
    <p className="text-2xl font-bold mb-2">{value}</p>
    <p className="text-sm text-gray-600">{description}</p>
  </motion.div>
);

export default SpeedTestResults;