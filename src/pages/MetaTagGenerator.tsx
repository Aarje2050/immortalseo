import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Copy, CheckCircle } from 'lucide-react';

interface MetaTags {
  title: string;
  description: string;
  keywords: string;
  author: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  twitterCard: string;
  twitterTitle: string;
  twitterDescription: string;
  twitterImage: string;
}

const MetaTagGenerator: React.FC = () => {
  const [metaTags, setMetaTags] = useState<MetaTags>({
    title: '',
    description: '',
    keywords: '',
    author: '',
    ogTitle: '',
    ogDescription: '',
    ogImage: '',
    twitterCard: 'summary_large_image',
    twitterTitle: '',
    twitterDescription: '',
    twitterImage: '',
  });

  const [copied, setCopied] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setMetaTags(prev => ({ ...prev, [name]: value }));
  };

  const generateMetaTagsHtml = () => {
    return `
<meta name="title" content="${metaTags.title}">
<meta name="description" content="${metaTags.description}">
<meta name="keywords" content="${metaTags.keywords}">
<meta name="author" content="${metaTags.author}">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:title" content="${metaTags.ogTitle || metaTags.title}">
<meta property="og:description" content="${metaTags.ogDescription || metaTags.description}">
<meta property="og:image" content="${metaTags.ogImage}">

<!-- Twitter -->
<meta property="twitter:card" content="${metaTags.twitterCard}">
<meta property="twitter:title" content="${metaTags.twitterTitle || metaTags.title}">
<meta property="twitter:description" content="${metaTags.twitterDescription || metaTags.description}">
<meta property="twitter:image" content="${metaTags.twitterImage || metaTags.ogImage}">
    `.trim();
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateMetaTagsHtml()).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
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
          Meta Tag Generator
        </motion.h1>

        <motion.div
          className="bg-white rounded-lg shadow-lg p-6 mb-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
              <input
                type="text"
                name="title"
                value={metaTags.title}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea
                name="description"
                value={metaTags.description}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={3}
              ></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Keywords</label>
              <input
                type="text"
                name="keywords"
                value={metaTags.keywords}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Author</label>
              <input
                type="text"
                name="author"
                value={metaTags.author}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">OG Title</label>
              <input
                type="text"
                name="ogTitle"
                value={metaTags.ogTitle}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">OG Description</label>
              <textarea
                name="ogDescription"
                value={metaTags.ogDescription}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={3}
              ></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">OG Image URL</label>
              <input
                type="url"
                name="ogImage"
                value={metaTags.ogImage}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Twitter Card</label>
              <select
                name="twitterCard"
                value={metaTags.twitterCard}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="summary">Summary</option>
                <option value="summary_large_image">Summary Large Image</option>
                <option value="app">App</option>
                <option value="player">Player</option>
              </select>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="bg-white rounded-lg shadow-lg p-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Generated Meta Tags</h2>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code>{generateMetaTagsHtml()}</code>
          </pre>
          <button
            onClick={copyToClipboard}
            className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            {copied ? (
              <>
                <CheckCircle className="mr-2 h-5 w-5" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="mr-2 h-5 w-5" />
                Copy to Clipboard
              </>
            )}
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MetaTagGenerator;