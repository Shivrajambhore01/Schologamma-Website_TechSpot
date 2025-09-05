"use client";

import { useState, useEffect } from "react";
import {
  ArrowLeft,
  ImageIcon,
  Award,
  Users,
  Trophy,
  Calendar,
  Search,
  Lightbulb,
  Camera,
  Code,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Footer from "@/components/footer";

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleElements, setVisibleElements] = useState(new Set());

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

  const categories = [
    { id: "all", name: "All", icon: <ImageIcon className="w-4 h-4" /> },
    { id: "workshops", name: "Workshops", icon: <Award className="w-4 h-4" /> },
    {
      id: "team",
      name: "Team Activities",
      icon: <Users className="w-4 h-4" />,
    },
    {
      id: "competitions",
      name: "Competitions",
      icon: <Trophy className="w-4 h-4" />,
    },
    { id: "events", name: "Events", icon: <Calendar className="w-4 h-4" /> },
    {
      id: "seminars",
      name: "Seminars",
      icon: <Lightbulb className="w-4 h-4" />,
    },
    {
      id: "hackathons",
      name: "Hackathons",
      icon: <Code className="w-4 h-4" />,
    },
    {
      id: "networking",
      name: "Networking",
      icon: <Camera className="w-4 h-4" />,
    },
    {
      id: "Installation",
      name: "Installation",
      icon: <Camera className="w-4 h-4" />,
    },
    {
      id: "Ganpati",
      name: "Ganpati bappa",
      icon: <Camera className="w-4 h-4" />,
    },
  ];

  const galleryItems = [
    {
      id: 1,
      src: "WhatsApp Image 2025-08-21 at 21.23.07_78a14539.jpg",
      alt: "Installation",
      title: "Installation ceremony",
      category: "Installation",
    },
    {
      id: 2,
      src: "inst2.jpg",
      alt: "Installation",
      title: "Installation ceremony",
      category: "Installation",
    },
    {
      id: 3,
      src: "inst16.jpg",
      alt: "Installation",
      title: "Installation ceremony",
      category: "Installation",
    },
    {
      id: 15,
      src: "inst19.jpg",
      alt: "Installation",
      title: "Installation ceremony",
      category: "Installation",
    },
    {
      id: 16,
      src: "inst20.jpg",
      alt: "Installation",
      title: "Installation ceremony",
      category: "Installation",
    },

    {
      id: 4,
      src: "inst5.jpg",
      alt: "Installation",
      title: "Installation ceremony",
      category: "Installation",
    },
    {
      id: 14,
      src: "inst18.jpg",
      alt: "Installation",
      title: "Installation ceremony",
      category: "Installation",
    },

    {
      id: 5,
      src: "inst6.jpg",
      alt: "Installation",
      title: "Installation ceremony",
      category: "Installation",
    },
    {
      id: 6,
      src: "inst7.jpg",
      alt: "Installation",
      title: "Installation ceremony",
      category: "Installation",
    },
    {
      id: 7,
      src: "inst8.jpg",
      alt: "Installation",
      title: "Installation ceremony",
      category: "Installation",
    },
    {
      id: 8,
      src: "inst9.jpg",
      alt: "Installation",
      title: "Installation ceremony",
      category: "Installation",
    },
    {
      id: 9,
      src: "inst10.jpg",
      alt: "Installation",
      title: "Installation ceremony",
      category: "Installation",
    },
    {
      id: 10,
      src: "inst14.jpg",
      alt: "Installation",
      title: "Installation ceremony",
      category: "Installation",
    },
    {
      id: 11,
      src: "inst15.jpg",
      alt: "Installation",
      title: "Installation ceremony",
      category: "Installation",
    },
    {
      id: 12,
      src: "inst13.jpg",
      alt: "Installation",
      title: "Installation ceremony",
      category: "Installation",
    },
    {
      id: 13,
      src: "inst12.jpg",
      alt: "Installation",
      title: "Installation ceremony",
      category: "Installation",
    },
    {
      id: 17,
      src: "g1.jpg",
      title: "Flash mob ganpati bappa",
      category: "Ganpati",
    },
    {
      id: 18,
      src: "g2.jpg",
      title: "Flash mob ganpati bappa",
      category: "Ganpati",
    },
    {
      id: 19,
      src: "g3.jpg",
      title: "Flash mob ganpati bappa",
      category: "Ganpati",
    },

    {
      id: 21,
      src: "g5.jpg",
      title: "Flash mob ganpati bappa",
      category: "Ganpati",
    },
    {
      id: 22,
      src: "DevOps.jpg",
      title: "Dev Ops",
      category: "seminars",
    },
    {
      id: 23,
      src: "DevOps1.jpg",
      title: "Dev Ops",
      category: "seminars",
    },
    {
      id: 24,
      src: "DevOps2.jpg",
      title: "Dev Ops",
      category: "seminars",
    },
    {
      id: 25,
      src: "DevOps3.jpg",
      title: "Dev Ops",
      category: "seminars",
    },
  ];

  const filteredItems = galleryItems.filter((item) => {
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch = item.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    // item.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch;
  });

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
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white"
                >
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
                  variant={
                    selectedCategory === category.id ? "default" : "outline"
                  }
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
          <div
            className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            data-animate
            id="gallery-grid"
          >
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
                  {/* Image fills card */}
                  <img
                    src={item.src || "/placeholder.svg"}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Dark gradient overlay for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

                  {/* Title Tag (overlay) */}
                  <div className="absolute bottom-4 left-4">
                    <h3 className="font-semibold text-white bg-black/60 backdrop-blur-sm px-3 py-1 rounded-md text-sm group-hover:bg-orange-500/80 transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 text-lg mb-4">No items found</div>
              <p className="text-gray-500">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
