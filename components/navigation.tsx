"use client"

import Link from "next/link"
import { Home, User, Mail, Search } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            My<span className="text-blue-600">Blog</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`flex items-center gap-2 transition-colors ${
                pathname === "/" ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
              }`}
            >
              <Home className="h-4 w-4" />
              Beranda
            </Link>
            <Link
              href="/about"
              className={`flex items-center gap-2 transition-colors ${
                pathname === "/about" ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
              }`}
            >
              <User className="h-4 w-4" />
              Tentang
            </Link>
            <Link
              href="/contact"
              className={`flex items-center gap-2 transition-colors ${
                pathname === "/contact" ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
              }`}
            >
              <Mail className="h-4 w-4" />
              Kontak
            </Link>
          </div>

          <button className="flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition-colors">
            <Search className="h-4 w-4" />
            <span className="hidden sm:inline">Cari</span>
          </button>
        </div>
      </div>
    </nav>
  )
}
