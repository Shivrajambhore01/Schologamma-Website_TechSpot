"use client";

import { useState } from "react";
import {
  Search,
  Filter,
  Calendar,
  MapPin,
  User,
  Clock,
  ArrowLeft,
  X,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import Footer from "@/components/footer";

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  venue: string;
  speaker: string;
  image: string;
  committee: string;
  category: string;
  status: "upcoming" | "ongoing" | "past";
  registrationOpen: boolean;
  maxParticipants?: number;
  currentParticipants?: number;
  objectives: string[];
  outcomes: string[];
  schedule: { time: string; activity: string }[];
}

export default function EventsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCommittee, setSelectedCommittee] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const events: Event[] = [
    {
      id: "2",
      title: "Ganpati Bappa Festival Celebration",
      description:
        "Celebrate the divine presence of Lord Ganesha with devotion and joy! Join us for Ganesh Chaturthi festivities filled with prayers, cultural performances, and community spirit.",
      date: "2025-08-27",
      time: "1:00 PM",
      venue: "Main Campus Ground",
      speaker: "Schologamma",
      image:
        "https://thumbs.dreamstime.com/b/ganesh-chaturthi-lord-ganesha-festival-copy-space-clean-minimal-banner-template-design-ganesh-chaturthi-lord-ganesha-332278839.jpg",
      committee: "Schologamma",
      category: "Festival",
      status: "ongoing",
      registrationOpen: false,
      maxParticipants: 500,
      currentParticipants: 320,
      objectives: [
        "Invoke blessings of Lord Ganesha",
        "Promote cultural and spiritual values",
        "Encourage unity and community participation",
        "Celebrate with eco-friendly practices",
      ],
      outcomes: [
        "Strengthened community bonding",
        "Spiritual enrichment for participants",
        "Joyful cultural celebration",
      ],
      schedule: [
        { time: "27.08.2025", activity: "Ganesh Sthapna" },
        { time: "28.08.2025", activity: "Radio Mirchi/Mini Games" },
        { time: "29.08.2025", activity: "Competitions" },
        { time: "30.08.2025", activity: "Talent Hunt" },
        { time: "2.09.2025", activity: "Visarjan" },
      ],
    },
    {
      id: "3",
      title: "DevOps Workshop",
      description:
        "A technical workshop focused on DevOps practices including CI/CD pipelines, automation, and containerization. Students gained practical exposure to modern deployment strategies.",
      date: "2025-08-29",
      time: "11:00 AM",
      venue: "JD College And Management",
      speaker: "Schologamma",
      image: "",
      committee: "Schologamma",
      category: "Workshop",
      status: "past",
      registrationOpen: false,
      maxParticipants: 80,
      currentParticipants: 72,
      objectives: [
        "Introduce students to DevOps culture and tools",
        "Provide hands-on experience in CI/CD pipelines",
        "Highlight automation and container management",
      ],
      outcomes: [
        "Students built and deployed sample apps",
        "Better understanding of CI/CD concepts",
        "Practical exposure to DevOps workflows",
      ],
      schedule: [
        { time: "10:00 AM", activity: "Introduction to DevOps" },
        { time: "10:30 AM", activity: "CI/CD Pipeline Demo" },
        { time: "12:00 PM", activity: "Containerization with Docker" },
        { time: "1:00 PM", activity: "Hands-on Deployment Activity" },
        { time: "2:00 PM", activity: "Closing Remarks & Q&A" },
      ],
    },
    {
      id: "4",
      title: "Schologamma Installation Ceremony",
      description:
        "A formal event celebrating the installation of Schologamma. The ceremony included speeches, acknowledgments, and a demonstration of the system’s features for the community.",
      date: "2025-08-02",
      time: "4:00 PM",
      venue: "JD College And Management",
      speaker: "Schologamma ",
      image: "WhatsApp Image 2025-08-21 at 21.23.07_78a14539.jpg",
      committee: "Schologamma",
      category: "Ceremony",
      status: "past",
      registrationOpen: false,
      maxParticipants: 150,
      currentParticipants: 140,
      objectives: [
        "Celebrate the successful setup of Schologamma",
        "Showcase system features to students and staff",
        "Acknowledge contributions of team members",
      ],
      outcomes: [
        "System officially launched for use",
        "Increased awareness about Schologamma features",
        "Motivated students to engage in technical projects",
      ],
      schedule: [
        { time: "4:00 PM", activity: "Welcome & Opening Speech" },
        { time: "4:15 PM", activity: "Overview of Schologamma" },
        { time: "4:45 PM", activity: "Installation Ceremony & Ribbon Cutting" },
        { time: "5:15 PM", activity: "System Demonstration" },
        { time: "6:00 PM", activity: "Closing & Vote of Thanks" },
      ],
    },
  ];

  /* 
  [
    {
      id: "1",
      title: "Introduction to Figma",
      description:
        "Dive into the Future of Design with Schologamma Forum! Gear up for an inspiring Figma event on October 27!",
      date: "2023-10-27",
      time: "4:00 PM",
      venue: "VS 207 JDCOEM",
      speaker: "Danish Chavada, GDSC Lead",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-17%20221146-c3djdDYAyC4NAcx1pqYvrh4fYn2w9X.png",
      committee: "Technical Committee",
      category: "Workshop",
      status: "past",
      registrationOpen: false,
      maxParticipants: 50,
      currentParticipants: 45,
      objectives: [
        "Learn Figma basics and interface",
        "Understand design principles",
        "Create interactive prototypes",
        "Collaborate with team members",
      ],
      outcomes: [
        "Proficiency in Figma tools",
        "Ability to create professional designs",
        "Understanding of UI/UX principles",
      ],
      schedule: [
        { time: "4:00 PM", activity: "Registration and Welcome" },
        { time: "4:15 PM", activity: "Introduction to Figma Interface" },
        { time: "5:00 PM", activity: "Hands-on Design Workshop" },
        { time: "5:45 PM", activity: "Q&A and Networking" },
        { time: "6:00 PM", activity: "Closing Remarks" },
      ],
    },
    {
      id: "2",
      title: "Canva Advanced Tutorial",
      description: "Master advanced Canva techniques for professional design creation and brand development.",
      date: "2024-01-08",
      time: "2:00 PM",
      venue: "Online Mode",
      speaker: "Creative Team",
      image: "/canva-tutorial-poster.png",
      committee: "Creative Committee",
      category: "Tutorial",
      status: "past",
      registrationOpen: false,
      maxParticipants: 100,
      currentParticipants: 87,
      objectives: [
        "Master advanced Canva features",
        "Create professional brand materials",
        "Learn animation techniques",
        "Understand design consistency",
      ],
      outcomes: ["Advanced Canva proficiency", "Professional design portfolio", "Brand design skills"],
      schedule: [
        { time: "2:00 PM", activity: "Welcome and Overview" },
        { time: "2:15 PM", activity: "Advanced Tools and Features" },
        { time: "3:00 PM", activity: "Brand Kit and Templates" },
        { time: "3:30 PM", activity: "Animation and Effects" },
        { time: "4:00 PM", activity: "Project Showcase" },
      ],
    },
    {
      id: "3",
      title: "LogicQuest 1.1",
      description: "Join CodeQuest! Journey Through the Realm of Logic Languages. A competitive programming event.",
      date: "2024-03-01",
      time: "10:00 AM",
      venue: "Main Auditorium",
      speaker: "Technical Team",
      image: "/logic-quest-coding-competition.png",
      committee: "Technical Committee",
      category: "Competition",
      status: "past",
      registrationOpen: false,
      maxParticipants: 200,
      currentParticipants: 156,
      objectives: [
        "Test programming skills",
        "Promote competitive coding",
        "Foster problem-solving abilities",
        "Build coding community",
      ],
      outcomes: ["Enhanced coding skills", "Problem-solving experience", "Networking opportunities"],
      schedule: [
        { time: "10:00 AM", activity: "Registration and Setup" },
        { time: "10:30 AM", activity: "Opening Ceremony" },
        { time: "11:00 AM", activity: "Round 1: Logic Problems" },
        { time: "1:00 PM", activity: "Lunch Break" },
        { time: "2:00 PM", activity: "Round 2: Algorithm Challenge" },
        { time: "4:00 PM", activity: "Final Round and Results" },
      ],
    },
    {
      id: "4",
      title: "AI & Machine Learning Workshop",
      description: "Explore the fundamentals of AI and ML with hands-on projects and real-world applications.",
      date: "2024-04-15",
      time: "9:00 AM",
      venue: "Computer Lab 1",
      speaker: "Dr. Priya Sharma",
      image: "/ai-ml-workshop-poster.png",
      committee: "Technical Committee",
      category: "Workshop",
      status: "upcoming",
      registrationOpen: true,
      maxParticipants: 40,
      currentParticipants: 28,
      objectives: [
        "Understand AI/ML fundamentals",
        "Hands-on Python programming",
        "Build ML models",
        "Real-world applications",
      ],
      outcomes: ["AI/ML knowledge foundation", "Practical coding experience", "Project portfolio"],
      schedule: [
        { time: "9:00 AM", activity: "Introduction to AI/ML" },
        { time: "10:00 AM", activity: "Python for Data Science" },
        { time: "11:30 AM", activity: "Building Your First Model" },
        { time: "1:00 PM", activity: "Lunch Break" },
        { time: "2:00 PM", activity: "Advanced Techniques" },
        { time: "4:00 PM", activity: "Project Presentations" },
      ],
    },
    {
      id: "5",
      title: "Web Development Bootcamp",
      description: "Comprehensive bootcamp covering modern web development technologies and frameworks.",
      date: "2024-05-20",
      time: "10:00 AM",
      venue: "Seminar Hall",
      speaker: "Rahul Verma, Full Stack Developer",
      image: "/web-dev-bootcamp-poster.png",
      committee: "Technical Committee",
      category: "Bootcamp",
      status: "upcoming",
      registrationOpen: true,
      maxParticipants: 60,
      currentParticipants: 35,
      objectives: [
        "Learn modern web technologies",
        "Build responsive websites",
        "Understand full-stack development",
        "Deploy web applications",
      ],
      outcomes: ["Complete web development skills", "Portfolio projects", "Industry-ready knowledge"],
      schedule: [
        { time: "10:00 AM", activity: "HTML/CSS Fundamentals" },
        { time: "12:00 PM", activity: "JavaScript Essentials" },
        { time: "2:00 PM", activity: "React Framework" },
        { time: "4:00 PM", activity: "Backend Development" },
        { time: "5:30 PM", activity: "Deployment and Best Practices" },
      ],
    },
    {
      id: "6",
      title: "Digital Marketing Masterclass",
      description: "Learn effective digital marketing strategies and tools for modern businesses.",
      date: "2024-06-10",
      time: "3:00 PM",
      venue: "Online Mode",
      speaker: "Sneha Patel, Marketing Expert",
      image: "/digital-marketing-masterclass-poster.png",
      committee: "Content Editor Committee",
      category: "Masterclass",
      status: "upcoming",
      registrationOpen: true,
      maxParticipants: 80,
      currentParticipants: 42,
      objectives: [
        "Understand digital marketing landscape",
        "Learn SEO and SEM techniques",
        "Social media marketing strategies",
        "Analytics and measurement",
      ],
      outcomes: ["Digital marketing expertise", "Campaign planning skills", "Analytics proficiency"],
      schedule: [
        { time: "3:00 PM", activity: "Digital Marketing Overview" },
        { time: "3:45 PM", activity: "SEO and Content Strategy" },
        { time: "4:30 PM", activity: "Social Media Marketing" },
        { time: "5:15 PM", activity: "Analytics and ROI" },
        { time: "6:00 PM", activity: "Q&A and Resources" },
      ],
    },
  ]

  */

  const committees = [
    "Technical Committee",
    "Creative Committee",
    "Content Editor Committee",
    "Event committee",
    "Publicity Committee",
    "TechSpot Committee",
    "Digital  Committee",
    "Startup Committee",
    "Sports committee",
    "Discipline Committee",
    "NSS Committee",
  ];

  const categories = [
    "Workshop",
    "Seminar",
    "Competition",
    "Bootcamp",
    "Tutorial",
    "Masterclass",
    "Webinar",
  ];

  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.speaker.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCommittee =
      selectedCommittee === "all" || event.committee === selectedCommittee;
    const matchesCategory =
      selectedCategory === "all" || event.category === selectedCategory;
    const matchesStatus =
      selectedStatus === "all" || event.status === selectedStatus;

    return (
      matchesSearch && matchesCommittee && matchesCategory && matchesStatus
    );
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "upcoming":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "ongoing":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "past":
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  const getCommitteeColor = (committee: string) => {
    const colors = {
      "Technical Committee":
        "bg-purple-500/20 text-purple-400 border-purple-500/30",
      "Creative Committee": "bg-pink-500/20 text-pink-400 border-pink-500/30",
      "Content Editor Committee":
        "bg-orange-500/20 text-orange-400 border-orange-500/30",
      "Event Management": "bg-blue-500/20 text-blue-400 border-blue-500/30",
      "Publicity Committee": "bg-blue-500/20 text-blue-400 border-blue-500/30",
      "TechSpot Committee": "bg-blue-500/20 text-blue-400 border-blue-500/30",
      "Digital  Committee":
        "bg-purple-500/20 text-purple-400 border-purple-500/30",
      "Startup Committee":
        "bg-purple-500/20 text-purple-400 border-purple-500/30",
      "Sports committee":
        "bg-purple-500/20 text-purple-400 border-purple-500/30",
      "Discipline Committee":
        "bg-purple-500/20 text-purple-400 border-purple-500/30",
      "NSS Committee": "bg-purple-500/20 text-purple-400 border-purple-500/30",
    };
    return (
      colors[committee as keyof typeof colors] ||
      "bg-gray-500/20 text-gray-400 border-gray-500/30"
    );
  };

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
              <Link
                href="/"
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Home</span>
              </Link>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Events
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
            Schologamma Events
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover workshops, seminars, competitions, and more. Join us in
            learning, growing, and achieving excellence together.
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
                placeholder="Search events, speakers, topics..."
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
              <ChevronDown
                className={`w-4 h-4 ml-2 transition-transform ${
                  isFilterOpen ? "rotate-180" : ""
                }`}
              />
            </Button>
          </div>

          {/* Filter Options */}
          {isFilterOpen && (
            <div className="grid md:grid-cols-3 gap-4 p-6 bg-gray-900/50 rounded-lg border border-gray-700 animate-in slide-in-from-top duration-200">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Committee
                </label>
                <Select
                  value={selectedCommittee}
                  onValueChange={setSelectedCommittee}
                >
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
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Category
                </label>
                <Select
                  value={selectedCategory}
                  onValueChange={setSelectedCategory}
                >
                  <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700">
                    <SelectItem value="all">All Categories</SelectItem>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Status
                </label>
                <Select
                  value={selectedStatus}
                  onValueChange={setSelectedStatus}
                >
                  <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                    <SelectValue placeholder="All Events" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700">
                    <SelectItem value="all">All Events</SelectItem>
                    <SelectItem value="upcoming">Upcoming</SelectItem>
                    <SelectItem value="ongoing">Ongoing</SelectItem>
                    <SelectItem value="past">Past Events</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
        </div>

        {/* Quick Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {["all", "upcoming", "ongoing", "past"].map((status) => (
            <Button
              key={status}
              variant={selectedStatus === status ? "default" : "outline"}
              onClick={() => setSelectedStatus(status)}
              className={
                selectedStatus === status
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                  : "border-gray-600 text-white hover:bg-gray-800 bg-transparent"
              }
            >
              {status === "all"
                ? "All Events"
                : status.charAt(0).toUpperCase() + status.slice(1)}
            </Button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredEvents.map((event) => (
            <Card
              key={event.id}
              className="bg-gray-900/50 border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer"
              onClick={() => setSelectedEvent(event)}
            >
              <CardContent className="p-0">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={getStatusColor(event.status)}>
                      {event.status.charAt(0).toUpperCase() +
                        event.status.slice(1)}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className={getCommitteeColor(event.committee)}>
                      {event.committee}
                    </Badge>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-400 text-sm line-clamp-2">
                      {event.description}
                    </p>
                  </div>

                  <div className="space-y-2 text-sm text-gray-400">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {new Date(event.date).toLocaleDateString()} at{" "}
                        {event.time}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{event.venue}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>By {event.speaker}</span>
                    </div>
                  </div>

                  {/* {event.registrationOpen && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm text-gray-400">
                        <span>Participants</span>
                        <span>
                          {event.currentParticipants}/{event.maxParticipants}
                        </span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-300"
                          style={{
                            width: `${((event.currentParticipants || 0) / (event.maxParticipants || 1)) * 100}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  )} */}

                  {/* <Button
                    className={
                      event.registrationOpen
                        ? "w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-200"
                        : "w-full bg-gray-700 text-gray-400 cursor-not-allowed"
                    }
                    disabled={!event.registrationOpen}
                  >
                    {event.registrationOpen ? "Register Now" : "Registration Closed"}
                  </Button> */}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-300 mb-2">
              No events found
            </h3>
            <p className="text-gray-400">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>

      {/* Event Detail Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700">
            <div className="relative">
              <img
                src={selectedEvent.image || "/placeholder.svg"}
                alt={selectedEvent.title}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white"
              >
                <X className="w-5 h-5" />
              </Button>
              <div className="absolute bottom-4 left-4 flex space-x-2">
                <Badge className={getStatusColor(selectedEvent.status)}>
                  {selectedEvent.status.charAt(0).toUpperCase() +
                    selectedEvent.status.slice(1)}
                </Badge>
                <Badge className={getCommitteeColor(selectedEvent.committee)}>
                  {selectedEvent.committee}
                </Badge>
              </div>
            </div>

            <div className="p-8 space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  {selectedEvent.title}
                </h2>
                <p className="text-gray-300 text-lg">
                  {selectedEvent.description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">
                    Event Details
                  </h3>
                  <div className="space-y-3 text-gray-300">
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-purple-400" />
                      <span>
                        {new Date(selectedEvent.date).toLocaleDateString()} at{" "}
                        {selectedEvent.time}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-purple-400" />
                      <span>{selectedEvent.venue}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <User className="w-5 h-5 text-purple-400" />
                      <span>By {selectedEvent.speaker}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-purple-400" />
                      <span>{selectedEvent.category}</span>
                    </div>
                  </div>
                </div>

                {selectedEvent.registrationOpen && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white">
                      Registration
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between text-gray-300">
                        <span>Participants</span>
                        <span>
                          {selectedEvent.currentParticipants}/
                          {selectedEvent.maxParticipants}
                        </span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-3">
                        <div
                          className="bg-gradient-to-r from-purple-500 to-blue-500 h-3 rounded-full transition-all duration-300"
                          style={{
                            width: `${
                              ((selectedEvent.currentParticipants || 0) /
                                (selectedEvent.maxParticipants || 1)) *
                              100
                            }%`,
                          }}
                        ></div>
                      </div>
                      <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-200">
                        Register for Event
                      </Button>
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Objectives</h3>
                <ul className="space-y-2">
                  {selectedEvent.objectives.map((objective, index) => (
                    <li
                      key={index}
                      className="flex items-start space-x-3 text-gray-300"
                    >
                      <span className="text-purple-400 mt-1">•</span>
                      <span>{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">
                  Expected Outcomes
                </h3>
                <ul className="space-y-2">
                  {selectedEvent.outcomes.map((outcome, index) => (
                    <li
                      key={index}
                      className="flex items-start space-x-3 text-gray-300"
                    >
                      <span className="text-blue-400 mt-1">✓</span>
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Schedule</h3>
                <div className="space-y-3">
                  {selectedEvent.schedule.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-4 p-3 bg-gray-800/50 rounded-lg"
                    >
                      <div className="text-orange-400 font-medium min-w-[80px]">
                        {item.time}
                      </div>
                      <div className="text-gray-300">{item.activity}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
