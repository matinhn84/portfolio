import { Mail, Linkedin } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ContactsPage() {
  return (
    <div className="min-h-screen bg-dark text-white font-mono">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <section className="py-16">
          <div className="flex items-center gap-4 mb-8">
            <h1 className="text-3xl font-semibold">
              <span className="text-purple">#</span>contacts
            </h1>
            <div className="flex-grow h-px bg-purple"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-light mb-8">
                I'm interested in freelance opportunities. However, if you have other request or question, don't
                hesitate to contact me.
              </p>

              <div className="border border-gray p-4">
                <h3 className="font-semibold mb-2">Message me here</h3>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <Mail size={16} className="text-light" />
                  </div>
                  <a href="mailto:contact@example.com" className="text-light hover:text-purple">
                    contact@example.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <Linkedin size={16} className="text-light" />
                  </div>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light hover:text-purple"
                  >
                    elias-dev
                  </a>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="dot-pattern absolute top-0 right-0 w-32 h-32 opacity-20"></div>
              <div className="dot-pattern absolute bottom-0 left-0 w-32 h-32 opacity-20"></div>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-xl font-semibold mb-8">All social media</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-gray p-4">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <Mail size={16} className="text-light" />
                  </div>
                  <a href="mailto:contact@example.com" className="text-light hover:text-purple">
                    contact@example.com
                  </a>
                </div>
              </div>
              <div className="border border-gray p-4">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <Linkedin size={16} className="text-light" />
                  </div>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light hover:text-purple"
                  >
                    elias-dev
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
