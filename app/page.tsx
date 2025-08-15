"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Github, Linkedin, Code, Mail, Phone, MapPin, ExternalLink, ChevronDown, Instagram } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import HeroScene from "../components/hero-scene"
import SkillBar from "../components/skill-bar"
import ProjectModal from "../components/project-modal"
import { ErrorBoundary } from "../components/error-boundary"
import FallbackScene from "../components/fallback-scene"
import Chatbot from "../components/chatbot"

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

const skills = [
  { name: "HTML/CSS", level: 95 },
  { name: "JavaScript", level: 90 },
  { name: "React", level: 88 },
  { name: "Node.js", level: 85 },
  { name: "Python", level: 80 },
  { name: "AI/ML", level: 75 },
]

const services = [
  {
    title: "Landing Page Website",
    // price: "₹8,000 – ₹15,000",
    description: "Modern, responsive single-page websites",
    features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Contact Forms"],
  },
  {
    title: "Business Website",
    // price: "₹15,000 – ₹30,000",
    description: "Professional multi-page business websites",
    features: ["5+ Pages", "CMS Integration", "Analytics", "Mobile Optimized"],
  },
  {
    title: "Portfolio Website",
    // price: "₹12,000 – ₹25,000",
    description: "Stunning portfolio showcases",
    features: ["Interactive Design", "Project Galleries", "Blog Integration", "Social Links"],
  },
  {
    title: "E-commerce Store",
    // price: "₹30,000 – ₹50,000",
    description: "Complete online store setup",
    features: ["Payment Gateway", "Inventory Management", "Order Tracking", "Admin Panel"],
  },
  {
    title: "Custom SaaS MVP",
    // price: "₹50,000 – ₹1,00,000",
    description: "Minimum viable product development",
    features: ["User Authentication", "Database Design", "API Development", "Dashboard"],
  },
  {
    title: "AI-powered SaaS Tool",
    // price: "₹80,000 – ₹1,50,000",
    description: "AI-integrated applications",
    features: ["Machine Learning", "Natural Language Processing", "Data Analytics", "Cloud Deployment"],
  },
]

