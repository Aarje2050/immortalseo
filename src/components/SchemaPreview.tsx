import React from 'react'
import { Code } from 'lucide-react'

interface SchemaPreviewProps {
  schemaData: Record<string, any>
  schemaType: string
}

const SchemaPreview: React.FC<SchemaPreviewProps> = ({ schemaData, schemaType }) => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': schemaType,
    ...schemaData,
  }

  // Special handling for FAQPage schema
  if (schemaType === 'FAQPage') {
    jsonLd.mainEntity = [
      {
        '@type': 'Question',
        name: schemaData.question1,
        acceptedAnswer: {
          '@type': 'Answer',
          text: schemaData.answer1
        }
      },
      {
        '@type': 'Question',
        name: schemaData.question2,
        acceptedAnswer: {
          '@type': 'Answer',
          text: schemaData.answer2
        }
      }
    ]
    delete jsonLd.question1
    delete jsonLd.answer1
    delete jsonLd.question2
    delete jsonLd.answer2
  }

  // Special handling for Recipe schema
  if (schemaType === 'Recipe' && schemaData.recipeIngredient) {
    jsonLd.recipeIngredient = schemaData.recipeIngredient.split('\n').filter(Boolean)
  }

  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h2 className="text-xl font-semibold text-gray-800 mb-2 flex items-center">
        <Code className="mr-2" /> Schema Preview
      </h2>
      <pre className="bg-gray-800 text-green-400 p-4 rounded overflow-x-auto">
        <code>{JSON.stringify(jsonLd, null, 2)}</code>
      </pre>
    </div>
  )
}

export default SchemaPreview