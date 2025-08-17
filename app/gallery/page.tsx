"use client"

import { useState, useEffect } from "react"
import { ArrowLeft, ImageIcon, Award, Users, Trophy, Calendar, Search, Lightbulb, Camera, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import Footer from "@/components/footer"

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [visibleElements, setVisibleElements] = useState(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements((prev) => new Set([...prev, entry.target.id]))
          }
        })
      },
      { threshold: 0.1, rootMargin: "50px" },
    )

    const elements = document.querySelectorAll("[data-animate]")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const categories = [
    { id: "all", name: "All", icon: <ImageIcon className="w-4 h-4" /> },
    { id: "workshops", name: "Workshops", icon: <Award className="w-4 h-4" /> },
    { id: "team", name: "Team Activities", icon: <Users className="w-4 h-4" /> },
    { id: "competitions", name: "Competitions", icon: <Trophy className="w-4 h-4" /> },
    { id: "events", name: "Events", icon: <Calendar className="w-4 h-4" /> },
    { id: "seminars", name: "Seminars", icon: <Lightbulb className="w-4 h-4" /> },
    { id: "hackathons", name: "Hackathons", icon: <Code className="w-4 h-4" /> },
    { id: "networking", name: "Networking", icon: <Camera className="w-4 h-4" /> },
  ]

  const galleryItems = [
    {
      id: 1,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-17%20221146-c3djdDYAyC4NAcx1pqYvrh4fYn2w9X.png",
      alt: "Figma Workshop",
      title: "Introduction to Figma Workshop",
      category: "workshops",
      date: "Oct 27, 2023",
      description: "Students learning design fundamentals with Figma",
    },
    {
      id: 2,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-14%20223324-0KI5TyovEk2vyFyMYfVXN3A2XDIUfS.png",
      alt: "Team Group Photo",
      title: "Annual Schologamma Team Gathering",
      category: "team",
      date: "Aug 14, 2023",
      description: "Complete team photo at our annual gathering",
    },
    {
      id: 3,
      src: "/logic-quest-coding-competition.png",
      alt: "LogicQuest Competition",
      title: "LogicQuest 1.1 - Coding Competition",
      category: "competitions",
      date: "Mar 1, 2024",
      description: "Annual coding competition with exciting challenges",
    },
    {
      id: 4,
      src: "/canva-tutorial-poster.png",
      alt: "Canva Tutorial",
      title: "Advanced Canva Tutorial Session",
      category: "workshops",
      date: "Jan 8, 2024",
      description: "Learning advanced design techniques with Canva",
    },
    {
      id: 5,
      src: "/ai-ml-workshop-poster.png",
      alt: "AI/ML Workshop",
      title: "AI & Machine Learning Workshop",
      category: "workshops",
      date: "Feb 15, 2024",
      description: "Exploring the future of artificial intelligence",
    },
    {
      id: 6,
      src: "/web-dev-bootcamp-poster.png",
      alt: "Web Development Bootcamp",
      title: "Full Stack Web Development Bootcamp",
      category: "workshops",
      date: "Jan 20, 2024",
      description: "Comprehensive web development training program",
    },
    {
      id: 7,
      src: "/digital-marketing-masterclass-poster.png",
      alt: "Digital Marketing Event",
      title: "Digital Marketing Masterclass",
      category: "events",
      date: "Dec 10, 2023",
      description: "Learning modern digital marketing strategies",
    },
    {
      id: 8,
      src: "/professional-male-student.png",
      alt: "Committee Meeting",
      title: "Technical Committee Planning Session",
      category: "team",
      date: "Nov 5, 2023",
      description: "Strategic planning for upcoming technical events",
    },
    {
      id: 9,
      src: "/creative-female-student.png",
      alt: "Creative Session",
      title: "Creative Committee Brainstorming",
      category: "team",
      date: "Oct 15, 2023",
      description: "Ideation session for creative projects",
    },
    {
      id: 10,
      src: "/placeholder.svg?height=300&width=400&text=Blockchain+Seminar",
      alt: "Blockchain Seminar",
      title: "Blockchain Technology Seminar",
      category: "seminars",
      date: "Sep 20, 2023",
      description: "Understanding cryptocurrency and blockchain fundamentals",
    },
    {
      id: 11,
      src: "/placeholder.svg?height=300&width=400&text=Cybersecurity+Workshop",
      alt: "Cybersecurity Workshop",
      title: "Cybersecurity Awareness Workshop",
      category: "seminars",
      date: "Nov 15, 2023",
      description: "Learning about digital security and ethical hacking",
    },
    {
      id: 12,
      src: "/placeholder.svg?height=300&width=400&text=Startup+Pitch",
      alt: "Startup Pitch Competition",
      title: "Innovation Startup Pitch Competition",
      category: "competitions",
      date: "Dec 5, 2023",
      description: "Students presenting innovative startup ideas",
    },
    {
      id: 13,
      src: "/placeholder.svg?height=300&width=400&text=Code+Hackathon",
      alt: "24-Hour Hackathon",
      title: "24-Hour Coding Hackathon",
      category: "hackathons",
      date: "Jan 15, 2024",
      description: "Intensive coding marathon with innovative solutions",
    },
    {
      id: 14,
      src: "/placeholder.svg?height=300&width=400&text=Industry+Meet",
      alt: "Industry Networking",
      title: "Industry Professional Networking Event",
      category: "networking",
      date: "Feb 10, 2024",
      description: "Connecting students with industry professionals",
    },
    {
      id: 15,
      src: "/placeholder.svg?height=300&width=400&text=Alumni+Meet",
      alt: "Alumni Meetup",
      title: "Alumni Success Stories Session",
      category: "networking",
      date: "Mar 20, 2024",
      description: "Learning from successful alumni experiences",
    },
    {
      id: 16,
      src: "/placeholder.svg?height=300&width=400&text=IoT+Workshop",
      alt: "IoT Workshop",
      title: "Internet of Things Workshop",
      category: "workshops",
      date: "Apr 5, 2024",
      description: "Hands-on experience with IoT devices and sensors",
    },
    {
      id: 17,
      src: "/placeholder.svg?height=300&width=400&text=Data+Science",
      alt: "Data Science Seminar",
      title: "Data Science and Analytics Seminar",
      category: "seminars",
      date: "Apr 18, 2024",
      description: "Exploring big data and predictive analytics",
    },
    {
      id: 18,
      src: "/placeholder.svg?height=300&width=400&text=Mobile+Dev",
      alt: "Mobile Development",
      title: "Mobile App Development Bootcamp",
      category: "workshops",
      date: "May 2, 2024",
      description: "Building cross-platform mobile applications",
    },
    {
      id: 19,
      src: "/placeholder.svg?height=300&width=400&text=Game+Jam",
      alt: "Game Development Jam",
      title: "48-Hour Game Development Jam",
      category: "hackathons",
      date: "May 15, 2024",
      description: "Creating innovative games in 48 hours",
    },
    {
      id: 20,
      src: "/placeholder.svg?height=300&width=400&text=Tech+Talk",
      alt: "Tech Talk Series",
      title: "Monthly Tech Talk Series",
      category: "seminars",
      date: "Jun 1, 2024",
      description: "Regular sessions on emerging technologies",
    },
    {
      id: 21,
      src: "/placeholder.svg?height=300&width=400&text=Project+Expo",
      alt: "Project Exhibition",
      title: "Annual Project Exhibition",
      category: "events",
      date: "Jun 20, 2024",
      description: "Showcasing student innovation and creativity",
    },
    {
      id: 22,
      src: "/placeholder.svg?height=300&width=400&text=Mentorship",
      alt: "Mentorship Program",
      title: "Student Mentorship Program Launch",
      category: "networking",
      date: "Jul 5, 2024",
      description: "Connecting junior and senior students for guidance",
    },
    {
      id: 23,
      src: "/placeholder.svg?height=300&width=400&text=Cloud+Computing",
      alt: "Cloud Computing Workshop",
      title: "Cloud Computing and DevOps Workshop",
      category: "workshops",
      date: "Jul 18, 2024",
      description: "Learning cloud platforms and deployment strategies",
    },
    {
      id: 24,
      src: "/placeholder.svg?height=300&width=400&text=Research+Symposium",
      alt: "Research Symposium",
      title: "Student Research Symposium",
      category: "seminars",
      date: "Aug 10, 2024",
      description: "Presenting cutting-edge student research projects",
    },
  ]

  const filteredItems = galleryItems.filter((item) => {
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Header */}
      <div className="relative z-10 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <div className="h-6 w-px bg-gray-600"></div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
                Gallery
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="relative z-10 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className={`${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                      : "border-gray-600 text-gray-300 hover:text-white hover:border-orange-500"
                  } transition-all duration-300`}
                >
                  {category.icon}
                  <span className="ml-2">{category.name}</span>
                </Button>
              ))}
            </div>

            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search gallery..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-gray-900/50 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" data-animate id="gallery-grid">
            {filteredItems.map((item, index) => (
              <Card
                key={item.id}
                className={`bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border-gray-700 hover:border-orange-500 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 hover:shadow-2xl group overflow-hidden ${
                  visibleElements.has("gallery-grid")
                    ? "animate-in slide-in-from-bottom duration-700"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.src || "/placeholder.svg"}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <span className="px-2 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs text-gray-300">
                      {item.date}
                    </span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      size="sm"
                      className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
                    >
                      <ImageIcon className="w-4 h-4 mr-2" />
                      View Full
                    </Button>
                  </div>
                </div>
                <CardContent className="p-4 space-y-2">
                  <h3 className="font-semibold text-white group-hover:text-orange-300 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 text-lg mb-4">No items found</div>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
