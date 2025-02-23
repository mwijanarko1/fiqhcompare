'use client'

import { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa6'

interface ChapterContent {
  title: string
  content: string[]
}

interface ChapterAccordionProps {
  chapters: ChapterContent[]
}

export default function ChapterAccordion({ chapters }: ChapterAccordionProps) {
  const [openChapter, setOpenChapter] = useState<number | null>(null)

  const toggleChapter = (index: number) => {
    if (openChapter === index) {
      setOpenChapter(null)
    } else {
      setOpenChapter(index)
    }
  }

  return (
    <div className="w-full space-y-4">
      {chapters.map((chapter, index) => (
        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
          <button
            onClick={() => toggleChapter(index)}
            className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors duration-200"
          >
            <h3 className="text-lg font-medium text-gray-900">{chapter.title}</h3>
            <FaChevronDown 
              className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                openChapter === index ? 'transform rotate-180' : ''
              }`}
            />
          </button>
          {openChapter === index && (
            <div className="p-4 bg-gray-50 border-t border-gray-200">
              <ul className="list-disc list-inside space-y-2">
                {chapter.content.map((point, pointIndex) => (
                  <li key={pointIndex} className="text-gray-700">{point}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  )
} 