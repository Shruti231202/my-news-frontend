import Head from 'next/head'
import Nav from './Nav'
import Footer from './Footer'

export default function Layout({ children, title = "News Frontpage", description = "Demo news frontpage built with Next.js" }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="LiveHindustan Clone" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/fallback.jpg" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Nav />
        <main className="container mx-auto px-4 py-6 flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}
