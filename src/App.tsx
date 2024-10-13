import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Dashboard from './pages/Dashboard'
import SchemaGenerator from './pages/SchemaGenerator'
import SiteSpeedTest from './pages/SiteSpeedTest'
import ContentWriter from './pages/ContentWriter'
import KeywordResearch from './pages/KeywordResearch'
import SerpAnalyzer from './pages/SerpAnalyzer'
import BacklinkChecker from './pages/BacklinkChecker'
import MetaTagGenerator from './pages/MetaTagGenerator'
import SocialMediaAnalyzer from './pages/SocialMediaAnalyzer'
import SeoAudit from './pages/SeoAudit'
import TopicalCluster from './pages/TopicalCluster'


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/schema-generator" element={<SchemaGenerator />} />
            <Route path="/site-speed-test" element={<SiteSpeedTest />} />
            <Route path="/content-writer" element={<ContentWriter />} />
            <Route path="/topical-cluster" element={<TopicalCluster />} />

            <Route path="/keyword-research" element={<KeywordResearch />} />
            <Route path="/serp-analyzer" element={<SerpAnalyzer />} />
            <Route path="/backlink-checker" element={<BacklinkChecker />} />
            <Route path="/meta-tag-generator" element={<MetaTagGenerator />} />
            <Route path="/social-media-analyzer" element={<SocialMediaAnalyzer />} />
            <Route path="/seo-audit" element={<SeoAudit />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App