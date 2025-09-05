"use client";

import { useState, useEffect, useRef } from "react";
import committees from "@/lib/committees.json";
import events from "@/lib/events.json";
import team from "@/lib/team.json";

import {
  Users,
  ArrowRight,
  Search,
  Menu,
  X,
  Calendar,
  Trophy,
  Star,
  ImageIcon,
  Award,
  SparkleIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Footer from "@/components/footer";

type Committee = {
  id: number;
  name: string;
  description: string;
  image: string;
  members: number;
  color: string;
  hoverColor: string;
  type?: string; // if you’re tagging type manually
};

type Event = {
  id: number;
  title: string;
  description: string;
  date: string;
  type?: string;
};

type TeamMember = {
  id: number;
  name: string;
  role: string;
  img: string;
  type?: string;
};

// Final result type (union)
type SearchResult = Committee | Event | TeamMember;

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleElements, setVisibleElements] = useState(new Set());
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [Result, setResult] = useState<any[]>([]);
  const heroRef = useRef(null);
  const committeesRef = useRef(null);
  const aboutRef = useRef(null);
  const updatesRef = useRef(null);
  const eventsRef = useRef(null);
  const galleryRef = useRef(null);

  const fullText = "Welcome to Schologamma Forum";
  const heroSlides = [
    {
      title: "Innovation Meets Excellence",
      subtitle:
        "Join the premier student forum at JD College of Engineering & Management",
      image: "inst2.jpg",
    },
    {
      title: "Empowering Future Leaders",
      subtitle:
        "Discover opportunities, build connections, and shape your career",
      image: "WhatsApp Image 2025-08-21 at 21.23.07_78a14539.jpg",
    },
    {
      title: "Learn, Grow, Achieve",
      subtitle: "Participate in workshops, seminars, and technical events",
      image: "schologammalogo.webp",
    },
  ];

  useEffect(() => {
    if (isTyping && typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 80);
      return () => clearTimeout(timeout);
    } else if (typedText.length === fullText.length) {
      setTimeout(() => setIsTyping(false), 500);
    }
  }, [typedText, isTyping, fullText]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Events", href: "/events" },
    { name: "Committees", href: "/committees" },
    { name: "Our Team", href: "/team" },
    { name: "Gallery", href: "/gallery" },
  ];

  const committees = [
    // {
    //   name: "Content Editor Committee",
    //   description: "Managing content creation and editorial processes",
    //   icon: "📝",
    //   members: 12,
    //   color: "from-blue-500/20 to-purple-500/20",
    //   hoverColor: "hover:shadow-blue-500/30",
    // },
    {
      name: "Technical Committee",
      description: "Organizing technical workshops and coding events",
      // icon: "⚙️",
      image: "tecnicallogo.webp",
      members: 8,
      color: "from-green-500/20 to-teal-500/20",
      hoverColor: "hover:shadow-green-500/30",
    },
    {
      name: "TechSpot Committee",
      description: "Planning and executing all forum technical events",
      image: "techspotlogo.webp",
      members: 8,
      color: "from-orange-500/20 to-yellow-500/20",
      hoverColor: "hover:shadow-orange-500/30",
    },
    {
      name: "Creative Committee",
      description: "Handling design, graphics, and creative projects",
      image: "creativelogo.webp",
      members: 8,
      color: "from-pink-500/20 to-rose-500/20",
      hoverColor: "hover:shadow-pink-500/30",
    },

    // {
    //   name: "Public Relations",
    //   description: "Managing external communications and partnerships",
    //   icon: "🤝",
    //   members: 6,
    //   color: "from-indigo-500/20 to-blue-500/20",
    //   hoverColor: "hover:shadow-indigo-500/30",
    // },
    // {
    //   name: "Finance Committee",
    //   description: "Handling budgets and financial planning",
    //   icon: "💰",
    //   members: 5,
    //   color: "from-emerald-500/20 to-green-500/20",
    //   hoverColor: "hover:shadow-emerald-500/30",
    // },
  ];

  const latestUpdates = [
    {
      title: "Ganpati Bappa Festival Celebration",
      date: "onGoing",
      description:
        "Join us for the vibrant Ganesh Chaturthi celebrations with cultural programs, aarti, and prasad distribution.",
      type: "event",
      icon: <SparkleIcon className="w-5 h-5" />,
      img: "https://thumbs.dreamstime.com/b/ganesh-chaturthi-lord-ganesha-festival-copy-space-clean-minimal-banner-template-design-ganesh-chaturthi-lord-ganesha-332278839.jpg",
    },
    {
      title: "DevOps Workshop",
      date: "Completed",
      description:
        "A hands-on workshop on DevOps practices including CI/CD pipelines, automation, and containerization.",
      type: "event",
      icon: <SparkleIcon className="w-5 h-5" />,
      img: "DevOps.jpg",
    },
    {
      title: "Schologamma Installation Ceremony",
      date: "Completed",
      description:
        "A formal event celebrating the successful installation of Schologamma with speeches, acknowledgments, and demonstrations.",
      type: "event",
      icon: <SparkleIcon className="w-5 h-5" />,
      img: "WhatsApp Image 2025-08-21 at 21.23.07_78a14539.jpg",
    },
  ];

  // latest update deta

  /*  {
        title: "LogicQuest 1.1 Registration Open",
        date: "1 week ago",
        description: "Annual coding competition registration is now open. Don't miss this opportunity!",
        type: "event",
        icon: <Trophy className="w-5 h-5" />,
      },
      {
        title: "Committee Recruitment Drive",
        date: "2 weeks ago",
        description: "Join our dynamic committees and be part of Schologamma's growth journey.",
        type: "recruitment",
        icon: <Users className="w-5 h-5" />,
      }, */

  const featuredEvents = [
    {
      title: "Ganpati Bappa Festival Celebration",
      date: "Aug 27, 2025",
      time: "1:00 PM",
      venue: "Main Campus Ground",
      image:
        "https://thumbs.dreamstime.com/b/ganesh-chaturthi-lord-ganesha-festival-copy-space-clean-minimal-banner-template-design-ganesh-chaturthi-lord-ganesha-332278839.jpg",
      status: "ongoing",
      committee: "Schologamma",
    },
    {
      title: "DevOps Workshop",
      date: "Aug 29, 2025",
      time: "10:00 AM",
      venue: "JD college of Eng",
      image: "DevOps.jpg",
      status: "past",
      committee: "Schologamma",
    },
    {
      title: "Schologamma Installation Ceremony",
      date: "Aug 02, 2025",
      time: "4:00 PM",
      venue: "Schologamma",
      image: "WhatsApp Image 2025-08-21 at 21.23.07_78a14539.jpg",
      status: "past",
      committee: "Schologamma",
    },
  ];

  /*
      {
        title: "Introduction to Figma",
        date: "Oct 27, 2023",
        time: "4:00 PM",
        venue: "VS 207 JDCOEM",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-17%20221146-c3djdDYAyC4NAcx1pqYvrh4fYn2w9X.png",
        status: "upcoming",
        committee: "Technical Committee",
      },
        {
        title: "LogicQuest 1.1",
        date: "Mar 1, 2024",
        time: "10:00 AM",
        venue: "Main Auditorium",
        image: "/logic-quest-coding-competition.png",
        status: "upcoming",
        committee: "Technical Committee",
      },
      {
        title: "Canva Advanced Tutorial",
        date: "Jan 8, 2024",
        time: "2:00 PM",
        venue: "Computer Lab",
        image: "/canva-tutorial-poster.png",
        status: "completed",
        committee: "Creative Committee",
      },
      */

  const galleryCategories = [
    {
      title: "Installation ceremony",
      // description: "Hands-on learning experiences and skill development",
      images: [
        {
          src: "WhatsApp Image 2025-08-21 at 21.23.07_78a14539.jpg",
          alt: "installation",
          caption: "installation ceremony",
        },
        {
          src: "inst2.jpg",
          alt: "installation",
          caption: "installation ceremony",
        },
        {
          src: "inst19.jpg",
          alt: "installation",
          caption: "installation ceremony",
        },
      ],
      icon: <Award className="w-6 h-6" />,
      color: "from-dark-500/20 to-purple-500/20",
    },
  ];

  useEffect(() => {
    const q = searchQuery.toLowerCase().trim();

    if (!q) {
      setResult([]); // clear results if query is empty
      return;
    }

    const filteredCommittees = committees.filter(
      (c) =>
        (c.name ?? "").toString().toLowerCase().includes(q) ||
        (c.description ?? "").toString().toLowerCase().includes(q)
      // (c.id ?? "").toString().toLowerCase().includes(q) // if you want id search
    );

    const filteredEvents = events.filter(
      (e) =>
        (e.title ?? "").toString().toLowerCase().includes(q) ||
        (e.description ?? "").toString().toLowerCase().includes(q) ||
        (e.id ?? "").toString().toLowerCase().includes(q)
    );

    const filteredTeam = team.filter(
      (t) =>
        (t.name ?? "").toString().toLowerCase().includes(q) ||
        (t.role ?? "").toString().toLowerCase().includes(q) ||
        (t.id ?? "").toString().toLowerCase().includes(q)
    );

    // combine all results
    const allResults = [
      ...filteredCommittees.map((c) => ({ type: "committee", ...c })),
      ...filteredEvents.map((e) => ({ type: "event", ...e })),
      ...filteredTeam.map((t) => ({ type: "team", ...t })),
    ];

    setResult(allResults);
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.1), transparent 40%)`,
          }}
        ></div>
        <div className=" absolute inset-0">
          {[...Array(50)].map((_, i) => (
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

      <nav className="relative z-50 bg-black/80 backdrop-blur-md border-b border-gray-800 sticky top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent animate-pulse">
                Schologamma
              </div>
            </div>

            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full group">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 group-focus-within:text-blue-400 transition-colors" />
                <Input
                  type="text"
                  placeholder="Search events, committees, members..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key == "Enter") {
                      window.location.href = `/search?query=${searchQuery}`;
                    }
                  }}
                  className="pl-10 bg-gray-900/50 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                />
              </div>
              {searchQuery && Result.length > 0 && (
                <div className="absolute custom-scrollbar mt-12 w-[360px] bg-gray-900 border border-gray-700 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
                  {Result.map((item) => (
                    <div
                      key={`${item.type}-${item.id}`}
                      onClick={() => {
                        if (item.type === "event")
                          window.location.href = `/events/${item.id}`;
                        if (item.type === "committee")
                          window.location.href = `/search?query=${item.name}`;
                        if (item.type === "team")
                          window.location.href = `/team/${item.id}`;
                      }}
                      className="p-2 rounded-md hover:bg-gray-800 cursor-pointer"
                    >
                      <p className="text-sm text-white">
                        {item.type === "event" && item.title}
                        {item.type === "committee" && item.name}
                        {item.type === "team" && item.name}
                      </p>
                      <p className="text-xs text-gray-400 truncate">
                        {item.type === "event" && item.description}
                        {item.type === "committee" && item.description}
                        {item.type === "team" && item.role}
                      </p>
                      <span className="text-[10px] uppercase text-blue-400">
                        {item.type}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 relative group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-orange-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>

            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:bg-gray-800"
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800 animate-in slide-in-from-top duration-300">
            <div className="px-4 py-4 space-y-4">
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-gray-900/50 border-gray-700 text-white placeholder-gray-400"
                />
                {searchQuery && Result.length > 0 && (
                  <div className="absolute custom-scrollbar mt-12 w-[360px] bg-gray-900 border border-gray-700 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
                    {Result.map((item) => (
                      <div
                        key={`${item.type}-${item.id}`}
                        onClick={() => {
                          if (item.type === "event")
                            window.location.href = `/events/${item.id}`;
                          if (item.type === "committee")
                            window.location.href = `/search?query=${item.name}`;
                          if (item.type === "team")
                            window.location.href = `/team/${item.id}`;
                        }}
                        className="p-2 rounded-md hover:bg-gray-800 cursor-pointer"
                      >
                        <p className="text-sm text-white">
                          {item.type === "event" && item.title}
                          {item.type === "committee" && item.name}
                          {item.type === "team" && item.name}
                        </p>
                        <p className="text-xs text-gray-400 truncate">
                          {item.type === "event" && item.description}
                          {item.type === "committee" && item.description}
                          {item.type === "team" && item.role}
                        </p>
                        <span className="text-[10px] uppercase text-blue-400">
                          {item.type}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-gray-300 hover:text-white transition-colors py-2 animate-in slide-in-from-left duration-300"
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      <section
        id="home"
        ref={heroRef}
        className="relative z-10 min-h-screen flex items-center justify-center px-4"
        data-animate
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`space-y-8 ${
              visibleElements.has("home")
                ? "animate-in slide-in-from-left duration-1000"
                : "opacity-0"
            }`}
          >
            <div className="space-y-4 pt-8 md:pt-8">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
                  {typedText}
                  {isTyping && <span className="animate-pulse">|</span>}
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl animate-in fade-in duration-1000 delay-500">
                {heroSlides[currentSlide].subtitle}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-in slide-in-from-bottom duration-1000 delay-700">
              <Link href="/events">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                >
                  Explore Events
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/team">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-600 text-white hover:bg-gray-800 bg-transparent transform hover:scale-105 transition-all duration-300"
                >
                  Meet Our Team
                </Button>
              </Link>
            </div>
          </div>

          <div
            className={`relative ${
              visibleElements.has("home")
                ? "animate-in slide-in-from-right duration-1000 delay-300"
                : "opacity-0"
            }`}
          >
            <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              {heroSlides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 transform ${
                    index === currentSlide
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-110"
                  }`}
                >
                  <img
                    src={slide.image || "/placeholder.svg"}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
              ))}

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "bg-white scale-125"
                        : "bg-white/50 hover:bg-white/75"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="updates"
        ref={updatesRef}
        className="relative z-10 py-16 px-4 bg-gray-900/30"
        data-animate
      >
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div
            className={`text-center mb-12 ${
              visibleElements.has("updates")
                ? "animate-in fade-in duration-1000"
                : "opacity-0"
            }`}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
              Latest Updates
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
              Stay informed with the latest news, announcements, and
              opportunities from Schologamma Forum.
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-2">
            {latestUpdates.map((update, index) => (
              <Card
                key={index}
                className={`bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 hover:border-orange-500 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 hover:shadow-2xl group ${
                  visibleElements.has("updates")
                    ? "animate-in slide-in-from-bottom duration-700"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-orange-400">
                      {update.icon}
                      <span className="text-sm font-medium capitalize">
                        {update.type}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500">{update.date}</span>
                  </div>

                  {/* Fixed-size responsive image holder */}
                  {update.img && (
                    <div className="w-full h-40 sm:h-48 md:h-56 lg:h-60 overflow-hidden rounded-lg">
                      <img
                        className="w-full h-full object-cover"
                        src={update.img}
                        alt={update.title}
                      />
                    </div>
                  )}

                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-orange-300 transition-colors duration-300">
                    {update.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 text-sm sm:text-base transition-colors duration-300">
                    {update.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section
        id="committees"
        ref={committeesRef}
        className="relative z-10 py-20 px-4"
        data-animate
      >
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-16 ${
              visibleElements.has("committees")
                ? "animate-in fade-in duration-1000"
                : "opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
              Our Committees
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
              At Schologamma, our vibrant and dynamic community thrives through
              the dedication and collaborative efforts of various committees.
              Each committee plays a crucial role in shaping the forum's
              activities, events, and initiatives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {committees.map((committee, index) => (
              <Card
                key={index}
                className={`bg-gradient-to-br ${
                  committee.color
                } backdrop-blur-sm border-gray-700 hover:border-orange-500 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${
                  committee.hoverColor
                } hover:shadow-2xl group ${
                  visibleElements.has("committees")
                    ? "animate-in slide-in-from-bottom duration-700"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8 text-center space-y-6 relative overflow-hidden">
                  <a href="/committees">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* <div className="text-5xl mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      {committee.icon}
                    </div> */}
                    <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gray-600 group-hover:border-orange-400 transform group-hover:scale-110 transition-all duration-300">
                      <img
                        src={committee.image}
                        alt={committee.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-orange-300 transition-colors duration-300">
                      {committee.name}
                    </h3>
                    {/* <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {committee.description}
                    </p> */}
                    {/* <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                      <Users className="w-4 h-4" />
                      <span>{committee.members} Members</span>
                    </div> */}
                    {/*                 
                      <Button
                        variant="outline"
                        className="border-gray-600 text-white hover:bg-orange-500 hover:border-orange-500 w-full bg-transparent transform group-hover:scale-105 transition-all duration-300"
                      >
                        Learn More
                      </Button> */}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          <div
            className={`text-center mt-16 ${
              visibleElements.has("committees")
                ? "animate-in slide-in-from-bottom duration-1000 delay-500"
                : "opacity-0"
            }`}
          >
            <Link href="/committees">
              <Button
                size="lg"
                variant="outline"
                className="border-gray-600 text-white hover:bg-gray-800 bg-transparent transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange-500/25"
              >
                View All Committees
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section
        id="about"
        ref={aboutRef}
        className="relative z-10 py-20 px-4"
        data-animate
      >
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-16 ${
              visibleElements.has("about")
                ? "animate-in fade-in duration-1000"
                : "opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
              About Schologamma
            </h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Schologamma Forum is the premier student organization at JD
                College of Engineering & Management, dedicated to fostering
                innovation, technical excellence, and leadership among students.
                Our vibrant community brings together passionate individuals who
                are committed to learning, growing, and making a meaningful
                impact in the field of technology and beyond.
              </p>
              <p>
                Through our diverse range of committees and initiatives, we
                organize workshops, seminars, coding competitions, and technical
                events that provide students with hands-on experience and
                industry exposure. Our mission is to bridge the gap between
                academic learning and practical application, preparing students
                for successful careers in the ever-evolving tech landscape.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    80+
                  </div>
                  <div className="text-gray-400">Active Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">
                    25+
                  </div>
                  <div className="text-gray-400">Events Organized</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">
                    11
                  </div>
                  <div className="text-gray-400">Active Committees</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="events"
        ref={eventsRef}
        className="relative z-10 py-20 px-4"
        data-animate
      >
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div
            className={`text-center mb-12 ${
              visibleElements.has("events")
                ? "animate-in fade-in duration-1000"
                : "opacity-0"
            }`}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
              Featured Events
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
              Discover our upcoming workshops, seminars, and competitions
              designed to enhance your skills and knowledge.
            </p>
          </div>

          {/* Horizontal Scrollable Events */}
          <div className="relative">
            {/* Left Button */}
            <button
              onClick={() =>
                document
                  .getElementById("events-row")
                  ?.scrollBy({ left: -300, behavior: "smooth" })
              }
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full z-20"
            >
              ◀
            </button>

            {/* Scroll Container */}
            <div
              id="events-row"
              className="flex space-x-6 overflow-x-auto overflow-y-hidden scroll-smooth scrollbar-hide px-2"
            >
              {featuredEvents.map((event, index) => (
                <Card
                  key={index}
                  className={`min-w-[250px] sm:min-w-[280px] max-w-xs flex-shrink-0 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border-gray-700 hover:border-blue-500 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 hover:shadow-2xl group overflow-hidden ${
                    visibleElements.has("events")
                      ? "animate-in slide-in-from-bottom duration-700"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          event.status === "upcoming"
                            ? "bg-green-500/20 text-green-400 border border-green-500/30"
                            : "bg-gray-500/20 text-gray-400 border border-gray-500/30"
                        }`}
                      >
                        {event.status}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-5 space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                        {event.title}
                      </h3>
                      <p className="text-sm text-orange-400">
                        {event.committee}
                      </p>
                    </div>
                    <div className="space-y-2 text-sm text-gray-400">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {event.date} at {event.time}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4" />
                        <span>{event.venue}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Right Button */}
            <button
              onClick={() =>
                document
                  .getElementById("events-row")
                  ?.scrollBy({ left: 300, behavior: "smooth" })
              }
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full z-20"
            >
              ▶
            </button>
          </div>

          {/* View All Events Button */}
          <div
            className={`text-center mt-12 ${
              visibleElements.has("events")
                ? "animate-in slide-in-from-bottom duration-1000 delay-500"
                : "opacity-0"
            }`}
          >
            <Link href="/events">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
              >
                View All Events
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section
        id="gallery"
        ref={galleryRef}
        className="relative z-10 py-12 px-4 bg-gray-900/20"
        data-animate
      >
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-12 ${
              visibleElements.has("gallery")
                ? "animate-in fade-in duration-1000"
                : "opacity-0"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
              Gallery Preview
            </h2>
            <p className="text-gray-400 text-base max-w-2xl mx-auto">
              Quick glimpse of our vibrant community moments.
            </p>
          </div>

          <div className="space-y-8">
            <div
              className={`flex items-center justify-center space-x-4 ${
                visibleElements.has("gallery")
                  ? "animate-in slide-in-from-left duration-1000"
                  : "opacity-0"
              }`}
            >
              <div
                className={`p-3 rounded-full bg-gradient-to-r ${galleryCategories[0].color} backdrop-blur-sm`}
              >
                {galleryCategories[0].icon}
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-2">
                  {galleryCategories[0].title}
                </h3>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {galleryCategories[0].images.map((image, imageIndex) => (
                <Card
                  key={imageIndex}
                  className={`bg-gradient-to-br ${
                    galleryCategories[0].color
                  } backdrop-blur-sm border-gray-700 hover:border-orange-500 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 hover:shadow-2xl group overflow-hidden ${
                    visibleElements.has("gallery")
                      ? "animate-in slide-in-from-bottom duration-700"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ animationDelay: `${imageIndex * 150}ms` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  {/* <CardContent className="p-4">
                    <p className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300 text-center">
                      {image.caption}
                    </p>
                  </CardContent> */}
                </Card>
              ))}
            </div>
          </div>

          <div
            className={`text-center mt-12 ${
              visibleElements.has("gallery")
                ? "animate-in slide-in-from-bottom duration-1000 delay-500"
                : "opacity-0"
            }`}
          >
            <Link href="/gallery">
              <Button
                size="lg"
                variant="outline"
                className="border-gray-600 text-white hover:bg-gray-800 bg-transparent transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange-500/25"
              >
                View Full Gallery
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
