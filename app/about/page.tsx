import { User, Code, Coffee, Heart, MapPin, Calendar, Mail } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="h-32 w-32 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <User className="h-16 w-16 text-white" />
                </div>
                <div className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-green-500 border-4 border-white"></div>
              </div>
            </div>
            <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-6xl">
              Tentang <span className="text-yellow-300">Saya</span>
            </h1>
            <p className="text-xl text-blue-100 md:text-2xl">
              Seorang developer yang passionate tentang teknologi dan berbagi pengetahuan
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl">
          {/* Introduction */}
          <div className="mb-16 rounded-2xl bg-white p-8 shadow-lg">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">Halo! 👋</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Selamat datang di blog pribadi saya! Nama saya adalah seorang developer yang memiliki passion besar
                terhadap dunia teknologi, khususnya dalam pengembangan web dan aplikasi mobile.
              </p>
              <p className="mb-4">
                Saya percaya bahwa berbagi pengetahuan adalah salah satu cara terbaik untuk terus belajar dan
                berkembang. Melalui blog ini, saya ingin berbagi pengalaman, tips, dan insight yang saya dapatkan selama
                perjalanan karir sebagai developer.
              </p>
              <p>
                Ketika tidak sedang coding, saya senang membaca buku, menjelajahi teknologi baru, dan menghabiskan waktu
                dengan keluarga. Saya juga aktif dalam komunitas developer lokal dan sering menghadiri meetup serta
                conference.
              </p>
            </div>
          </div>

          {/* Skills & Interests */}
          <div className="mb-16 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <div className="mb-6 flex items-center gap-3">
                <Code className="h-6 w-6 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900">Keahlian Teknis</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="mb-2 font-semibold text-gray-800">Frontend Development</h4>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"].map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-gray-800">Backend Development</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Node.js", "Python", "PostgreSQL", "MongoDB", "Express.js"].map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-gray-800">Tools & Others</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Git", "Docker", "AWS", "Figma", "Linux"].map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <div className="mb-6 flex items-center gap-3">
                <Heart className="h-6 w-6 text-red-600" />
                <h3 className="text-2xl font-bold text-gray-900">Minat & Hobi</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3">
                  <Coffee className="h-5 w-5 text-amber-600" />
                  <span>Coffee enthusiast - selalu mencari kopi terbaik</span>
                </li>
                <li className="flex items-center gap-3">
                  <User className="h-5 w-5 text-blue-600" />
                  <span>Aktif dalam komunitas developer</span>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-green-600" />
                  <span>Traveling dan fotografi</span>
                </li>
                <li className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-purple-600" />
                  <span>Membaca buku teknologi dan self-improvement</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Journey Timeline */}
          <div className="mb-16 rounded-2xl bg-white p-8 shadow-lg">
            <h3 className="mb-8 text-3xl font-bold text-gray-900">Perjalanan Karir</h3>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="h-4 w-4 rounded-full bg-blue-600"></div>
                  <div className="h-16 w-px bg-gray-300"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">2024 - Sekarang</h4>
                  <p className="text-blue-600 font-medium">Senior Full Stack Developer</p>
                  <p className="text-gray-600">Memimpin tim development dan mentoring junior developers</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="h-4 w-4 rounded-full bg-green-600"></div>
                  <div className="h-16 w-px bg-gray-300"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">2022 - 2024</h4>
                  <p className="text-green-600 font-medium">Full Stack Developer</p>
                  <p className="text-gray-600">Mengembangkan aplikasi web dan mobile untuk berbagai klien</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="h-4 w-4 rounded-full bg-purple-600"></div>
                  <div className="h-16 w-px bg-gray-300"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">2020 - 2022</h4>
                  <p className="text-purple-600 font-medium">Frontend Developer</p>
                  <p className="text-gray-600">
                    Fokus pada pengembangan user interface yang responsive dan user-friendly
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="h-4 w-4 rounded-full bg-amber-600"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">2019 - 2020</h4>
                  <p className="text-amber-600 font-medium">Junior Developer</p>
                  <p className="text-gray-600">Memulai karir sebagai developer dan belajar fundamental programming</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-center text-white">
            <h3 className="mb-4 text-2xl font-bold">Mari Terhubung!</h3>
            <p className="mb-6 text-blue-100">
              Saya selalu terbuka untuk diskusi tentang teknologi, kolaborasi proyek, atau sekadar ngobrol santai
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-medium text-blue-600 hover:bg-gray-100 transition-colors"
            >
              <Mail className="h-4 w-4" />
              Hubungi Saya
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
