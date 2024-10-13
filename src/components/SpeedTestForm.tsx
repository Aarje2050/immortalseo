import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

interface SpeedTestFormProps {
  onSubmit: (url: string) => void;
  loading: boolean;
}

const SpeedTestForm: React.FC<SpeedTestFormProps> = ({ onSubmit, loading }) => {
  const [url, setUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url.trim()) {
      onSubmit(url.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex items-center border-2 border-gray-300 rounded-lg overflow-hidden focus-within:border-blue-500 transition-colors duration-300">
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter website URL (e.g., https://example.com)"
          className="flex-grow px-4 py-3 focus:outline-none"
          required
        />
        <motion.button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 flex items-center justify-center"
          whileHover={{ backgroundColor: '#2563EB' }}
          whileTap={{ scale: 0.95 }}
          disabled={loading}
        >
          {loading ? (
            <motion.div
              className="w-6 h-6 border-t-2 border-white rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            />
          ) : (
            <>
              <Search className="mr-2" size={20} />
              Test Speed
            </>
          )}
        </motion.button>
      </div>
    </form>
  );
};

export default SpeedTestForm;