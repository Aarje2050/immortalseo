import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, BarChart2, Users, ThumbsUp, MessageCircle } from 'lucide-react';

interface SocialMediaStats {
  platform: string;
  followers: number;
  engagement: number;
  posts: number;
  likes: number;
  comments: number;
  shares: number;
}

const SocialMediaAnalyzer: React.FC = () => {
  const [url, setUrl] = useState('');
  const [stats, setStats] = useState<SocialMediaStats[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulating API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Mock data generation
    const generatedStats: SocialMediaStats[] = [
      {
        platform: 'Facebook',
        followers: Math.floor(Math.random() * 100000),
        engagement: Number((Math.random() * 5).toFixed(2)),
        posts: Math.floor(Math.random() * 1000),
        likes: Math.floor(Math.random() * 10000),
        comments: Math.floor(Math.random() * 5000),
        shares: Math.floor(Math.random() * 2000),
      },
      {
        platform: 'Twitter',
        followers: Math.floor(Math.random() * 50000),
        engagement: Number((Math.random() * 5).toFixed(2)),
        posts: Math.floor(Math.random() * 5000),
        likes: Math.floor(Math.random() * 20000),
        comments: Math.floor(Math.random() * 10000),
        shares: Math.floor(Math.random() * 5000),
      },
      {
        platform: 'Instagram',
        followers: Math.floor(Math.random() * 200000),
        engagement: Number((Math.random() * 5).toFixed(2)),
        posts: Math.floor(Math.random() * 500),
        likes: Math.floor(Math.random() * 50000),
        comments: Math.floor(Math.random() * 10000),
        shares: 0,
      },
      {
        platform: 'LinkedIn',
        followers: Math.floor(Math.random() * 20000),
        engagement: Number((Math.random() * 5).toFixed(2)),
        posts: Math.floor(Math.random() * 300),
        likes: Math.floor(Math.random() * 5000),
        comments: Math.floor(Math.random() * 2000),
        shares: Math.floor(Math.random() * 1000),
      },
    ];

    setStats(generatedStats);
    setLoading(false);
  };

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'Facebook':
        return <Facebook className="w-6 h-6 text-blue-600" />;
      case 'Twitter':
        return <Twitter className="w-6 h-6 text-blue-400" />;
      case 'Instagram':
        return <Instagram className="w-6 h-6 text-pink-600" />;
      case 'LinkedIn':
        return <Linkedin className="w-6 h-6 text-blue-700" />;
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
          Social Media Analyzer
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
              placeholder="Enter a website URL to analyze social media presence"
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

        {stats.length > 0 && (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    {getPlatformIcon(stat.platform)}
                    <h2 className="text-xl font-semibold ml-2">{stat.platform}</h2>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-gray-500 mr-1" />
                    <span className="font-semibold">{stat.followers.toLocaleString()}</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Engagement Rate</p>
                    <p className="text-lg font-semibold">{stat.engagement}%</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Total Posts</p>
                    <p className="text-lg font-semibold">{stat.posts.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Likes</p>
                    <p className="text-lg font-semibold">{stat.likes.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Comments</p>
                    <p className="text-lg font-semibold">{stat.comments.toLocaleString()}</p>
                  </div>
                  {stat.platform !== 'Instagram' && (
                    <div>
                      <p className="text-sm text-gray-500">Shares</p>
                      <p className="text-lg font-semibold">{stat.shares.toLocaleString()}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default SocialMediaAnalyzer;