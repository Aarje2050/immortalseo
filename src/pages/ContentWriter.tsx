import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Editor } from '@tinymce/tinymce-react';
import ContentSidebar from '../components/ContentSidebar';
import { useLocation } from 'react-router-dom';

const ContentWriter: React.FC = () => {
  const [content, setContent] = useState('');
  const [contentScore, setContentScore] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const topic = searchParams.get('topic');
    if (topic) {
      setContent(
        `<h1>${topic}</h1>\n\n<p>Start writing about ${topic} here...</p>`
      );
    }
  }, [location]);

  const handleEditorChange = (content: string) => {
    setContent(content);
    // Here you would typically call your content analysis functions
    analyzeContent(content);
  };

  const analyzeContent = (content: string) => {
    // Placeholder for content analysis
    // In a real implementation, this would call various analysis functions
    const score = Math.floor(Math.random() * 100); // Placeholder score
    setContentScore(score);
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.header
          className="text-center mb-8"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Content Writer
          </h1>
          <p className="text-xl text-gray-600">
            Create SEO-optimized content with AI assistance
          </p>
        </motion.header>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex">
            <div className="w-2/3 p-6">
              <Editor
                apiKey="ls8yv9q9rsmdfly2t7gj11uxdbwktiab32r66l5x03nqo04g"
                value={content}
                init={{
                  height: 500,
                  menubar: false,

                  plugins:
                    'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
                  toolbar:
                    'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
                }}
                onEditorChange={handleEditorChange}
              />
            </div>
            <ContentSidebar content={content} contentScore={contentScore} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContentWriter;
