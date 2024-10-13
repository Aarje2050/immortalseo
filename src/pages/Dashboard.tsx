import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Code, Search, BarChart, Globe, Zap, FileText, Share2, Cpu, Edit } from 'lucide-react'

const tools = [
  { name: 'Schema Generator', icon: Code, link: '/schema-generator', description: 'Generate structured data for better SEO' },
  { name: 'Keyword Research', icon: Search, link: '/keyword-research', description: 'Find the best keywords for your content' },
  { name: 'SERP Analyzer', icon: BarChart, link: '/serp-analyzer', description: 'Analyze search engine results pages' },
  { name: 'Backlink Checker', icon: Globe, link: '/backlink-checker', description: 'Check and analyze your backlinks' },
  { name: 'Site Speed Test', icon: Zap, link: '/site-speed-test', description: 'Test your website\'s loading speed' },
  { name: 'Meta Tag Generator', icon: FileText, link: '/meta-tag-generator', description: 'Generate optimized meta tags' },
  { name: 'Social Media Analyzer', icon: Share2, link: '/social-media-analyzer', description: 'Analyze your social media performance' },
  { name: 'SEO Audit', icon: Cpu, link: '/seo-audit', description: 'Perform a comprehensive SEO audit' },
  { name: 'Content Writer', icon: Edit, link: '/content-writer', description: 'Create SEO-optimized content with AI assistance' },
  { name: 'Topical Cluster', icon: Edit, link: '/topical-cluster', description: 'Create SEO-optimized content with AI assistance' },

]


const Dashboard: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1 
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Free SEO Tools Dashboard
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool, index) => (
          <motion.div
            key={tool.name}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to={tool.link} className="block p-6">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                <tool.icon size={32} />
              </div>
              <h2 className="text-xl font-semibold mb-2">{tool.name}</h2>
              <p className="text-gray-600">{tool.description}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Dashboard