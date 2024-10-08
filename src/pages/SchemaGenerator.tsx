import React, { useState } from 'react'
import { ChevronDown, Code, ExternalLink, Copy, CheckCircle } from 'lucide-react'
import SchemaForm from '../components/SchemaForm'
import SchemaPreview from '../components/SchemaPreview'
import { SchemaType } from '../types'
import { motion } from 'framer-motion'

const schemaTypes: SchemaType[] = [
  { name: 'Article', value: 'Article' },
  { name: 'Product', value: 'Product' },
  { name: 'LocalBusiness', value: 'LocalBusiness' },
  { name: 'Person', value: 'Person' },
  { name: 'Event', value: 'Event' },
  { name: 'Recipe', value: 'Recipe' },
  { name: 'FAQPage', value: 'FAQPage' },
  { name: 'JobPosting', value: 'JobPosting' },
]

function SchemaGenerator() {
  const [selectedSchema, setSelectedSchema] = useState<SchemaType | null>(null)
  const [schemaData, setSchemaData] = useState<Record<string, any>>({})
  const [copied, setCopied] = useState(false)

  const handleSchemaSelect = (schema: SchemaType) => {
    setSelectedSchema(schema)
    setSchemaData({})
  }

  const handleSchemaDataChange = (data: Record<string, any>) => {
    setSchemaData(data)
  }

  const handleTestSchema = () => {
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': selectedSchema?.value,
      ...schemaData,
    }
    const encodedSchema = encodeURIComponent(JSON.stringify(jsonLd))
    window.open(`https://validator.schema.org/#url=${encodedSchema}`, '_blank')
  }

  const handleCopySchema = () => {
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': selectedSchema?.value,
      ...schemaData,
    }
    navigator.clipboard.writeText(JSON.stringify(jsonLd, null, 2)).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <motion.header 
          className="bg-blue-600 text-white p-6"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-3xl font-bold">SEO Schema Generator Tool</h1>
          <p className="mt-2 text-blue-100">Generate structured data in JSON-LD format to improve your website's SEO</p>
        </motion.header>
        <main className="p-6">
          <motion.div 
            className="mb-6"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <label htmlFor="schema-select" className="block text-sm font-medium text-gray-700 mb-2">
              Select Schema Type
            </label>
            <div className="relative">
              <select
                id="schema-select"
                className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                onChange={(e) => handleSchemaSelect(schemaTypes.find(s => s.value === e.target.value) || null)}
                value={selectedSchema?.value || ''}
              >
                <option value="">Choose a schema type</option>
                {schemaTypes.map((schema) => (
                  <option key={schema.value} value={schema.value}>
                    {schema.name}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <ChevronDown className="h-4 w-4" />
              </div>
            </div>
          </motion.div>
          {selectedSchema && (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <SchemaForm schema={selectedSchema} onDataChange={handleSchemaDataChange} />
              <SchemaPreview schemaData={schemaData} schemaType={selectedSchema.value} />
            </motion.div>
          )}
          {Object.keys(schemaData).length > 0 && (
            <motion.div 
              className="mt-6 flex justify-end space-x-4"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <button
                onClick={handleCopySchema}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-300"
              >
                {copied ? <CheckCircle className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
                {copied ? 'Copied!' : 'Copy Schema'}
              </button>
              <button
                onClick={handleTestSchema}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300"
              >
                Test Schema <ExternalLink className="ml-2 h-4 w-4" />
              </button>
            </motion.div>
          )}
        </main>
      </div>
    </motion.div>
  )
}

export default SchemaGenerator