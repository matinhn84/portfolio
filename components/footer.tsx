import Link from "next/link"
import { Github, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-gray py-8">
      <div className="container mx-auto px-4 mx-auto w-4/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-xl font-bold">Matin</h3>
              <span className="text-light">matin.hn@gmail.com</span>
            </div>
            <p className="text-light">back-end developer</p>
          </div>

          <div className="mb-4">
            <h3 className="text-right text-xl font-bold mb-4">Media</h3>
            <div className="flex gap-4 justify-end">
              <Link href="https://github.com/matinhn84" target="_blank" rel="noopener noreferrer">
                <Github className="text-white hover:text-purple" size={24} />
              </Link>
              <Link href="https://github.com/matinhn84" target="_blank" rel="noopener noreferrer">
                <Twitter className="text-white hover:text-purple" size={24} />
              </Link>
              <Link href="https://linkedin.com/in/matin-hashemnia-8ab5b335a" target="_blank" rel="noopener noreferrer">
                <Linkedin className="text-white hover:text-purple" size={24} />
              </Link>
            </div>
          </div>
        </div>
          <div className="text-center mt-4">
            <p className="text-light text-sm ">© Copyright 2025. Made by Matin</p>
          </div>
      </div>
    </footer>
  )
}
