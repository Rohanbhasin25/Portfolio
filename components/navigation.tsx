"use client"

import type React from "react"

import Link from "next/link"
import { ChevronDown, Sun, Moon } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export function Navigation() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleDarkMode = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)

    if (newIsDark) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  const handlePixelClick = (e: React.MouseEvent<HTMLElement>) => {
    const element = e.currentTarget
    element.classList.remove("pixel-click-animation")
    void element.offsetWidth // Force reflow
    element.classList.add("pixel-click-animation")

    setTimeout(() => {
      element.classList.remove("pixel-click-animation")
    }, 600)
  }

  return (
    <nav className="w-full border-b border-border bg-background animate-fade-in">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left side - Logo/Name */}
          <Link
            href="/"
            className="font-times italic text-foreground hover:opacity-70 transition-opacity animate-stagger-fade animate-delay-100 cursor-pointer font-medium tracking-tighter"
            onClick={handlePixelClick}
          >
            Rohan Bhasin
          </Link>

          {/* Right side - Navigation Links */}
          <div className="flex items-center space-x-8">
            {/* About link */}
            <Link
              href="/about"
              className="font-helvetica text-foreground hover:opacity-70 transition-opacity animate-stagger-fade animate-delay-200 cursor-pointer tracking-tighter"
              onClick={handlePixelClick}
            >
              About
            </Link>

            {/* Projects Dropdown */}
            <DropdownMenu>
              {/* Projects trigger */}
              <DropdownMenuTrigger
                className="flex items-center space-x-1 font-helvetica text-foreground hover:opacity-70 transition-opacity animate-stagger-fade animate-delay-300 cursor-pointer"
                onClick={handlePixelClick}
              >
                <span className="tracking-tighter">Projects</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-background border-border">
                {/* Dropdown items */}
                <DropdownMenuItem asChild>
                  <Link href="/projects/design" className="font-helvetica">
                    Design and Product
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/projects/research" className="font-helvetica">
                    Research
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/projects/film" className="font-helvetica">
                    Film
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Lists Dropdown */}
            <DropdownMenu>
              {/* Lists trigger */}
              <DropdownMenuTrigger
                className="flex items-center space-x-1 font-helvetica text-foreground hover:opacity-70 transition-opacity animate-stagger-fade animate-delay-400 cursor-pointer"
                onClick={handlePixelClick}
              >
                <span className="tracking-tighter">Lists</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-background border-border">
                {/* Dropdown items */}
                <DropdownMenuItem asChild>
                  <Link href="/lists/books" className="font-helvetica">
                    Books
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/lists/film" className="font-helvetica">
                    Film
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="animate-stagger-fade animate-delay-500"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun className="h-5 w-5 text-foreground" /> : <Moon className="h-5 w-5 text-foreground" />}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
