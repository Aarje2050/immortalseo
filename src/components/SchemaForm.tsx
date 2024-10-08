import React from 'react'
import { SchemaType } from '../types'

interface SchemaFormProps {
  schema: SchemaType
  onDataChange: (data: Record<string, any>) => void
}

const SchemaForm: React.FC<SchemaFormProps> = ({ schema, onDataChange }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    onDataChange((prevData) => ({ ...prevData, [name]: value }))
  }

  const renderFormFields = () => {
    switch (schema.value) {
      case 'Article':
        return (
          <>
            <input
              type="text"
              name="headline"
              placeholder="Headline"
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            <input
              type="text"
              name="author"
              placeholder="Author"
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            <input
              type="date"
              name="datePublished"
              placeholder="Date Published"
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            <textarea
              name="description"
              placeholder="Description"
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows={3}
            />
            <input
              type="url"
              name="image"
              placeholder="Image URL"
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </>
        )
      case 'Product':
        return (
          <>
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            <textarea
              name="description"
              placeholder="Description"
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows={3}
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            <input
              type="text"
              name="priceCurrency"
              placeholder="Price Currency (e.g., USD)"
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            <input
              type="url"
              name="image"
              placeholder="Image URL"
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </>
        )
      case 'LocalBusiness':
        return (
          <>
            <input
              type="text"
              name="name"
              placeholder="Business Name"
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            <textarea
              name="description"
              placeholder="Description"
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows={3}
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            <input
              type="tel"
              name="telephone"
              placeholder="Telephone"
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            <input
              type="url"
              name="url"
              placeholder="Website URL"
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </>
        )
      case 'Person':
        return (
          <>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            <input
              type="text"
              name="jobTitle"
              placeholder="Job Title"
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            <input
              type="url"
              name="url"
              placeholder="Website URL"
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            <input
              type="tel"
              name="telephone"
              placeholder="Telephone"
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </>
        )
      case 'Event':
        return (
          <>
            <input
              type="text"
              name="name"
              placeholder="Event Name"
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            <textarea
              name="description"
              placeholder="Description"
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows={3}
            />
            <input
              type="datetime-local"
              name="startDate"
              placeholder="Start Date and Time"
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            <input
              type="datetime-local"
              name="endDate"
              placeholder="End Date and Time"
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </>
        )
      case 'Recipe':
        return (
          <>
            <input
              type="text"
              name="name"
              placeholder="Recipe Name"
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            <textarea
              name="description"
              placeholder="Description"
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows={3}
            />
            <input
              type="text"
              name="author"
              placeholder="Author"
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            <input
              type="text"
              name="prepTime"
              placeholder="Prep Time (e.g., PT15M)"
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            <input
              type="text"
              name="cookTime"
              placeholder="Cook Time (e.g., PT1H)"
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            <textarea
              name="recipeIngredient"
              placeholder="Ingredients (one per line)"
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows={5}
            />
          </>
        )
      case 'FAQPage':
        return (
          <>
            <textarea
              name="question1"
              placeholder="Question 1"
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows={2}
            />
            <textarea
              name="answer1"
              placeholder="Answer 1"
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows={3}
            />
            <textarea
              name="question2"
              placeholder="Question 2"
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows={2}
            />
            <textarea
              name="answer2"
              placeholder="Answer 2"
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows={3}
            />
          </>
        )
      case 'JobPosting':
        return (
          <>
            <input
              type="text"
              name="title"
              placeholder="Job Title"
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            <textarea
              name="description"
              placeholder="Job Description"
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows={3}
            />
            <input
              type="text"
              name="hiringOrganization"
              placeholder="Hiring Organization"
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            <input
              type="text"
              name="jobLocation"
              placeholder="Job Location"
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            <input
              type="text"
              name="baseSalary"
              placeholder="Base Salary"
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            <input
              type="date"
              name="datePosted"
              placeholder="Date Posted"
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </>
        )
      default:
        return <p>Please select a schema type</p>
    }
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-800">{schema.name} Schema</h2>
      {renderFormFields()}
    </div>
  )
}

export default SchemaForm