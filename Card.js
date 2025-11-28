import Image from 'next/image'
import Link from 'next/link'

export default function Card({ article }) {
  const d = new Date(article.published_at)
  const date = `${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}`

  return (
    <Link href={`/articles/${article.id}`} className="block">
      <article className="bg-white rounded shadow overflow-hidden hover:shadow-md transition">
        <div className="relative h-44 sm:h-40 md:h-48 w-full bg-gray-100">
          <Image
            src={article.image || '/fallback.jpg'}
            alt={article.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        <div className="p-3">
          <h3 className="font-semibold text-lg sm:text-base md:text-lg line-clamp-2 break-words">{article.title}</h3>
          <p className="text-sm text-gray-600 mt-1 line-clamp-2">{article.summary}</p>
          <div className="text-xs text-gray-500 mt-2">{article.published_at?.slice(0,10)}</div>
        </div>
      </article>
    </Link>
  )
}