const projects = [
  {
    id: 1,
    title: "AI-Powered Career Coach",
    description: "AI Career Coach is an AI-powered platform that provides personalized career guidance, skill-gap analysis, and interview preparation.",
    image: "/aicareercoach_img.png",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Gemini API"],
    demo: "https://sens-ai-career-coach-tep9.vercel.app/",
    source: "https://github.com/bitankarak/AI-Career-Coach",
  },
  {
    id: 2,
    title: "Emotion Recognition by Speech",
    description: "This project is a speech emotion recognition system that uses a trained ML model to analyze audio files and predict the speaker’s emotion.",
    image: "/Emotion_recognition_img.png",
    tech: ["Python", "TensorFlow", "Keras", "Librosa" , "Numpy","Pandas"],
    demo: "https://github.com/Bitan02/Emotion_Recognition_from_Speech",
    source: "https://github.com/Bitan02/Emotion_Recognition_from_Speech",
  },
  {
    id: 3,
    title: "Real Time Chat Application",
    description: "Real-Time Chat Application is a responsive, WebSocket-powered platform for instant, secure messaging across devices.",
    image: "/chat_application_img.png",
    tech: ["React", "NodeJS", "Socket io", "MongoDB", "JWT"],
    demo: "https://github.com/Bitan02/Real_Time_Chat_Application_MERN_Stack",
    source: "https://github.com/Bitan02/Real_Time_Chat_Application_MERN_Stack",
  },
  {
    id: 4,
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with payment integration",
    image: "/ecommerce_img.png",
    tech: ["Next.js", "Stripe", "MongoDB", "Tailwind"],
    demo: "https://e-commerce-z34a.vercel.app/",
    source: "https://github.com/Bitan02/E-Commerce",
  },
  // {
  //   id: 5,
  //   title: "Cryptocurrency Tracker",
  //   description: "Real-time crypto portfolio tracking with advanced analytics",
  //   image: "/placeholder.svg?height=300&width=400&text=Crypto+Tracker",
  //   tech: ["Vue.js", "Node.js", "WebSocket", "Chart.js"],
  //   demo: "#",
  //   source: "#",
  // },
  // {
  //   id: 6,
  //   title: "Social Media Dashboard",
  //   description: "Multi-platform social media management and analytics tool",
  //   image: "/placeholder.svg?height=300&width=400&text=Social+Dashboard",
  //   tech: ["React", "GraphQL", "Node.js", "MongoDB"],
  //   demo: "#",
  //   source: "#",
  // },
  // {
  //   id: 7,
  //   title: "IoT Monitoring System",
  //   description: "Real-time IoT device monitoring with data visualization",
  //   image: "/placeholder.svg?height=300&width=400&text=IoT+Monitoring",
  //   tech: ["React", "MQTT", "InfluxDB", "Grafana"],
  //   demo: "#",
  //   source: "#",
  // },
]

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
            >
              Portfolio
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href.slice(1))}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors ${activeSection === item.href.slice(1) ? "text-cyan-400" : "text-gray-300 hover:text-white"
                    }`}
                  whileHover={{ scale: 1.05 }}
                >
                  {item.name}
                  {activeSection === item.href.slice(1) && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500"
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:bg-white/10"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black/40 backdrop-blur-md border-t border-white/10"
            >
              <div className="px-4 py-2 space-y-1">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href.slice(1))}
                    className="block w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-colors"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-blue-500/10 animate-pulse" />
        </div>

        <div className="absolute inset-0 z-10">
          <ErrorBoundary fallback={<FallbackScene />} onError={(error) => console.warn("3D Scene Error:", error)}>
            <HeroScene />
          </ErrorBoundary>
        </div>

        <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
              Hi, I&apos;m Bitan Karak
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl lg:text-3xl font-light mb-8 text-gray-300"
          >
            Full Stack Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl mb-12 text-gray-400 max-w-2xl mx-auto"
          >
            I create responsive, modern, and AI-powered applications that drive business growth
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              View My Work
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Hire Me
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="cursor-pointer"
            onClick={() => scrollToSection("about")}
          >
            <ChevronDown size={32} className="text-cyan-400" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Passionate developer with expertise in modern web technologies and AI integration
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl">
                <CardContent className="p-0">
                  <div className="flex items-center mb-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center mr-6">
                      <Code size={32} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Full Stack Developer</h3>
                      {/* <p className="text-cyan-400">5+ Years Experience</p> */}
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    I specialize in creating modern, scalable web applications using cutting-edge technologies. My
                    expertise spans from frontend frameworks like React and Next.js to backend technologies including
                    Node.js and Python. I&apos;m passionate about integrating AI and machine learning capabilities into web
                    applications to create intelligent, user-centric solutions.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-white mb-8">Technical Skills</h3>
              {skills.map((skill, index) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={index * 0.1} />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Services & Pricing
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Professional development services tailored to your business needs
            </p>
          </motion.div>

          {/* Mobile and Tablet: Grid Layout */}
          <div className="block lg:hidden">
            <div className="grid md:grid-cols-2 gap-8">
              {services.slice(0, 6).map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group"
                >
                  <Card className="h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden transition-all duration-300 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/20">
                    <CardContent className="p-8">
                      <div className="mb-6">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                          {service.title}
                        </h3>
                        {/* <p className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                          {service.price}
                        </p> */}
                      </div>

                      <p className="text-gray-400 mb-6">{service.description}</p>

                      <ul className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-300">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <Button
                        onClick={() => scrollToSection("contact")}
                        className="w-full mt-8 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform group-hover:scale-105"
                      >
                        Get Started
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Desktop: Horizontal Scrollable Layout */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Gradient overlays for scroll indication */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-900 via-gray-900/80 to-transparent z-10 pointer-events-none" />

              <div className="overflow-x-auto scrollbar-hide pb-4">
                <div className="flex gap-8 w-max">
                  {services.map((service, index) => (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -10, scale: 1.02 }}
                      className="group flex-shrink-0 w-80"
                    >
                      <Card className="h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden transition-all duration-300 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/20">
                        <CardContent className="p-8">
                          <div className="mb-6">
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                              {service.title}
                            </h3>
                            {/* <p className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                              {service.price}
                            </p> */}
                          </div>

                          <p className="text-gray-400 mb-6">{service.description}</p>

                          <ul className="space-y-3">
                            {service.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center text-gray-300">
                                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>

                          <Button
                            onClick={() => scrollToSection("contact")}
                            className="w-full mt-8 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform group-hover:scale-105"
                          >
                            Get Started
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Scroll indicator */}
              <div className="flex justify-center mt-6">
                <div className="flex items-center gap-2 text-cyan-400 text-sm">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                  <span>Scroll horizontally to see all services</span>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Showcasing my latest work in web development and AI integration
            </p>
          </motion.div>

          {/* Mobile and Tablet: Grid Layout */}
          <div className="block lg:hidden">
            <div className="grid md:grid-cols-2 gap-8">
              {projects.slice(0, 6).map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, rotateY: 5 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <Card className="h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden transition-all duration-300 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/20">
                    <div className="relative overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={400}
                        height={300}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ExternalLink size={20} className="text-white" />
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30 hover:bg-cyan-500/30"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Desktop: Horizontal Scrollable Layout */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Gradient overlays for scroll indication */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-900 via-gray-900/80 to-transparent z-10 pointer-events-none" />

              <div className="overflow-x-auto scrollbar-hide pb-4">
                <div className="flex gap-8 w-max">
                  {projects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -10, rotateY: 5, scale: 1.02 }}
                      className="group cursor-pointer flex-shrink-0 w-80"
                      onClick={() => setSelectedProject(project)}
                    >
                      <Card className="h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden transition-all duration-300 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/20">
                        <div className="relative overflow-hidden">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            width={400}
                            height={300}
                            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <ExternalLink size={20} className="text-white" />
                          </div>
                        </div>

                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech) => (
                              <Badge
                                key={tech}
                                variant="secondary"
                                className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30 hover:bg-cyan-500/30"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Scroll indicator */}
              <div className="flex justify-center mt-6">
                <div className="flex items-center gap-2 text-cyan-400 text-sm">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                  <span>Scroll horizontally to see more projects</span>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-black/40 to-transparent">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Let&apos;s Work Together
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Ready to bring your ideas to life? Get in touch and let&apos;s create something amazing
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-8">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold text-white mb-8">Send a Message</h3>
                  <form
                    action="https://api.web3forms.com/submit"
                    method="POST"
                    className="space-y-6"
                  >
                    {/* Web3Forms API Key */}
                    <input type="hidden" name="access_key" value="3534a111-9c0a-444b-aa26-27fa0800db01" />

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Input
                          name="name"
                          placeholder="Your Name"
                          required
                          className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-cyan-400 focus:ring-cyan-400/20"
                        />
                      </div>
                      <div>
                        <Input
                          type="email"
                          name="email"
                          placeholder="Your Email"
                          required
                          className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-cyan-400 focus:ring-cyan-400/20"
                        />
                      </div>
                    </div>
                    <div>
                      <Input
                        name="subject"
                        placeholder="Subject"
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-cyan-400 focus:ring-cyan-400/20"
                      />
                    </div>
                    <div>
                      <Textarea
                        name="message"
                        placeholder="Your Message"
                        rows={5}
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-cyan-400 focus:ring-cyan-400/20 resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>


            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mr-4">
                      <Mail size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400">Email</p>
                      <p className="text-white">bitankarak02@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mr-4">
                      <Phone size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400">Phone</p>
                      <p className="text-white">+91 9134249259</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mr-4">
                      <MapPin size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400">Location</p>
                      <p className="text-white">India</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold text-white mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {[
                    { icon: Github, href: "https://github.com/Bitan02/", label: "GitHub" },
                    { icon: Linkedin, href: "linkedin.com/in/bitan-karak-935671272/", label: "LinkedIn" },
                    { icon: Instagram, href: "https://www.instagram.com/bitankarak_18_k/", label: "Instagram" },
                  ].map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">Bitan Karak. All rights reserved. Built with Next.js and Framer Motion.</p>
        </div>
      </footer>

      {/* Project Modal */}
      <ProjectModal project={selectedProject} isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} />
      
      {/* Chatbot */}
      <Chatbot />
    </div>
  )
}
