import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Blog Pribadi - Berbagi Cerita dan Inspirasi",
  description: "Blog pribadi yang berisi artikel tentang teknologi, produktivitas, dan pengalaman hidup",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <Navigation />
        {children}

        {/* Footer */}
        <footer className="bg-gray-900 text-white">
          <div className="container mx-auto px-4 py-12">
            <div className="grid gap-8 md:grid-cols-3">
              <div>
                <h3 className="mb-4 text-xl font-bold">Blog Pribadi</h3>
                <p className="text-gray-400">Berbagi pemikiran, pengalaman, dan inspirasi dalam perjalanan hidup.</p>
              </div>
              <div>
                <h4 className="mb-4 font-semibold">Kategori</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Teknologi
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Produktivitas
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Lifestyle
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Karir
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="mb-4 font-semibold">Kontak</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Email
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      GitHub
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-400">
              <p>&copy; 2024 Blog Pribadi. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
