"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageCircle } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setSubmitStatus("success")
    setFormData({ name: "", email: "", subject: "", message: "" })

    // Reset status after 3 seconds
    setTimeout(() => setSubmitStatus("idle"), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-6xl">
              Hubungi <span className="text-yellow-300">Saya</span>
            </h1>
            <p className="text-xl text-blue-100 md:text-2xl">
              Mari terhubung dan diskusi tentang teknologi, proyek, atau kolaborasi
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Information */}
            <div>
              <h2 className="mb-8 text-3xl font-bold text-gray-900">Mari Terhubung</h2>

              <div className="mb-8 space-y-6">
                <div className="flex items-start gap-4 rounded-xl bg-white p-6 shadow-lg">
                  <div className="rounded-full bg-blue-100 p-3">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">hello@myblog.com</p>
                    <p className="text-sm text-gray-500">Respon dalam 24 jam</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl bg-white p-6 shadow-lg">
                  <div className="rounded-full bg-green-100 p-3">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Telepon</h3>
                    <p className="text-gray-600">+62 812-3456-7890</p>
                    <p className="text-sm text-gray-500">Senin - Jumat, 09:00 - 17:00</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl bg-white p-6 shadow-lg">
                  <div className="rounded-full bg-purple-100 p-3">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Lokasi</h3>
                    <p className="text-gray-600">Jakarta, Indonesia</p>
                    <p className="text-sm text-gray-500">Available for remote work</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="rounded-xl bg-white p-6 shadow-lg">
                <h3 className="mb-4 text-xl font-semibold text-gray-900">Ikuti Saya</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 text-white hover:bg-gray-800 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-500 text-white hover:bg-sky-600 transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white hover:bg-green-600 transition-colors"
                  >
                    <MessageCircle className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <h2 className="mb-6 text-2xl font-bold text-gray-900">Kirim Pesan</h2>

              {submitStatus === "success" && (
                <div className="mb-6 rounded-lg bg-green-100 p-4 text-green-800">
                  <p className="font-medium">Pesan berhasil dikirim!</p>
                  <p className="text-sm">Terima kasih, saya akan membalas secepatnya.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                      placeholder="Masukkan nama lengkap"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                      placeholder="nama@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="mb-2 block text-sm font-medium text-gray-700">
                    Subjek
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                    placeholder="Topik yang ingin dibahas"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                    placeholder="Tulis pesan Anda di sini..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                      Mengirim...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Kirim Pesan
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16 rounded-2xl bg-white p-8 shadow-lg">
            <h2 className="mb-8 text-3xl font-bold text-gray-900">Pertanyaan Umum</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-2 font-semibold text-gray-900">Berapa lama waktu respon email?</h3>
                <p className="text-gray-600">Saya biasanya membalas email dalam 24 jam pada hari kerja.</p>
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-gray-900">Apakah tersedia untuk proyek freelance?</h3>
                <p className="text-gray-600">
                  Ya, saya terbuka untuk proyek freelance yang menarik dan sesuai dengan keahlian saya.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-gray-900">Bisakah konsultasi gratis?</h3>
                <p className="text-gray-600">Saya menyediakan konsultasi singkat gratis untuk diskusi awal proyek.</p>
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-gray-900">Apakah bisa mentoring?</h3>
                <p className="text-gray-600">
                  Saya senang membantu developer junior melalui mentoring dan code review.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
