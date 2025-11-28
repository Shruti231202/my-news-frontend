// pages/index.js
import fs from 'fs'
import path from 'path'
import { useMemo } from 'react'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Card from '../components/Card'
import ErrorBanner from '../components/ErrorBanner'

export async function getStaticProps() {
  try {
    const filePath = path.join(process.cwd(), 'data', 'articles.json')
    const json = fs.readFileSync(filePath, 'utf8')
    const articles = JSON.parse(json) || []
    return { props: { articles, error: false }, revalidate: 60 }
  } catch (err) {
    console.error('Failed to load articles', err)
    return { props: { articles: [], error: true }, revalidate: 60 }
  }
}

export default function Home({ articles, error }) {
  const router = useRouter()
  const { category } = router.query

  // filter by category if ?category= is present (case-insensitive)
  const filtered = useMemo(() => {
    if (!category) return articles
    return articles.filter(a => (a.category || '').toLowerCase() === String(category).toLowerCase())
  }, [articles, category])

  const hero = (filtered && filtered.length > 0) ? filtered[0] : null
  const others = (filtered && filtered.length > 1) ? filtered.slice(1) : []

  return (
    <Layout title="LiveHindustan Clone - Home" description="A demo news frontpage built with Next.js">
      <main className="container mx-auto px-4 py-8">
        {/* Error banner (shows when getStaticProps failed) */}
        <ErrorBanner message={error ? "Failed to load news. Showing fallback data." : null} />

        {/* No articles fallback */}
        {(!filtered || filtered.length === 0) ? (
          <div className="text-center py-12">
            <img src="/fallback.jpg" className="w-48 mx-auto mb-4" alt="no news" />
            <h2 className="text-xl font-semibold">No news available</h2>
            <p className="text-gray-500">Please check again later or try a different category.</p>
          </div>
        ) : (
          <>
            {/* Hero (top story) */}
            {hero && <Hero article={hero} />}

            {/* Top stories grid */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl sm:text-2xl font-semibold">Top stories</h3>
                {category ? (
                  <div className="text-sm text-gray-600">Showing: <span className="font-medium">{category}</span></div>
                ) : (
                  <div className="text-sm text-gray-500">Global</div>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {others.map((article) => (
                  <Card key={article.id} article={article} />
                ))}
              </div>
            </section>
          </>
        )}
      </main>
    </Layout>
  )
}
