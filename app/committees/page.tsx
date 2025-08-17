"use client"

import { useState } from "react"
import { Search, ArrowLeft, X, Users, Award, Calendar, Target, TrendingUp, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import Footer from "@/components/footer"

interface Committee {
  id: string
  name: string
  description: string
  fullDescription: string
  logo: string
  color: string
  members: number
  established: string
  focus: string[]
  leadership: {
    head: {
      name: string
      image: string
      bio: string
      achievements: string[]
      contact: { email?: string; phone?: string }
      social: { linkedin?: string; instagram?: string; facebook?: string }
    }
    coHead?: {
      name: string
      image: string
      bio: string
      achievements: string[]
      contact: { email?: string; phone?: string }
      social: { linkedin?: string; instagram?: string; facebook?: string }
    }
  }
  membersList: {
    name: string
    role: string
    image: string
    year: string
  }[]
  achievements: {
    title: string
    description: string
    date: string
    impact: string
  }[]
  events: {
    title: string
    description: string
    date: string
    status: "completed" | "upcoming" | "ongoing"
    image: string
    participants: number
  }[]
  activities: string[]
  gallery: string[]
}

export default function CommitteesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCommittee, setSelectedCommittee] = useState<Committee | null>(null)

  const committees: Committee[] = [
    {
      id: "content-editor",
      name: "Content Editor Committee",
      description: "Managing content creation, editorial processes, and digital storytelling for the forum.",
      fullDescription:
        "The Content Editor Committee is responsible for creating, curating, and managing all written and digital content for Schologamma Forum. We focus on maintaining high-quality standards in communication, documentation, and creative writing while ensuring consistent brand messaging across all platforms.",
      logo: "/placeholder.svg?height=80&width=80&text=📝",
      color: "blue",
      members: 12,
      established: "2020-01-15",
      focus: ["Content Creation", "Editorial Review", "Digital Marketing", "Brand Communication", "Documentation"],
      leadership: {
        head: {
          name: "Priya Sharma",
          image: "/creative-female-student.png",
          bio: "Final year CSE student passionate about content strategy and digital communication. Leading content initiatives for 2+ years.",
          achievements: [
            "Increased forum engagement by 150% through strategic content",
            "Led successful rebranding campaign in 2023",
            "Published 50+ technical articles and tutorials",
          ],
          contact: { email: "priya.content@schologamma.com", phone: "+91 98765 43210" },
          social: { linkedin: "https://linkedin.com/in/priyasharma", instagram: "https://instagram.com/priya_content" },
        },
        coHead: {
          name: "Rahul Verma",
          image: "/professional-male-student.png",
          bio: "Third year student specializing in technical writing and content strategy. Expert in SEO and digital marketing.",
          achievements: [
            "Developed content guidelines and standards",
            "Managed social media growth to 10K+ followers",
            "Created comprehensive documentation system",
          ],
          contact: { email: "rahul.content@schologamma.com" },
          social: { linkedin: "https://linkedin.com/in/rahulverma" },
        },
      },
      membersList: [
        { name: "Anita Patel", role: "Senior Writer", image: "/professional-female-student.png", year: "3rd Year" },
        {
          name: "Vikash Kumar",
          role: "Social Media Manager",
          image: "/professional-male-student-glasses.png",
          year: "2nd Year",
        },
        { name: "Sneha Reddy", role: "Content Reviewer", image: "/creative-female-student.png", year: "4th Year" },
        { name: "Arjun Singh", role: "Technical Writer", image: "/technical-student-laptop.png", year: "3rd Year" },
      ],
      achievements: [
        {
          title: "Best Content Strategy Award 2023",
          description: "Recognized for innovative digital content strategy that increased engagement by 200%",
          date: "2023-12-15",
          impact: "200% engagement increase",
        },
        {
          title: "Successful Forum Rebranding",
          description: "Led complete visual and content rebranding of Schologamma Forum",
          date: "2023-08-20",
          impact: "Enhanced brand recognition",
        },
      ],
      events: [
        {
          title: "Content Writing Workshop",
          description: "Comprehensive workshop on technical and creative writing skills",
          date: "2024-02-15",
          status: "upcoming",
          image: "/web-dev-bootcamp-poster.png",
          participants: 45,
        },
        {
          title: "Digital Marketing Seminar",
          description: "Advanced strategies for social media and content marketing",
          date: "2023-11-10",
          status: "completed",
          image: "/digital-marketing-masterclass-poster.png",
          participants: 60,
        },
      ],
      activities: [
        "Weekly content planning and strategy sessions",
        "Monthly newsletter creation and distribution",
        "Social media content calendar management",
        "Technical documentation and user guides",
        "Event coverage and photography coordination",
      ],
      gallery: ["/canva-tutorial-poster.png", "/digital-marketing-masterclass-poster.png"],
    },
    {
      id: "technical",
      name: "Technical Committee",
      description: "Organizing technical workshops, coding competitions, and innovation-driven events.",
      fullDescription:
        "The Technical Committee is the backbone of Schologamma's technical initiatives. We organize workshops, hackathons, coding competitions, and technical seminars to enhance the programming and technical skills of our community members. Our focus is on emerging technologies, practical learning, and industry-relevant skill development.",
      logo: "/placeholder.svg?height=80&width=80&text=⚙️",
      color: "green",
      members: 15,
      established: "2019-09-01",
      focus: ["Web Development", "AI/ML", "Mobile Development", "DevOps", "Competitive Programming"],
      leadership: {
        head: {
          name: "Danish Chavada",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-17%20221212-XxvN84Yq6G9BBVc2OYj6ZD4xgMyWNH.png",
          bio: "GDSC Lead and final year CSE student with expertise in full-stack development and machine learning. Passionate about teaching and mentoring.",
          achievements: [
            "Led 25+ successful technical workshops",
            "Organized LogicQuest coding competition series",
            "Mentored 100+ students in competitive programming",
          ],
          contact: { email: "danish.tech@schologamma.com", phone: "+91 98765 43211" },
          social: { linkedin: "https://linkedin.com/in/danishchavada", instagram: "https://instagram.com/danish_tech" },
        },
        coHead: {
          name: "Aryan Patel",
          image: "/technical-student-laptop.png",
          bio: "Third year student specializing in AI/ML and data science. Active contributor to open-source projects.",
          achievements: [
            "Published research paper on ML algorithms",
            "Won 3 national-level hackathons",
            "Contributed to 15+ open-source projects",
          ],
          contact: { email: "aryan.tech@schologamma.com" },
          social: { linkedin: "https://linkedin.com/in/aryanpatel" },
        },
      },
      membersList: [
        {
          name: "Kiran Joshi",
          role: "Full Stack Developer",
          image: "/professional-male-student.png",
          year: "4th Year",
        },
        { name: "Meera Gupta", role: "AI/ML Specialist", image: "/professional-female-student.png", year: "3rd Year" },
        {
          name: "Rohit Sharma",
          role: "Mobile App Developer",
          image: "/professional-male-student-glasses.png",
          year: "2nd Year",
        },
        { name: "Divya Nair", role: "DevOps Engineer", image: "/creative-female-student.png", year: "4th Year" },
      ],
      achievements: [
        {
          title: "LogicQuest 1.1 Success",
          description: "Successfully organized annual coding competition with 200+ participants",
          date: "2024-03-01",
          impact: "200+ participants",
        },
        {
          title: "AI/ML Workshop Series",
          description: "Conducted comprehensive workshop series on artificial intelligence and machine learning",
          date: "2023-10-15",
          impact: "150+ students trained",
        },
      ],
      events: [
        {
          title: "Introduction to Figma",
          description: "Design workshop covering Figma fundamentals and UI/UX principles",
          date: "2023-10-27",
          status: "completed",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-17%20221146-c3djdDYAyC4NAcx1pqYvrh4fYn2w9X.png",
          participants: 80,
        },
        {
          title: "LogicQuest 1.1",
          description: "Annual coding competition featuring algorithmic challenges and problem-solving",
          date: "2024-03-01",
          status: "upcoming",
          image: "/logic-quest-coding-competition.png",
          participants: 200,
        },
        {
          title: "AI/ML Workshop",
          description: "Hands-on workshop on machine learning algorithms and practical applications",
          date: "2024-02-20",
          status: "upcoming",
          image: "/ai-ml-workshop-poster.png",
          participants: 120,
        },
      ],
      activities: [
        "Weekly coding practice sessions and algorithm discussions",
        "Monthly technical seminars on emerging technologies",
        "Hackathon organization and participation coordination",
        "Open-source project development and contribution",
        "Industry expert sessions and networking events",
      ],
      gallery: ["/logic-quest-coding-competition.png", "/ai-ml-workshop-poster.png"],
    },
    {
      id: "creative",
      name: "Creative Committee",
      description: "Handling design, graphics, multimedia content, and creative project development.",
      fullDescription:
        "The Creative Committee brings artistic vision to life through innovative design solutions, multimedia content creation, and creative project management. We handle all visual aspects of the forum including branding, event posters, social media graphics, and creative campaigns that represent Schologamma's dynamic spirit.",
      logo: "/placeholder.svg?height=80&width=80&text=🎨",
      color: "pink",
      members: 10,
      established: "2020-03-10",
      focus: ["Graphic Design", "Video Production", "Photography", "Brand Identity", "Creative Campaigns"],
      leadership: {
        head: {
          name: "Kavya Mehta",
          image: "/creative-female-student.png",
          bio: "Final year student with expertise in graphic design and brand strategy. Leading creative initiatives with innovative design solutions.",
          achievements: [
            "Designed award-winning forum branding",
            "Created 100+ event posters and graphics",
            "Led successful visual identity redesign",
          ],
          contact: { email: "kavya.creative@schologamma.com", phone: "+91 98765 43212" },
          social: { linkedin: "https://linkedin.com/in/kavyamehta", instagram: "https://instagram.com/kavya_designs" },
        },
      },
      membersList: [
        { name: "Ravi Kumar", role: "Video Editor", image: "/professional-male-student.png", year: "3rd Year" },
        { name: "Pooja Singh", role: "Graphic Designer", image: "/professional-female-student.png", year: "2nd Year" },
        { name: "Amit Jain", role: "Photographer", image: "/professional-male-student-glasses.png", year: "4th Year" },
        { name: "Nisha Patel", role: "UI/UX Designer", image: "/creative-female-student.png", year: "3rd Year" },
      ],
      achievements: [
        {
          title: "Best Design Portfolio 2023",
          description: "Recognition for outstanding creative work and design innovation",
          date: "2023-11-20",
          impact: "Enhanced visual brand identity",
        },
      ],
      events: [
        {
          title: "Canva Advanced Tutorial",
          description: "Advanced design techniques and creative workflows using Canva",
          date: "2024-01-08",
          status: "completed",
          image: "/canva-tutorial-poster.png",
          participants: 65,
        },
        {
          title: "Photography Workshop",
          description: "Professional photography techniques and post-processing skills",
          date: "2024-02-25",
          status: "upcoming",
          image: "/web-dev-bootcamp-poster.png",
          participants: 40,
        },
      ],
      activities: [
        "Event poster and promotional material design",
        "Social media graphics and content creation",
        "Photography and videography for events",
        "Brand identity development and maintenance",
        "Creative campaign planning and execution",
      ],
      gallery: ["/canva-tutorial-poster.png"],
    },
  ]

  const filteredCommittees = committees.filter(
    (committee) =>
      committee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      committee.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      committee.focus.some((focus) => focus.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "from-blue-500/20 to-purple-500/20 border-blue-500/30",
      green: "from-green-500/20 to-teal-500/20 border-green-500/30",
      pink: "from-pink-500/20 to-rose-500/20 border-pink-500/30",
      orange: "from-orange-500/20 to-yellow-500/20 border-orange-500/30",
      indigo: "from-indigo-500/20 to-blue-500/20 border-indigo-500/30",
      emerald: "from-emerald-500/20 to-green-500/20 border-emerald-500/30",
    }
    return colorMap[color] || colorMap.blue
  }

  const getStatusColor = (status: string) => {
    const statusMap = {
      completed: "bg-green-500/20 text-green-400 border-green-500/30",
      ongoing: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
      upcoming: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    }
    return statusMap[status] || statusMap.upcoming
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-orange-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)] animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-orange-400 rounded-full animate-ping animation-delay-1000"></div>
          <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping animation-delay-2000"></div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 bg-black/80 backdrop-blur-md border-b border-gray-800 sticky top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Home</span>
              </Link>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Committees
              </span>
            </div>

            <div className="w-24"></div>
          </div>
        </div>
      </nav>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-blue-400 to-orange-400 bg-clip-text text-transparent">
            Our Committees
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the dedicated teams that drive Schologamma's success. Each committee brings unique expertise and
            passion to create meaningful impact in our community.
          </p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search committees, focus areas..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-gray-900/50 border-gray-700 text-white placeholder-gray-400 focus:border-purple-500 transition-colors h-12"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredCommittees.map((committee) => (
            <Card
              key={committee.id}
              className={`bg-gradient-to-br ${getColorClasses(committee.color)} backdrop-blur-sm border transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 hover:shadow-2xl group cursor-pointer`}
            >
              <CardContent className="p-6 text-center space-y-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Committee Logo */}
                <div className="relative z-10">
                  <div className="w-28 h-28 mx-auto mb-4 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <img
                      src={committee.logo || "/placeholder.svg"}
                      alt={`${committee.name} logo`}
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                </div>

                {/* Committee Name */}
                <h3 className="text-lg font-bold text-white group-hover:text-orange-300 transition-colors duration-300 relative z-10">
                  {committee.name}
                </h3>

                {/* Small About Description */}
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 text-sm leading-relaxed relative z-10">
                  {committee.description}
                </p>

                {/* Member Count */}
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300 relative z-10">
                  <Users className="w-4 h-4" />
                  <span>{committee.members} Active Members</span>
                </div>

                {/* Focus Areas Tags */}
                <div className="flex flex-wrap gap-1 justify-center relative z-10">
                  {committee.focus.slice(0, 3).map((focus, index) => (
                    <Badge
                      key={index}
                      className="text-xs bg-white/10 text-gray-300 border-white/20 hover:bg-white/20 transition-colors"
                    >
                      {focus}
                    </Badge>
                  ))}
                  {committee.focus.length > 3 && (
                    <Badge className="text-xs bg-white/10 text-gray-300 border-white/20">
                      +{committee.focus.length - 3} more
                    </Badge>
                  )}
                </div>

                {/* See Details Button */}
                <Button
                  onClick={() => setSelectedCommittee(committee)}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 transform group-hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 relative z-10"
                >
                  See Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Committee Detail Modal */}
      {selectedCommittee && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-gray-900 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto border border-gray-700">
            <div className="relative">
              <div
                className={`h-32 bg-gradient-to-r ${getColorClasses(selectedCommittee.color)} rounded-t-2xl flex items-center justify-center`}
              >
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <img
                      src={selectedCommittee.logo || "/placeholder.svg"}
                      alt={`${selectedCommittee.name} logo`}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <h2 className="text-3xl font-bold text-white">{selectedCommittee.name}</h2>
                </div>
              </div>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedCommittee(null)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            <div className="p-8">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-5 bg-gray-800">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="leadership">Leadership</TabsTrigger>
                  <TabsTrigger value="members">Members</TabsTrigger>
                  <TabsTrigger value="events">Events</TabsTrigger>
                  <TabsTrigger value="achievements">Achievements</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6 mt-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">About</h3>
                    <p className="text-gray-300 leading-relaxed">{selectedCommittee.fullDescription}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Focus Areas</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedCommittee.focus.map((focus, index) => (
                        <Badge key={index} className="bg-purple-500/20 text-purple-400 border-purple-500/30">
                          {focus}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Key Activities</h3>
                    <ul className="space-y-2">
                      {selectedCommittee.activities.map((activity, index) => (
                        <li key={index} className="flex items-start space-x-3 text-gray-300">
                          <Target className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 text-center">
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <Users className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-white">{selectedCommittee.members}</div>
                      <div className="text-gray-400">Active Members</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <Calendar className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-white">
                        {new Date().getFullYear() - new Date(selectedCommittee.established).getFullYear()}
                      </div>
                      <div className="text-gray-400">Years Active</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <Award className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-white">{selectedCommittee.achievements.length}</div>
                      <div className="text-gray-400">Major Achievements</div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="leadership" className="space-y-6 mt-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Head */}
                    <Card className="bg-gray-800/50 border-gray-700">
                      <CardContent className="p-6 text-center space-y-4">
                        <Badge className="bg-red-500/20 text-red-400 border-red-500/30">Committee Head</Badge>
                        <div className="w-24 h-24 mx-auto">
                          <img
                            src={selectedCommittee.leadership.head.image || "/placeholder.svg"}
                            alt={selectedCommittee.leadership.head.name}
                            className="w-full h-full rounded-full object-cover border-2 border-purple-500"
                          />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-white">{selectedCommittee.leadership.head.name}</h4>
                          <p className="text-gray-300 text-sm mt-2">{selectedCommittee.leadership.head.bio}</p>
                        </div>

                        <div className="space-y-2">
                          {selectedCommittee.leadership.head.contact.email && (
                            <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
                              <Mail className="w-4 h-4" />
                              <span>{selectedCommittee.leadership.head.contact.email}</span>
                            </div>
                          )}
                          {selectedCommittee.leadership.head.contact.phone && (
                            <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
                              <Phone className="w-4 h-4" />
                              <span>{selectedCommittee.leadership.head.contact.phone}</span>
                            </div>
                          )}
                        </div>

                        <div>
                          <h5 className="text-sm font-semibold text-white mb-2">Key Achievements</h5>
                          <ul className="space-y-1 text-xs text-gray-400">
                            {selectedCommittee.leadership.head.achievements.slice(0, 3).map((achievement, index) => (
                              <li key={index} className="flex items-start space-x-2">
                                <Award className="w-3 h-3 text-orange-400 mt-0.5 flex-shrink-0" />
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex justify-center space-x-3">
                          {selectedCommittee.leadership.head.social.linkedin && (
                            <a
                              href={selectedCommittee.leadership.head.social.linkedin}
                              className="text-blue-400 hover:text-blue-300 transition-colors"
                            >
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.564v11.452zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                              </svg>
                            </a>
                          )}
                          {selectedCommittee.leadership.head.social.instagram && (
                            <a
                              href={selectedCommittee.leadership.head.social.instagram}
                              className="text-pink-400 hover:text-pink-300 transition-colors"
                            >
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.315 0-.612-.123-.837-.348-.225-.225-.348-.522-.348-.837s.123-.612.348-.837c.225-.225.522-.348.837-.348s.612.123.837.348c.225.225.348.522.348.837s-.123.612-.348.837c-.225.225-.522.348-.837.348z" />
                              </svg>
                            </a>
                          )}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Co-Head */}
                    {selectedCommittee.leadership.coHead && (
                      <Card className="bg-gray-800/50 border-gray-700">
                        <CardContent className="p-6 text-center space-y-4">
                          <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">Co-Head</Badge>
                          <div className="w-24 h-24 mx-auto">
                            <img
                              src={selectedCommittee.leadership.coHead.image || "/placeholder.svg"}
                              alt={selectedCommittee.leadership.coHead.name}
                              className="w-full h-full rounded-full object-cover border-2 border-blue-500"
                            />
                          </div>
                          <div>
                            <h4 className="text-xl font-bold text-white">{selectedCommittee.leadership.coHead.name}</h4>
                            <p className="text-gray-300 text-sm mt-2">{selectedCommittee.leadership.coHead.bio}</p>
                          </div>

                          <div className="space-y-2">
                            {selectedCommittee.leadership.coHead.contact.email && (
                              <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
                                <Mail className="w-4 h-4" />
                                <span>{selectedCommittee.leadership.coHead.contact.email}</span>
                              </div>
                            )}
                            {selectedCommittee.leadership.coHead.contact.phone && (
                              <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
                                <Phone className="w-4 h-4" />
                                <span>{selectedCommittee.leadership.coHead.contact.phone}</span>
                              </div>
                            )}
                          </div>

                          <div>
                            <h5 className="text-sm font-semibold text-white mb-2">Key Achievements</h5>
                            <ul className="space-y-1 text-xs text-gray-400">
                              {selectedCommittee.leadership.coHead.achievements
                                .slice(0, 3)
                                .map((achievement, index) => (
                                  <li key={index} className="flex items-start space-x-2">
                                    <Award className="w-3 h-3 text-orange-400 mt-0.5 flex-shrink-0" />
                                    <span>{achievement}</span>
                                  </li>
                                ))}
                            </ul>
                          </div>
                          <div className="flex justify-center space-x-3">
                            {selectedCommittee.leadership.coHead.social.linkedin && (
                              <a
                                href={selectedCommittee.leadership.coHead.social.linkedin}
                                className="text-blue-400 hover:text-blue-300 transition-colors"
                              >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                              </a>
                            )}
                            {selectedCommittee.leadership.coHead.social.instagram && (
                              <a
                                href={selectedCommittee.leadership.coHead.social.instagram}
                                className="text-pink-400 hover:text-pink-300 transition-colors"
                              >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.315 0-.612-.123-.837-.348-.225-.225-.348-.522-.348-.837s.123-.612.348-.837c.225-.225.522-.348.837-.348s.612.123.837.348c.225.225.348.522.348.837s-.123.612-.348.837c-.225.225-.522.348-.837.348z" />
                                </svg>
                              </a>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                </TabsContent>

                <TabsContent value="members" className="space-y-6 mt-6">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {selectedCommittee.membersList.map((member, index) => (
                      <Card key={index} className="bg-gray-800/50 border-gray-700">
                        <CardContent className="p-4 text-center space-y-3">
                          <div className="w-16 h-16 mx-auto">
                            <img
                              src={member.image || "/placeholder.svg"}
                              alt={member.name}
                              className="w-full h-full rounded-full object-cover border-2 border-gray-600"
                            />
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-white">{member.name}</h4>
                            <p className="text-xs text-purple-400">{member.role}</p>
                            <p className="text-xs text-gray-400">{member.year}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="events" className="space-y-6 mt-6">
                  <div className="space-y-4">
                    {selectedCommittee.events.map((event, index) => (
                      <Card key={index} className="bg-gray-800/50 border-gray-700">
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex space-x-4">
                              <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                                <img
                                  src={event.image || "/placeholder.svg"}
                                  alt={event.title}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="flex-1">
                                <h4 className="text-lg font-bold text-white mb-2">{event.title}</h4>
                                <p className="text-gray-300 mb-3">{event.description}</p>
                                <div className="flex items-center space-x-4 text-sm text-gray-400">
                                  <div className="flex items-center space-x-1">
                                    <Calendar className="w-4 h-4" />
                                    <span>{new Date(event.date).toLocaleDateString()}</span>
                                  </div>
                                  <div className="flex items-center space-x-1">
                                    <Users className="w-4 h-4" />
                                    <span>{event.participants} participants</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <Badge className={getStatusColor(event.status)}>
                              {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                            </Badge>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="achievements" className="space-y-6 mt-6">
                  <div className="space-y-4">
                    {selectedCommittee.achievements.map((achievement, index) => (
                      <Card key={index} className="bg-gray-800/50 border-gray-700">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <Award className="w-6 h-6 text-orange-400 mt-1 flex-shrink-0" />
                            <div className="flex-1">
                              <h4 className="text-lg font-bold text-white mb-2">{achievement.title}</h4>
                              <p className="text-gray-300 mb-3">{achievement.description}</p>
                              <div className="flex items-center justify-between text-sm">
                                <div className="flex items-center space-x-1 text-gray-400">
                                  <Calendar className="w-4 h-4" />
                                  <span>{new Date(achievement.date).toLocaleDateString()}</span>
                                </div>
                                <div className="flex items-center space-x-1 text-green-400">
                                  <TrendingUp className="w-4 h-4" />
                                  <span>{achievement.impact}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  )
}
