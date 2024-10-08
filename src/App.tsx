import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Dashboard from './pages/Dashboard'
import SchemaGenerator from './pages/SchemaGenerator'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/schema-generator" element={<SchemaGenerator />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App