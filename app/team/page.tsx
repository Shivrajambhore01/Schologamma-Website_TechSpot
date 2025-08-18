"use client"

import { useState } from "react"
import { Search, Filter, ArrowLeft, X, ChevronDown, Mail, Phone, Calendar, Award, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import Footer from "@/components/footer"

interface TeamMember {
  id: string
  name: string
  role: string
  committee: string
  position: "Admin" | "Head" | "Co-Head" | "Member"
  image: string
  bio: string
  dob: string
  email: string
  phone: string
  // achievements: string[]
  responsibilities: string[]
  social: {
    linkedin?: string
    instagram?: string
    facebook?: string
    twitter?: string
  }
  // joinDate: string
  skills: string[]
}

export default function TeamPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCommittee, setSelectedCommittee] = useState("all")
  const [selectedPosition, setSelectedPosition] = useState("all")
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const teamMembers: TeamMember[] = [
    {
      id: "1",
      name: "Devanshu",
      role: "President",
      committee: "Executive Board",
      position: "Admin",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-17%20221212-XxvN84Yq6G9BBVc2OYj6ZD4xgMyWNH.png",
      bio: "Passionate leader with a vision to transform the student experience at JD College. Leading Schologamma Forum towards innovation and excellence in technical education and community building.",
      dob: "1998-03-15",
      email: "devanshu@schologamma.com",
      phone: "+91 98765 43210",
      // achievements: [
      //   "Led 50+ successful events",
      //   "Increased forum membership by 200%",
      //   "Winner of Best Student Leader Award 2023",
      //   "Published research paper on AI in Education",
      // ],
      responsibilities: [
        "Overall forum leadership and strategic planning",
        "Coordination with college administration",
        "Event planning and execution oversight",
        "Member mentorship and development",
      ],
      social: {
        linkedin: "https://linkedin.com/in/devanshu",
        instagram: "https://instagram.com/devanshu",
        facebook: "https://facebook.com/devanshu",
      },
      // joinDate: "2022-08-01",
      skills: ["Leadership", "Public Speaking", "Project Management", "Strategic Planning"],
    },
    {
      id: "2",
      name: "Shifa",
      role: "Vice-President",
      committee: "Executive Board",
      position: "Admin",
      image: "/placeholder-mxq9p.png",
      bio: "Dynamic vice-president focused on operational excellence and team coordination. Specializes in event management and student engagement initiatives.",
      dob: "1999-07-22",
      email: "shifa@schologamma.com",
      phone: "+91 98765 43211",
      // achievements: [
      //   "Organized 30+ workshops and seminars",
      //   "Excellence in Team Management Award",
      //   "Increased student participation by 150%",
      //   "Led successful fundraising campaigns",
      // ],
      responsibilities: [
        "Assist president in strategic decisions",
        "Coordinate between different committees",
        "Event logistics and management",
        "Student welfare and engagement",
      ],
      social: {
        linkedin: "https://linkedin.com/in/shifa",
        instagram: "https://instagram.com/shifa",
        facebook: "https://facebook.com/shifa",
      },
      // joinDate: "2022-08-01",
      skills: ["Event Management", "Team Coordination", "Communication", "Problem Solving"],
    },
    {
      id: "3",
      name: "Kalyani",
      role: "Secretary",
      committee: "Executive Board",
      position: "Admin",
      image: "/professional-female-student.png",
      bio: "Meticulous secretary ensuring smooth operations and maintaining comprehensive records. Expert in documentation and administrative processes.",
      dob: "1999-01-10",
      email: "kalyani@schologamma.com",
      phone: "+91 98765 43212",
      // achievements: [
      //   "Streamlined documentation processes",
      //   "Maintained 100% meeting attendance record",
      //   "Implemented digital record-keeping system",
      //   "Best Administrative Support Award",
      // ],
      responsibilities: [
        "Meeting documentation and minutes",
        "Maintain member records and databases",
        "Coordinate official communications",
        "Administrative support to all committees",
      ],
      social: {
        linkedin: "https://linkedin.com/in/kalyani",
        instagram: "https://instagram.com/kalyani",
        facebook: "https://facebook.com/kalyani",
      },
      // joinDate: "2022-08-01",
      skills: ["Documentation", "Organization", "Communication", "Database Management"],
    },
    {
      id: "4",
      name: "Om",
      role: "Treasurer",
      committee: "Executive Board",
      position: "Admin",
      image: "/professional-male-student.png",
      bio: "Financial expert managing forum budgets and ensuring transparent financial operations. Skilled in budget planning and resource allocation.",
      dob: "1998-11-05",
      email: "om@schologamma.com",
      phone: "+91 98765 43213",
      // achievements: [
      //   "Managed ₹5L+ annual budget efficiently",
      //   "Reduced operational costs by 20%",
      //   "Implemented transparent financial reporting",
      //   "Excellence in Financial Management Award",
      // ],
      responsibilities: [
        "Budget planning and management",
        "Financial reporting and transparency",
        "Vendor negotiations and contracts",
        "Fundraising and sponsorship coordination",
      ],
      social: {
        linkedin: "https://linkedin.com/in/om",
        instagram: "https://instagram.com/om",
        facebook: "https://facebook.com/om",
      },
      // joinDate: "2022-08-01",
      skills: ["Financial Management", "Budget Planning", "Analytics", "Negotiation"],
    },
    {
      id: "5",
      name: "Prathamesh",
      role: "Joint-Treasurer",
      committee: "Executive Board",
      position: "Admin",
      image: "/professional-male-student-glasses.png",
      bio: "Assistant treasurer supporting financial operations and maintaining detailed financial records. Expert in financial analysis and reporting.",
      dob: "1999-04-18",
      email: "prathamesh@schologamma.com",
      phone: "+91 98765 43214",
      // achievements: [
      //   "Assisted in managing ₹5L+ budget",
      //   "Developed financial tracking systems",
      //   "Improved expense reporting accuracy",
      //   "Outstanding Support Staff Award",
      // ],
      responsibilities: [
        "Assist in budget management",
        "Maintain financial records",
        "Expense tracking and reporting",
        "Support fundraising activities",
      ],
      social: {
        linkedin: "https://linkedin.com/in/prathamesh",
        instagram: "https://instagram.com/prathamesh",
        facebook: "https://facebook.com/prathamesh",
      },
      // joinDate: "2022-09-01",
      skills: ["Financial Analysis", "Record Keeping", "Excel", "Attention to Detail"],
    },
    {
      id: "6",
      name: "Piyush Kolte",
      role: "Joint-Secretary",
      committee: "Executive Board",
      position: "Admin",
      image: "20240924_094947 - Piyush Kolte (1).jpg",
      bio: "Joint-secretary providing administrative support and ensuring efficient communication across all committees and members.",
      dob: "2006-06-01",
      email: "piyushkolthe05@gmail.com",
      phone: "+91 9370591452",
      // achievements: [
      //   "Improved inter-committee communication",
      //   "Streamlined administrative processes",
      //   "Maintained comprehensive member database",
      //   "Best Administrative Assistant Award",
      // ],
      responsibilities: [
        "Assist secretary in documentation",
        "Coordinate committee communications",
        "Maintain member attendance records",
        "Support event administrative tasks",
      ],
      social: {
        linkedin: "https://www.linkedin.com/in/shivraj-ambhore",
        instagram: "https://www.instagram.com/piyush_kolte01?igsh=MWF2YWgxYmx4a3UxOA==",
        facebook: "/team",
      },
      // joinDate: "2022-09-01",
      skills: ["Administration", "Communication", "Organization", "Database Management"],
    },
    {
      id: "7",
      name: "Mansi",
      role: "Spoke Person",
      committee: "Public Relations",
      position: "Admin",
      image: "/female-student-spokesperson.png",
      bio: "Official spokesperson representing Schologamma Forum in media interactions and public communications. Expert in public relations and media management.",
      dob: "1999-06-30",
      email: "mansi@schologamma.com",
      phone: "+91 98765 43216",
      // achievements: [
      //   "Represented forum in 20+ media interviews",
      //   "Increased social media engagement by 300%",
      //   "Best Public Speaker Award 2023",
      //   "Successfully managed crisis communications",
      // ],
      responsibilities: [
        "Official forum representation",
        "Media relations and communications",
        "Social media strategy and management",
        "Public speaking and presentations",
      ],
      social: {
        linkedin: "https://linkedin.com/in/mansi",
        instagram: "https://instagram.com/mansi",
        facebook: "https://facebook.com/mansi",
        twitter: "https://twitter.com/mansi",
      },
      // joinDate: "2022-08-15",
      skills: ["Public Speaking", "Media Relations", "Social Media", "Communication Strategy"],
    },
    {
      id: "8",
      name: "Arjun Sharma",
      role: "Technical Head",
      committee: "Technical Committee",
      position: "Head",
      image: "/technical-student-laptop.png",
      bio: "Leading the technical committee with expertise in software development and emerging technologies. Passionate about innovation and technical education.",
      dob: "1999-02-14",
      email: "arjun@schologamma.com",
      phone: "+91 98765 43217",
      // achievements: [
      //   "Led 25+ technical workshops",
      //   "Developed forum's official website",
      //   "Winner of State-level Hackathon",
      //   "Published 3 technical articles",
      // ],
      responsibilities: [
        "Lead technical committee activities",
        "Organize coding competitions and hackathons",
        "Mentor junior developers",
        "Coordinate with industry experts",
      ],
      social: {
        linkedin: "https://linkedin.com/in/arjun-sharma",
        instagram: "https://instagram.com/arjun",
        facebook: "https://facebook.com/arjun",
      },
      // joinDate: "2022-09-15",
      skills: ["Full Stack Development", "AI/ML", "Cloud Computing", "Technical Leadership"],
    },
    {
      id: "9",
      name: "Priya Patel",
      role: "Creative Head",
      committee: "Creative Committee",
      position: "Head",
      image: "/creative-female-student.png",
      bio: "Creative visionary leading design initiatives and brand development for the forum. Expert in graphic design and creative strategy.",
      dob: "1999-05-20",
      email: "priya@schologamma.com",
      phone: "+91 98765 43218",
      // achievements: [
      //   "Designed 100+ event posters and materials",
      //   "Rebranded forum visual identity",
      //   "Won Best Design Award at college fest",
      //   "Led creative workshops for 200+ students",
      // ],
      responsibilities: [
        "Lead creative committee projects",
        "Design event materials and branding",
        "Coordinate with marketing team",
        "Mentor aspiring designers",
      ],
      social: {
        linkedin: "https://linkedin.com/in/priya-patel",
        instagram: "https://instagram.com/priya",
        facebook: "https://facebook.com/priya",
      },
      // joinDate: "2022-10-01",
      skills: ["Graphic Design", "UI/UX Design", "Brand Strategy", "Creative Leadership"],
    },
    {
      id: "10",
      name: "Rahul Verma",
      role: "Content Head",
      committee: "Content Editor Committee",
      position: "Head",
      image: "/placeholder-sxulj.png",
      bio: "Content strategist and editor ensuring high-quality communication across all forum channels. Expert in content creation and editorial processes.",
      dob: "1998-12-08",
      email: "rahul@schologamma.com",
      phone: "+91 98765 43219",
      // achievements: [
      //   "Published 50+ articles and blog posts",
      //   "Increased content engagement by 250%",
      //   "Won Best Content Creator Award",
      //   "Established forum's content guidelines",
      // ],
      responsibilities: [
        "Lead content creation strategy",
        "Edit and review all published content",
        "Coordinate with social media team",
        "Train content creators",
      ],
      social: {
        linkedin: "https://linkedin.com/in/rahul-verma",
        instagram: "https://instagram.com/rahul",
        facebook: "https://facebook.com/rahul",
      },
      // joinDate: "2022-09-20",
      skills: ["Content Writing", "Editorial", "SEO", "Content Strategy"],
    },
     {
      id: "11",
      name: "Rahul Verm",
      role: "Content Co-Head",
      committee: "Content Editor Committee",
      position: "Co-Head",
      image: "/placeholder-sxulj.png",
      bio: "Content strategist and editor ensuring high-quality communication across all forum channels. Expert in content creation and editorial processes.",
      dob: "1998-10-08",
      email: "rafdfl@schologamma.com",
      phone: "+91 98765 42219",
      // achievements: [
      //   "Published 50+ articles and blog posts",
      //   "Increased content engagement by 250%",
      //   "Won Best Content Creator Award",
      //   "Established forum's content guidelines",
      // ],
      responsibilities: [
        "Lead content creation strategy",
        "Edit and review all published content",
        "Coordinate with social media team",
        "Train content creators",
      ],
      social: {
        linkedin: "https://linkedin.com/in/rahul-verma",
        instagram: "https://instagram.com/rahul",
        facebook: "https://facebook.com/rahul",
      },
      // joinDate: "2022-09-20",
      skills: ["Content Writing", "Editorial", "SEO", "Content Strategy"],
    },
  ]

  const committees = [
   "TechSpot Committee",
"Technical Committee",
"Creative Committee",
"Content Editor Committee",
"Event Management",
"Publicity Relations",
"Digital Committee",
"Sports Committee",
"Discipline Committee",
"Startup Committee",
"NSS Committee",

  ]

  const positions = ["Admin", "Head", "Co-Head", "Member"]

  const filteredMembers = teamMembers.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.committee.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCommittee = selectedCommittee === "all" || member.committee === selectedCommittee
    const matchesPosition = selectedPosition === "all" || member.position === selectedPosition

    return matchesSearch && matchesCommittee && matchesPosition
  })

  const getPositionColor = (position: string) => {
    switch (position) {
      case "Admin":
        return "bg-red-500/20 text-red-400 border-red-500/30"
      case "Head":
        return "bg-purple-500/20 text-purple-400 border-purple-500/30"
      case "Co-Head":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30"
      case "Member":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  const getCommitteeColor = (committee: string) => {
    const colors = {
      "Content Editor Committee": "bg-orange-500/20 text-orange-400 border-orange-500/30",
  "Technical Committee": "bg-purple-500/20 text-purple-400 border-purple-500/30",
  "Creative Committee": "bg-pink-500/20 text-pink-400 border-pink-500/30",
  "Sports Committee": "bg-red-500/20 text-red-400 border-red-500/30",
  "Publicity Committee": "bg-teal-500/20 text-teal-400 border-teal-500/30",
  "Discipline Committee": "bg-gray-500/20 text-gray-400 border-gray-500/30",
  "Event Committee": "bg-blue-500/20 text-blue-400 border-blue-500/30",
  "Digital Committee": "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
  "Techspot Committee": "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  "Startup Committee": "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  "NSS Committee": "bg-lime-500/20 text-lime-400 border-lime-500/30"
    }
    return colors[committee as keyof typeof colors] || "bg-gray-500/20 text-gray-400 border-gray-500/30"
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
                Our Team
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
            Meet Our Team
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The dedicated individuals who make Schologamma Forum a thriving community of innovation, learning, and
            excellence.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search members, roles, committees..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-gray-900/50 border-gray-700 text-white placeholder-gray-400 focus:border-purple-500 transition-colors h-12"
              />
            </div>

            {/* Filter Toggle */}
            <Button
              variant="outline"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="border-gray-600 text-white hover:bg-gray-800 bg-transparent h-12"
            >
              <Filter className="w-4 h-4 mr-2" />
              Filters
              <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${isFilterOpen ? "rotate-180" : ""}`} />
            </Button>
          </div>

          {/* Filter Options */}
          {isFilterOpen && (
            <div className="grid md:grid-cols-2 gap-4 p-6 bg-gray-900/50 rounded-lg border border-gray-700 animate-in slide-in-from-top duration-200">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Committee</label>
                <Select value={selectedCommittee} onValueChange={setSelectedCommittee}>
                  <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                    <SelectValue placeholder="All Committees" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700">
                    <SelectItem value="all">All Committees</SelectItem>
                    {committees.map((committee) => (
                      <SelectItem key={committee} value={committee}>
                        {committee}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Position</label>
                <Select value={selectedPosition} onValueChange={setSelectedPosition}>
                  <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                    <SelectValue placeholder="All Positions" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700">
                    <SelectItem value="all">All Positions</SelectItem>
                    {positions.map((position) => (
                      <SelectItem key={position} value={position}>
                        {position}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
        </div>

        {/* Quick Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {["all", "Admin", "Head", "Co-Head", "Member"].map((position) => (
            <Button
              key={position}
              variant={selectedPosition === position ? "default" : "outline"}
              onClick={() => setSelectedPosition(position)}
              className={
                selectedPosition === position
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                  : "border-gray-600 text-white hover:bg-gray-800 bg-transparent"
              }
            >
              {position === "all" ? "All Members" : position}
            </Button>
          ))}
        </div>

        {/* Team Members Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {filteredMembers.map((member) => (
            <Card
              key={member.id}
              className="bg-gray-900/50 border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer"
              onClick={() => setSelectedMember(member)}
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className="relative">
                  <div className="w-24 h-24 mx-auto mb-4">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full rounded-full object-cover border-2 border-purple-500"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2">
                    <Badge className={getPositionColor(member.position)}>{member.position}</Badge>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white">{member.name}</h3>
                  <p className="text-orange-400 font-medium">{member.role}</p>
                  <p className="text-gray-400 text-sm">{member.committee}</p>
                </div>

                <div className="flex justify-center space-x-3">
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  )}
                  {member.social.instagram && (
                    <a
                      href={member.social.instagram}
                      className="text-pink-400 hover:text-pink-300 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.315 0-.612-.123-.837-.348-.225-.225-.348-.522-.348-.837s.123-.612.348-.837c.225-.225.522-.348.837-.348s.612.123.837.348c.225.225.348.522.348.837s-.123.612-.348.837c-.225.225-.522.348-.837.348z" />
                      </svg>
                    </a>
                  )}
                  {member.social.facebook && (
                    <a
                      href={member.social.facebook}
                      className="text-blue-600 hover:text-blue-500 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                  )}
                </div>

                <Button
                  variant="outline"
                  className="border-gray-600 text-white hover:bg-gray-800 w-full bg-transparent"
                >
                  View More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredMembers.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">👥</div>
            <h3 className="text-2xl font-bold text-gray-300 mb-2">No members found</h3>
            <p className="text-gray-400">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>

      {/* Member Detail Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700">
            <div className="relative p-8">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white"
              >
                <X className="w-5 h-5" />
              </Button>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Profile Section */}
                <div className="text-center space-y-4">
                  <div className="relative inline-block">
                    <img
                      src={selectedMember.image || "/placeholder.svg"}
                      alt={selectedMember.name}
                      className="w-32 h-32 rounded-full object-cover border-4 border-purple-500 mx-auto"
                    />
                    <Badge
                      className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 ${getPositionColor(selectedMember.position)}`}
                    >
                      {selectedMember.position}
                    </Badge>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-white">{selectedMember.name}</h2>
                    <p className="text-orange-400 font-medium text-lg">{selectedMember.role}</p>
                    <Badge className={getCommitteeColor(selectedMember.committee)}>{selectedMember.committee}</Badge>
                  </div>

                  <div className="space-y-3 text-sm text-gray-300">
                    <div className="flex items-center justify-center space-x-2">
                      <Calendar className="w-4 h-4 text-purple-400" />
                      <span>Born: {new Date(selectedMember.dob).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Mail className="w-4 h-4 text-purple-400" />
                      <span>{selectedMember.email}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Phone className="w-4 h-4 text-purple-400" />
                      <span>{selectedMember.phone}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Users className="w-4 h-4 text-purple-400" />
                      {/* <span>Joined: {new Date(selectedMember.joinDate).toLocaleDateString()}</span> */}
                    </div>
                  </div>

                  <div className="flex justify-center space-x-4">
                    {selectedMember.social.linkedin && (
                      <a
                        href={selectedMember.social.linkedin}
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                    )}
                    {selectedMember.social.instagram && (
                      <a
                        href={selectedMember.social.instagram}
                        className="text-pink-400 hover:text-pink-300 transition-colors"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.315 0-.612-.123-.837-.348-.225-.225-.348-.522-.348-.837s.123-.612.348-.837c.225-.225.522-.348.837-.348s.612.123.837.348c.225.225.348.522.348.837s-.123.612-.348.837c-.225.225-.522.348-.837.348z" />
                        </svg>
                      </a>
                    )}
                    {selectedMember.social.facebook && (
                      <a
                        href={selectedMember.social.facebook}
                        className="text-blue-600 hover:text-blue-500 transition-colors"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </a>
                    )}
                    {selectedMember.social.twitter && (
                      <a
                        href={selectedMember.social.twitter}
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                        </svg>
                      </a>
                    )}
                  </div>

                  <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                    <Mail className="w-4 h-4 mr-2" />
                    Contact
                  </Button>
                </div>

                {/* Details Section */}
                <div className="md:col-span-2 space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">About</h3>
                    <p className="text-gray-300 leading-relaxed">{selectedMember.bio}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedMember.skills.map((skill, index) => (
                        <Badge key={index} variant="outline" className="border-purple-500/30 text-purple-400">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Key Responsibilities</h3>
                    <ul className="space-y-2">
                      {selectedMember.responsibilities.map((responsibility, index) => (
                        <li key={index} className="flex items-start space-x-3 text-gray-300">
                          <span className="text-purple-400 mt-1">•</span>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    {/* <h3 className="text-xl font-semibold text-white mb-3">Achievements</h3>
                    <ul className="space-y-2"> */}
                      {/* {selectedMember.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start space-x-3 text-gray-300">
                          <Award className="w-4 h-4 text-orange-400 mt-1 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))} */}
                    {/* </ul> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
