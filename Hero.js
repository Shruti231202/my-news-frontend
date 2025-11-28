import Image from 'next/image'
import Link from 'next/link'

export default function Hero({ article }) {
  if (!article) return null

  const d = new Date(article.published_at)
  const formattedDate = `${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}`

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="md:col-span-2 bg-white rounded shadow overflow-hidden">
        <Link href={`/articles/${article.id}`} className="block">
          <div className="w-full bg-gray-100">
            <Image
              src={article.image || '/fallback.jpg'}
              alt={article.title}
              width={1200}
              height={600}
              sizes="(max-width: 640px) 100vw, 66vw"
              className="w-full h-auto object-cover"
              priority
            />
          </div>

          <div className="p-4">
            <h2 className="text-2xl font-bold mb-2 leading-snug break-words">{article.title}</h2>
            <p className="text-sm text-gray-600">{article.summary}</p>
            <div className="text-xs text-gray-500 mt-2">{formattedDate} • {article.author}</div>
          </div>
        </Link>
      </div>

      <div className="space-y-4">
        {/* optional: secondary top stories */}
      </div>
    </div>
  )
}
