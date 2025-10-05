"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
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
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="max-w-2xl">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1
                className="font-serif text-3xl text-foreground text-balance animate-fade-in-up cursor-pointer font-normal"
                onClick={handlePixelClick}
              >
                Hi, I'm Rohan
              </h1>
              <p className="font-times italic text-lg text-foreground/70 animate-fade-in animate-delay-100 font-extralight tracking-tighter">
                Currently in Metz, France
              </p>
              <hr className="border-t border-foreground/20 w-full" />
            </div>

            <p className="font-helvetica text-lg text-foreground leading-relaxed text-pretty animate-fade-in animate-delay-200 opacity-80">
              I'm a rising senior @ Georgia Tech. I major in CS with a focus on ML and Design Systems. I like
              designing/managing products, performing UX research or writing/directing films.
              <br />
              <br />I recently interned as a Product Manager at{" "}
              <Link href="https://arcesium.com" className="underline font-bold" style={{ color: "#6f82d1" }}>
                Arcesium
              </Link>
              , a DE Shaw spinoff, where I helped lead data integrations and dashboards for Private Markets.          
              <br />
               <br />
              You can reach out to me at  <Link href="mailto:rohanbhasin@gatech.edu" className="underline font-bold" style={{ color: "#6f82d1" }}>
                rohanbhasin@gatech.edu
              </Link> or use my socials below!
              
            </p>

            <div className="inline-flex items-center space-x-6 bg-black px-6 py-4 rounded-xl shadow-lg animate-stagger-fade animate-delay-300">
              <Link
                href="https://www.linkedin.com/in/rohan-bhasin-356aa41a0/"
                className="text-gray-400 hover:text-gray-300 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link
                href="https://github.com/Rohanbhasin25"
                className="text-gray-400 hover:text-gray-300 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </Link>
              <Link
                href="https://x.com/the_rohanbhasin"
                className="text-gray-400 hover:text-gray-300 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </Link>
              <Link
                href="mailto:rohanbhasin@gatech.edu"
                className="text-gray-400 hover:text-gray-300 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
