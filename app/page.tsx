import Link from "next/link"
import { Calendar, Clock, ArrowRight, User } from "lucide-react"
import { articles } from "@/lib/data"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20 text-center">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
              Blog <span className="text-yellow-300">Pribadi</span>
            </h1>
            <p className="mb-8 text-xl text-blue-100 md:text-2xl">
              Berbagi pemikiran, pengalaman, dan inspirasi dalam perjalanan hidup
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-blue-200">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Personal Blog</span>
              </div>
              <div className="h-4 w-px bg-blue-300"></div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Updated Weekly</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </section>

      {/* Articles Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">Artikel Terbaru</h2>
          <p className="text-lg text-gray-600">Temukan cerita dan wawasan menarik</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <article
              key={article.id}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="aspect-video overflow-hidden bg-gradient-to-br from-blue-400 to-purple-500">
                <div className="flex h-full items-center justify-center text-white">
                  <div className="text-center">
                    <div className="mb-2 text-4xl font-bold">{index + 1}</div>
                    <div className="text-sm opacity-80">Featured Article</div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-3 flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="mb-3 text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>

                <p className="mb-4 text-gray-600 line-clamp-3">{article.excerpt}</p>

                <div className="flex items-center justify-between">
                  <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
                    {article.category}
                  </span>

                  <Link
                    href={`/article/${article.slug}`}
                    className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-800 transition-colors"
                  >
                    Baca Selengkapnya
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="mb-4 text-3xl font-bold">Tetap Terhubung</h2>
          <p className="mb-8 text-gray-300">Dapatkan notifikasi artikel terbaru langsung ke email Anda</p>
          <div className="mx-auto flex max-w-md gap-4">
            <input
              type="email"
              placeholder="Masukkan email Anda"
              className="flex-1 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="rounded-lg bg-blue-600 px-6 py-3 font-medium hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
