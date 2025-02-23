import { notFound } from 'next/navigation'
import Link from 'next/link'
import { FaBook } from 'react-icons/fa'

interface SearchResult {
  topic: string
  chapter: string
  content: string[]
  matchingContent: string[]
}

function searchContent(query: string, topicData: any): SearchResult[] {
  const results: SearchResult[] = []
  const searchTerms = query.toLowerCase().split(' ')

  Object.entries(topicData).forEach(([topic, data]: [string, any]) => {
    data.chapters.forEach((chapter: any) => {
      const matchingContent = chapter.content.filter((content: string) =>
        searchTerms.some(term => content.toLowerCase().includes(term))
      )

      if (matchingContent.length > 0) {
        results.push({
          topic,
          chapter: chapter.title,
          content: chapter.content,
          matchingContent
        })
      }
    })
  })

  return results
}

export default function SearchPage({
  searchParams
}: {
  searchParams: { q: string }
}) {
  const query = searchParams.q

  if (!query) {
    return (
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Search Results</h1>
            <p className="text-gray-600">Please enter a search term to begin</p>
          </div>
        </div>
      </main>
    )
  }

  // Import topicData from the topics page
  const { topicData } = require('../topics/[topic]/page')
  const results = searchContent(query, topicData)

  if (results.length === 0) {
    return (
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Search Results</h1>
            <p className="text-gray-600">No results found for "{query}"</p>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Search Results</h1>
          <p className="text-gray-600">Found {results.length} results for "{query}"</p>
        </div>

        <div className="space-y-6">
          {results.map((result, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-emerald-100 rounded-lg">
                    <FaBook className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <Link
                      href={`/topics/${result.topic}`}
                      className="text-lg font-semibold text-gray-900 hover:text-emerald-600 transition-colors"
                    >
                      {result.chapter}
                    </Link>
                    <p className="text-sm text-gray-500 capitalize">
                      From: {result.topic.replace('-', ' ')}
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  {result.matchingContent.map((content, i) => {
                    const parts = content.split(new RegExp(`(${query})`, 'gi'))
                    return (
                      <p key={i} className="text-gray-600">
                        {parts.map((part, j) =>
                          part.toLowerCase() === query.toLowerCase() ? (
                            <span key={j} className="bg-yellow-100 font-medium">
                              {part}
                            </span>
                          ) : (
                            part
                          )
                        )}
                      </p>
                    )
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
} 