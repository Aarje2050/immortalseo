import React, { useState } from 'react';
import { AlertTriangle, CheckCircle, HelpCircle } from 'lucide-react';

interface ContentSidebarProps {
  content: string;
  contentScore: number;
}

const ContentSidebar: React.FC<ContentSidebarProps> = ({
  content,
  contentScore,
}) => {
  // Placeholder functions for various analyses
  const getGrammarErrors = () => ['Error 1', 'Error 2'];
  const getSeoSuggestions = () => ['Suggestion 1', 'Suggestion 2'];
  const getReadabilityScore = () => 70;
  const getKeywordDensity = () => 2.5;

  // State for handling collapsible sections
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div
      className="w-1/3 bg-gray-100 p-6 overflow-y-auto"
      style={{ height: '700px' }}
    >
      <h2 className="text-2xl font-bold mb-4">Content Analysis</h2>

      {/* Overall Score */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Overall Score</h3>
        <div className="flex items-center">
          <div
            className={`text-3xl font-bold ${
              contentScore >= 70
                ? 'text-green-500'
                : contentScore >= 50
                ? 'text-yellow-500'
                : 'text-red-500'
            }`}
          >
            {contentScore}
          </div>
          <div className="ml-2 text-gray-600">/100</div>
        </div>
      </div>

      {/* Grammar & Spelling */}
      <div className="mb-6">
        <h3
          className="text-xl font-semibold mb-2 cursor-pointer"
          onClick={() => toggleSection('grammar')}
        >
          Grammar & Spelling
        </h3>
        {openSection === 'grammar' && (
          <ul className="space-y-2">
            {getGrammarErrors().map((error, index) => (
              <li key={index} className="flex items-center text-red-500">
                <AlertTriangle size={16} className="mr-2" />
                {error}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* SEO Suggestions */}
      <div className="mb-6">
        <h3
          className="text-xl font-semibold mb-2 cursor-pointer"
          onClick={() => toggleSection('seo')}
        >
          SEO Suggestions
        </h3>
        {openSection === 'seo' && (
          <ul className="space-y-2">
            {getSeoSuggestions().map((suggestion, index) => (
              <li key={index} className="flex items-center text-blue-500">
                <HelpCircle size={16} className="mr-2" />
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Readability */}
      <div className="mb-6">
        <h3
          className="text-xl font-semibold mb-2 cursor-pointer"
          onClick={() => toggleSection('readability')}
        >
          Readability
        </h3>
        {openSection === 'readability' && (
          <div className="flex items-center">
            <div
              className={`text-2xl font-bold ${
                getReadabilityScore() >= 70
                  ? 'text-green-500'
                  : getReadabilityScore() >= 50
                  ? 'text-yellow-500'
                  : 'text-red-500'
              }`}
            >
              {getReadabilityScore()}
            </div>
            <div className="ml-2 text-gray-600">/100</div>
          </div>
        )}
      </div>

      {/* Keyword Density */}
      <div className="mb-6">
        <h3
          className="text-xl font-semibold mb-2 cursor-pointer"
          onClick={() => toggleSection('keywordDensity')}
        >
          Keyword Density
        </h3>
        {openSection === 'keywordDensity' && (
          <div className="flex items-center">
            <div className="text-2xl font-bold text-blue-500">
              {getKeywordDensity()}%
            </div>
          </div>
        )}
      </div>

      {/* Content Structure */}
      <div className="mb-6">
        <h3
          className="text-xl font-semibold mb-2 cursor-pointer"
          onClick={() => toggleSection('structure')}
        >
          Content Structure
        </h3>
        {openSection === 'structure' && (
          <ul className="space-y-2">
            <li className="flex items-center text-green-500">
              <CheckCircle size={16} className="mr-2" />
              Proper use of headings
            </li>
            <li className="flex items-center text-green-500">
              <CheckCircle size={16} className="mr-2" />
              Paragraphs of appropriate length
            </li>
            <li className="flex items-center text-yellow-500">
              <AlertTriangle size={16} className="mr-2" />
              Consider adding more lists
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default ContentSidebar;
