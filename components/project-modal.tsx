"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface Project {
  id: number
  title: string
  description: string
  image: string
  tech: string[]
  link?: string
  demo?: string
  source?: string
}

interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={800}
                height={400}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2"
              >
                <X size={20} />
              </Button>
            </div>

            <div className="p-8">
              <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">{project.description}</p>

              <div className="mb-8">
                <h4 className="text-xl font-semibold text-white mb-4">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30 px-3 py-1 text-sm"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                {((project.demo || project.link) && (
                  <Button asChild className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 rounded-xl transition-all duration-300">
                    <a href={(project.demo || project.link) as string} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={20} className="mr-2" />
                      Live Demo
                    </a>
                  </Button>
                )) || null}

                {(project.source && (
                  <Button
                    asChild
                    variant="outline"
                    className="flex-1 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-semibold py-3 rounded-xl transition-all duration-300 bg-transparent"
                  >
                    <a href={project.source} target="_blank" rel="noopener noreferrer">
                      <Github size={20} className="mr-2" />
                      Source Code
                    </a>
                  </Button>
                )) || null}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
