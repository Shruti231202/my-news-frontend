import fs from 'fs'
import path from 'path'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../../components/Layout'

export async function getStaticPaths() {
  const dataPath = path.join(process.cwd(), 'data', 'articles.json')
  const articles = JSON.parse(fs.readFileSync(dataPath, 'utf8'))

  const paths = articles.map(a => ({
    params: { id: a.id }
  }))

  return {
    paths,
    fallback: 'blocking'
  }
}

export async function getStaticProps({ params }) {
  const dataPath = path.join(process.cwd(), 'data', 'articles.json')
  const articles = JSON.parse(fs.readFileSync(dataPath, 'utf8'))

  const article = articles.find(a => a.id === params.id)

  if (!article) {
    return { notFound: true }
  }

  return {
    props: { article },
    revalidate: 60
  }
}

export default function ArticlePage({ article }) {
  const absoluteUrl = "http://localhost:3000"  // change when deploying

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": article.title,
    "image": [
      article.image ? absoluteUrl + article.image : absoluteUrl + "/fallback.jpg"
    ],
    "datePublished": article.published_at,
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "LiveHindustan Clone",
      "logo": {
        "@type": "ImageObject",
        "url": absoluteUrl + "/fallback.jpg"
      }
    }
  }

  return (
    <Layout title={article.title} description={article.summary}>
      <Head>
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.summary} />
        <meta property="og:image" content={article.image || '/fallback.jpg'} />
        <meta name="twitter:card" content="summary_large_image" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
        <p className="text-gray-600 text-sm mb-2">
          {article.author} • {article.published_at.slice(0, 10)}
        </p>

        <div className="relative w-full h-72 md:h-96 bg-gray-200 mb-6">
          <Image
            src={article.image || '/fallback.jpg'}
            alt={article.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        <article className="prose max-w-none">
          {article.content}
        </article>
      </main>
    </Layout>

  )
}
