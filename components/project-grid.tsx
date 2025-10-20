"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface Project {
  id: string
  title: string
  description: string
  image: string
  category: string
  externalLink?: string
  achievement?: string
  comingSoon?: boolean
  passwordProtected?: boolean
  password?: string
}

interface ProjectGridProps {
  projects: Project[]
  category: string
}

export function ProjectGrid({ projects, category }: ProjectGridProps) {
  const [showPasswordDialog, setShowPasswordDialog] = useState(false)
  const [passwordInput, setPasswordInput] = useState("")
  const [passwordError, setPasswordError] = useState(false)
  const [pendingLink, setPendingLink] = useState("")
  const [pendingPassword, setPendingPassword] = useState("")

  const handlePasswordProtectedClick = (e: React.MouseEvent, link: string, password: string) => {
    e.preventDefault()
    setPendingLink(link)
    setPendingPassword(password)
    setShowPasswordDialog(true)
    setPasswordInput("")
    setPasswordError(false)
  }

  const handlePasswordSubmit = () => {
    if (passwordInput === pendingPassword) {
      window.open(pendingLink, "_blank", "noopener,noreferrer")
      setShowPasswordDialog(false)
      setPasswordInput("")
      setPasswordError(false)
    } else {
      setPasswordError(true)
    }
  }

  const handleDialogClose = () => {
    setShowPasswordDialog(false)
    setPasswordInput("")
    setPasswordError(false)
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => {
          const cardContent = (
            <Card className="border-border bg-background hover:shadow-2xl hover:shadow-foreground/10 transition-all duration-300 shadow-lg shadow-foreground/5 h-full flex flex-col">
              <CardContent className="p-0 flex flex-col h-full">
                <div className="aspect-video bg-muted overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 space-y-3 flex-1 flex flex-col">
                  <h3 className="font-times italic text-xl text-foreground group-hover:opacity-70 transition-opacity">
                    {project.title}
                  </h3>
                  <p className="font-helvetica text-foreground leading-relaxed text-pretty">{project.description}</p>
                  {project.achievement && (
                    <p className="font-helvetica text-sm text-foreground/80 leading-relaxed text-pretty pt-2">
                      {project.achievement}
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          )

          if (project.comingSoon) {
            return (
              <div key={project.id} className="cursor-default">
                {cardContent}
              </div>
            )
          }

          if (project.externalLink && project.passwordProtected && project.password) {
            return (
              <a
                key={project.id}
                href="#"
                onClick={(e) => handlePasswordProtectedClick(e, project.externalLink!, project.password!)}
                className="group"
              >
                {cardContent}
              </a>
            )
          }

          if (project.externalLink) {
            return (
              <a
                key={project.id}
                href={project.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                {cardContent}
              </a>
            )
          }

          return (
            <Link key={project.id} href={`/projects/${category}/${project.id}`} className="group">
              {cardContent}
            </Link>
          )
        })}
      </div>

      <Dialog open={showPasswordDialog} onOpenChange={handleDialogClose}>
        <DialogContent className="sm:max-w-md bg-background border-border">
          <DialogHeader>
            <DialogTitle className="font-times italic text-2xl text-foreground">Enter Password</DialogTitle>
            <DialogDescription className="font-helvetica text-foreground/70">
              This project is password protected. Please enter the password to view.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <Input
              type="password"
              placeholder="Password"
              value={passwordInput}
              onChange={(e) => {
                setPasswordInput(e.target.value)
                setPasswordError(false)
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handlePasswordSubmit()
                }
              }}
              className={`font-helvetica ${passwordError ? "border-red-500" : ""}`}
            />
            {passwordError && (
              <p className="font-helvetica text-sm text-red-500">Incorrect password. Please try again.</p>
            )}
          </div>
          <DialogFooter className="gap-2 sm:gap-0">
            <Button
              type="button"
              variant="outline"
              onClick={handleDialogClose}
              className="font-helvetica border-border bg-transparent"
            >
              Cancel
            </Button>
            <Button
              type="button"
              onClick={handlePasswordSubmit}
              className="font-helvetica bg-foreground text-background hover:bg-foreground/90"
            >
              Submit
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
