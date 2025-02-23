import Link from 'next/link'
import { IconType } from 'react-icons'
import { FaDroplet, FaPersonPraying, FaHandHoldingDollar, FaMoon, FaKaaba } from 'react-icons/fa6'

interface TopicCardProps {
  title: string
  description: string
  slug: string
}

const getTopicIcon = (slug: string): IconType => {
  switch(slug) {
    case 'purification':
      return FaDroplet
    case 'prayer':
      return FaPersonPraying
    case 'zakat':
      return FaHandHoldingDollar
    case 'fasting':
      return FaMoon
    case 'hajj':
      return FaKaaba
    default:
      return FaPersonPraying
  }
}

export default function TopicCard({ title, description, slug }: TopicCardProps) {
  const Icon = getTopicIcon(slug)
  
  return (
    <Link href={`/topics/${slug}`} className="group">
      <div className="relative flex flex-col p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-emerald-100 rounded-lg group-hover:bg-emerald-200 transition-colors duration-200">
            <Icon className="w-6 h-6 text-emerald-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  )
} 