"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header>
      <div className="container mx-auto px-4 py-4 w-[80%]">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-white">
            Matin
          </Link>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/#" className="text-white hover:text-purple">
              <span className="text-purple">#</span>home
            </Link>
            <Link href="/#projects" className="text-white hover:text-purple">
              <span className="text-purple">#</span>projects
            </Link>
            <Link href="/#about-me" className="text-white hover:text-purple">
              <span className="text-purple">#</span>about-me
            </Link>
            <Link href="/#contacts" className="text-white hover:text-purple">
              <span className="text-purple">#</span>contacts
            </Link>
            <Button variant="ghost" className="text-white hover:text-purple">
              <span className="text-purple">en</span>
            </Button>
          </nav>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray mt-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/#" className="text-white hover:text-purple">
                <span className="text-purple">#</span>home
              </Link>
              <Link href="/#projects" className="text-white hover:text-purple">
                <span className="text-purple">#</span>projects
              </Link>
              <Link href="/#about-me" className="text-white hover:text-purple">
                <span className="text-purple">#</span>about-me
              </Link>
              <Link href="/#contacts" className="text-white hover:text-purple">
                <span className="text-purple">#</span>contacts
              </Link>
              <Button variant="ghost" className="text-white hover:text-purple w-fit">
                <span className="text-purple">en</span>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
