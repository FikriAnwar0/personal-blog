import Link from "next/link"
import { Calendar, Clock, ArrowLeft, Share2, Heart } from "lucide-react"
import { articles } from "@/lib/data"
import { notFound } from "next/navigation"

interface ArticlePageProps {
  params: Promise<{ slug: string }>
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)

  if (!article) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Kembali ke Beranda
          </Link>
        </div>
      </nav>

      {/* Article Header */}
      <header className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-16">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 flex items-center justify-center gap-6 text-sm text-blue-200">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{article.readTime}</span>
              </div>
              <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium">{article.category}</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">{article.title}</h1>

            <p className="text-xl text-blue-100 md:text-2xl">{article.excerpt}</p>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-red-600 hover:bg-red-200 transition-colors">
                <Heart className="h-4 w-4" />
                <span>Suka</span>
              </button>
              <button className="flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-blue-600 hover:bg-blue-200 transition-colors">
                <Share2 className="h-4 w-4" />
                <span>Bagikan</span>
              </button>
            </div>
          </div>

          <article className="prose prose-lg prose-blue mx-auto max-w-none">
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              {article.content.split("\n\n").map((paragraph, index) => (
                <p key={index} className="mb-6 text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </article>

          {/* Related Articles */}
          <section className="mt-16">
            <h2 className="mb-8 text-3xl font-bold text-gray-900">Artikel Lainnya</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {articles
                .filter((a) => a.slug !== slug)
                .slice(0, 2)
                .map((relatedArticle) => (
                  <Link
                    key={relatedArticle.id}
                    href={`/article/${relatedArticle.slug}`}
                    className="group block rounded-xl bg-white p-6 shadow-lg transition-all hover:shadow-xl hover:-translate-y-1"
                  >
                    <h3 className="mb-2 text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {relatedArticle.title}
                    </h3>
                    <p className="mb-4 text-gray-600 line-clamp-2">{relatedArticle.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{relatedArticle.date}</span>
                      <span className="text-blue-600 group-hover:text-blue-800">Baca →</span>
                    </div>
                  </Link>
                ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
