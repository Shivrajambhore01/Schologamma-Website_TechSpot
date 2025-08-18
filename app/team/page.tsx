"use client";

import { useState } from "react";
import {
  Search,
  Filter,
  ArrowLeft,
  X,
  ChevronDown,
  Mail,
  Phone,
  Calendar,
  Award,
  Users,
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

interface TeamMember {
  id: string;
  name: string;
  role: string;
  committee: string;
  position: "Admin" | "Head" | "Co-Head" | "Member" | "Spokesperson" | "Student Co-ordinator";
  image: string;
  bio: string;
  dob: string;
  email: string;
  phone: string;
  // achievements: string[]
  responsibilities: string[];
  social: {
    linkedin?: string;
    instagram?: string;
    facebook?: string;
    twitter?: string;
  };
  // joinDate: string
  skills: string[];
}

export default function TeamPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCommittee, setSelectedCommittee] = useState("all");
  const [selectedPosition, setSelectedPosition] = useState("all");
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const teamMembers: TeamMember[] = [
    {
      id: "1",
      name: "Shivraj Ambhore",
      role: "TechSpot Committee Head",
      committee: "TechSpot",
      position: "Head",
      image:
        "https://drive.google.com/open?id=1X-4r14KBPa-yeFsudR3gJAMGGfhqs0WK",
      bio: "Hi I am shivraj",
      dob: "2004-02-19",
      email: "shivrajambhore01@gmail.com",
      phone: "",
      responsibilities: [],
      social: {
        linkedin: "https://www.linkedin.com/in/shivraj-ambhore",
        instagram:
          "https://www.instagram.com/shivraj_ambhore01?igsh=MWQxNzkxNnRrZ2hlZw==",
        facebook: "",
      },
      skills: ["Java", "DSA", "Full stack Development"],
    },
    {
      id: "2",
      name: "Tanvi Sanghani",
      role: "Spokesperson",
      committee: "Admin",
      position: "Admin",
      image:
        "https://drive.google.com/open?id=1y_xz0aW-z6iTmN0TuinCTUG_2RzwkjOT",
      bio: "Passion for connecting people. I convey our ideas, events, and achievements with clarity, enthusiasm, and impact. I believe in the power of words to inspire participation, foster collaboration, and make our forum a space where creativity and teamwork thrive.",
      dob: "2006-01-24",
      email: "tanvisanghani9@gmail.com",
      phone: "",
      responsibilities: [],
      social: {
        linkedin:
          "https://www.linkedin.com/in/tanvi-sanghani-381076375?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        instagram:
          "https://www.instagram.com/_tanu__24?igsh=MTFwMWxvdW84ZjV3bA==",
        facebook: "",
      },
      skills: [],
    },
    {
      id: "3",
      name: "Piyush Sunil Kolte",
      role: "Joint-Treasure",
      committee: "",
      position: "Admin",
      image:
        "https://drive.google.com/open?id=1fpmfn5vaCSDoOPzPtYz9oDxWxCK27NqZ",
      bio: "I’m Piyush Kolte. I’m an engineering student passionate about technology, innovation, and creative problem-solving. I love exploring new ideas, especially in data, design, and digital ethics, and I'm always looking to learn and grow through real-world experiences.",
      dob: "2005-06-01",
      email: "piyushkolte05@gmail.com",
      phone: "",
      responsibilities: [],
      social: {
        linkedin:
          "https://www.linkedin.com/in/piyush-kolte-3939282a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        instagram:
          "https://www.instagram.com/piyush_kolte01?igsh=MWF2YWgxYmx4a3UxOA==",
        facebook: "",
      },
      skills: [],
    },
    {
      id: "4",
      name: "Aditya Wankhede",
      role: "Technical Committee Head",
      committee: "Technical Committee",
      position: "Head",
      image:
        "https://drive.google.com/open?id=1imNu69wJhneI6UIc8QwfXYnnH80Zgd7l",
      bio: "Technical Committee Head",
      dob: "2004-09-16",
      email: "adiwankhede01@gmail.com",
      phone: "",
      responsibilities: [],
      social: {
        linkedin:
          "https://www.linkedin.com/in/aditya-wankhede-348676309?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        instagram:
          "https://www.instagram.com/a.d.i.t.y.a_01._?igsh=ZHoya2J1dXA4am1x",
        facebook: "",
      },
      skills: [],
    },
    {
      id: "5",
      name: "Yuvtika Rahangdale",
      role: "Creative Committee Co-Head",
      committee: "Creative Committee",
      position: "Co-Head",
      image:
        "https://drive.google.com/open?id=1MkZeIDUnXrNEnZToBTCo67k0IpqC5MJp",
      bio: "",
      dob: "2006-02-22",
      email: "yuvtikarahangdale@gmail.com",
      phone: "",
      responsibilities: [],
      social: {
        linkedin: "https://www.linkedin.com/in/yuvtika-rahangdale",
        instagram:
          "https://www.instagram.com/yuvtika_04?igsh=MWQyeHVtMmhlOXN6cQ==",
        facebook: "",
      },
      skills: [],
    },
    {
      id: "7",
      name: "Nikhil Rathod",
      role: "StartUp Committee Head",
      committee: "StartUp Committee",
      position: "Head",
      image:
        "https://drive.google.com/open?id=1Z-XmUD3qoSwnSH_of3iMlBm28hOuCgEr",
      bio: "Full Stack Developer",
      dob: "2003-07-28",
      email: "nikhilcaptain28@gmail.com",
      phone: "",
      responsibilities: [],
      social: {
        linkedin: "www.linkedin.com/in/nikhilrathods",
        instagram:
          "https://www.instagram.com/nikhil_captainn?utm_source=qr&igsh=aTIxOGM1Nmd5d2Yy",
        facebook: "",
      },
      skills: ["Full Stack Development"],
    },
    {
      id: "8",
      name: "Akansha Anil Ambadkar",
      role: "Creative Committee Co-Head",
      committee: "Creative Committee",
      position: "Co-Head",
      image:
        "https://drive.google.com/open?id=1cLOI6BFGzo5pej-KOxYkS5TCn9sxUyjI",
      bio: "",
      dob: "2007-02-24",
      email: "madhu.ambadkar2003@gmail.com",
      phone: "8530723327",
      responsibilities: [],
      social: {
        linkedin: "https://www.linkedin.com/in/akansha-ambadkar/",
        instagram:
          "https://www.instagram.com/akansciouss?igsh=MTFrbGN5c3ZxNXQzcg==",
      },
      skills: [],
    },
    {
      id: "9",
      name: "Anuj Vinod Lakhekar",
      role: "TechSpot Committee Co-Head",
      committee: "TechSpot Committee",
      position: "Co-Head",
      image:
        "https://drive.google.com/open?id=1YmLIPIPKM2tct5o3aepfb3ou20diFInr",
      bio: "Hello I am Anuj from CSE-B, passionate about coding and good at web development.",
      dob: "2006-09-09",
      email: "anujlakhekar4@gmail.com",
      phone: "",
      responsibilities: [],
      social: {
        linkedin:
          "https://www.linkedin.com/in/anuj-lakhekar-72a43033b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        instagram:
          "https://www.instagram.com/anuj_lakhekar?igsh=MWxob3V0NzQzaWJyaQ==",
      },
      skills: ["Web Development", "Coding"],
    },
    {
      id: "10",
      name: "Janvi Akhand",
      role: "Publicity Head",
      committee: "Publicity Committee",
      position: "Head",
      image:
        "https://drive.google.com/open?id=1hjzTW70HM-jg9hSu11F2P7o9LRvEyQPy",
      bio: "Leading publicity at Schologamma Forum, I’m passionate about building bridges between our vision and the audiences who can bring it to life.",
      dob: "2005-12-17",
      email: "janviakhand@gmail.com",
      phone: "",
      responsibilities: [],
      social: {
        linkedin: "https://www.linkedin.com/in/janvi-akhand-6bb310371",
        instagram: "janviakhand",
      },
      skills: ["Publicity", "Communication", "Leadership"],
    },
    {
      id: "11",
      name: "Santosh Donapurge",
      role: "TechSpot Committee Co-Head",
      committee: "TechSpot Committee",
      position: "Co-Head",
      image:
        "https://drive.google.com/open?id=1m0VBts4QkbMyzSRP_hPMkrXoRYC0F4Dl",
      bio: "SDE",
      dob: "2005-11-19",
      email: "codersento@gmail.com",
      phone: "",
      responsibilities: [],
      social: {
        linkedin: "https://www.linkedin.com/in/santosh-donapurge-bb1835304",
      },
      skills: ["Software Development", "Problem Solving", "Team Collaboration"],
    },
    {
      id: "12",
      name: "Yashasvi Sandesh Bhambore",
      role: "Technical Committee Co-Head",
      committee: "Technical Committee",
      position: "Co-Head",
      image:
        "https://drive.google.com/open?id=1D4TWDoBfdCdtnF35SIjiwvXv6g42jccm",
      bio: "",
      dob: "2005-08-27",
      email: "yashasvibhambore1@jdcoem.ac.in",
      phone: "",
      responsibilities: [],
      social: {
        linkedin: "https://www.linkedin.com/in/yashasvi-bhambore-893bb9355",
      },
      skills: ["Leadership", "Technical Knowledge", "Team Collaboration"],
    },
    {
      id: "13",
      name: "Om Hemraj Deshmukh",
      role: "Co-Head in Technical Committee",
      committee: "Technical Committee",
      position: "Co-Head",
      image:
        "https://drive.google.com/open?id=1FWLs4Vp1uo87wo88aRCtM9AcoyzNOk5H",
      bio: "I'm Om Deshmukh studying at JDCOEM CSE 2nd yr, holding a role of Co-Head in Technical Committee of Schologamma Forum 2026.",
      dob: "2005-07-30",
      email: "omdeshmukh399@jdcoem.ac.in",
      phone: "",
      responsibilities: [],
      social: {
        linkedin: "https://www.linkedin.com/in/omdeshmukh00",
        instagram: "https://instagram.com/omdeshmukh00",
      },
      skills: ["Leadership", "Problem Solving", "Team Collaboration"],
    },
    {
      id: "14",
      name: "Nehal Ravindra Zade",
      role: "Sport Co-Head",
      committee: "Sports Committee",
      position: "Co-Head",
      image:
        "https://drive.google.com/open?id=1AQodXy-neHmLHMd87XwUfPlbhUh0tDDd",
      bio: "I am a passionate athlete and team player, bringing energy, discipline, and dedication to every game. With sportsmanship and leadership on and off the field, I strive to motivate others, promote healthy competition, and make sports a vibrant part of campus life.",
      dob: "2006-08-04",
      email: "nehalzade04@gmail.com",
      phone: "",
      responsibilities: [],
      social: {
        linkedin:
          "https://www.linkedin.com/in/nehal-zade-7266a4374?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        instagram: "https://www.instagram.com/nehalzade1?igsh=ajQ2NDh0bmh6NGZ1",
      },
      skills: ["Athletics", "Teamwork", "Leadership", "Sports Management"],
    },
    {
      id: "15",
      name: "Karishma Naidu",
      role: "Discipline Committee Co-Head",
      committee: "Discipline Committee",
      position: "Co-Head",
      image:
        "https://drive.google.com/open?id=1QfG4057acjyyRAsCU-1PnGX-6LqZNP5u",
      bio: "I am currently pursuing my B.Tech degree in Computer Science. I am a kind and hardworking person, eager to learn and grow.",
      dob: "2006-02-26",
      email: "karishmanaidu035@gmail.com",
      phone: "",
      responsibilities: [],
      social: {
        linkedin: "https://www.linkedin.com/in/karishma-naidu-915168339",
      },
      skills: ["Discipline", "Teamwork", "Leadership", "Adaptability"],
    },
    {
      id: "16",
      name: "Bhavya Pandey",
      role: "Content Committee Co-Head",
      committee: "Content Committee",
      position: "Co-Head",
      image:
        "https://drive.google.com/open?id=16Xjsqi40HT61aFE1GY7dVGqQ3y3ABG15",
      bio: "Hello, I am Bhavya Pandey from Section B. I am a creative and passionate individual with talents in painting, dancing, singing, and face painting. I am very curious-minded and eager to learn, currently exploring areas like Python programming, digital arts, video editing, and brand designing.",
      dob: "2006-01-01",
      email: "pandeybhavya336@gmail.com",
      phone: "",
      responsibilities: [],
      social: {
        linkedin: "https://www.linkedin.com/in/bhavya-pandey",
        instagram:
          "https://www.instagram.com/bhavya_012006?igsh=YmtqZzA3MXMzZ2Jw",
      },
      skills: [
        "Painting",
        "Dancing",
        "Singing",
        "Face Painting",
        "Python Programming",
        "Digital Arts",
        "Video Editing",
        "Brand Designing",
      ],
    },
    {
      id: "17",
      name: "Sakshi Nitin Gokhe",
      role: "Event Committee Co-Head",
      committee: "Event Committee",
      position: "Co-Head",
      image:
        "https://drive.google.com/open?id=1FZ9qxYuxGFp7dzx6PJw5jZh0WBH9SRJT",
      bio: "My name is Sakshi Gokhe. I am from CSE-A 2nd year. Beyond my love for technology, I thrive on creativity and self-expression. I am passionate about dancing, cooking, traveling, and exploring new things, which fuel my imagination. I am also skilled in using Canva.",
      dob: "2006-02-20",
      email: "sakshigokhe67@gmail.com",
      phone: "",
      responsibilities: [],
      social: {
        linkedin: "Sakshi Gokhe",
        instagram: "_Sakshi_gokhe_",
      },
      skills: [
        "Dancing",
        "Cooking",
        "Traveling",
        "Exploring New Things",
        "Canva",
      ],
    },
    {
      id: "18",
      name: "Mrunmayi Abhay Somalkar",
      role: "Joint Secretary",
      committee: "Core Committee",
      position: "Head",
      image:
        "https://drive.google.com/open?id=1uV82gf5d0pSYtXLu94iShFTTgCxuUyCn",
      bio: "I'm a BTech 2nd-year student in Computer Science and I'm very passionate and hardworking about the work I take on.",
      dob: "2006-02-10",
      email: "mrunmayisomalkar210@jdcoem.ac.in",
      phone: "",
      responsibilities: [],
      social: {
        linkedin: "https://www.linkedin.com/in/mrunmayi-somalkar-28256532a",
        instagram: "https://www.instagram.com/mrunmayiii_s",
      },
      skills: ["Hardworking", "Passionate", "Leadership"],
    },
    {
      id: "19",
      name: "Manswini Unhone",
      role: "Publicity Committee Co-Head",
      committee: "Publicity Committee",
      position: "Co-Head",
      image:
        "https://drive.google.com/open?id=10iuslSQTlnsW89Xns5Slhi7jp1A8jue4",
      bio: "Hello, I'm Manswini, looking forward to learning new skills.",
      dob: "2006-03-05",
      email: "ishuunhone1@gmail.com",
      phone: "",
      responsibilities: [],
      social: {
        linkedin: "https://www.linkedin.com/in/manswini-unhone",
        instagram:
          "https://www.instagram.com/ishhuu_uhh?igsh=NXgwbmFzeG91OWd0&utm_source=ig_contact_invite",
      },
      skills: ["Publicity", "Communication", "Teamwork", "Creativity"],
    },
    {
      id: "21",
      name: "Payal Kumare",
      role: "Sports Committee Co-Head",
      committee: "Sports Committee",
      position: "Co-Head",
      image:
        "https://drive.google.com/open?id=1ZTTbgHn5xkiAN22FQbJkw1ZFLjuAkNsp",
      bio: "I am a Computer Science Engineering student with interest in technology and problem-solving. Along with academics, I actively participate in sports and serve as the Co-Head of our college Sports Committee. I believe in teamwork, discipline, and continuous learning to grow both personally and professionally.",
      dob: "2006-09-11",
      email: "payalkumare86686@gmail.com",
      phone: "8668614175",
      responsibilities: [],
      social: {
        linkedin: "www.linkedin.com/in/payal-kumare86686",
        instagram: "",
      },
      skills: ["Sports Management", "Teamwork", "Leadership", "Discipline"],
    },
    {
      id: "22",
      name: "Rushang Pravin Chandekar",
      role: "Student Co-ordinator",
      committee: "Administration",
      position: "Student Co-ordinator",
      image:
        "https://drive.google.com/open?id=1anXFrDf-f6YWwavBHLXPatTlgRjx1TD5",
      bio: "",
      dob: "2005-02-02",
      email: "rushangchandekar05@gmail.com",
      phone: "8857842043",
      responsibilities: [],
      social: {
        linkedin: "https://www.linkedin.com/in/rushang-chandekar",
        instagram: "",
      },
      skills: ["Leadership", "Coordination", "Management"],
    },
  ];

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
  ];

  const positions = ["Admin", "Head", "Co-Head", "Member"];

  const filteredMembers = teamMembers.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.committee.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCommittee =
      selectedCommittee === "all" || member.committee === selectedCommittee;
    const matchesPosition =
      selectedPosition === "all" || member.position === selectedPosition;

    return matchesSearch && matchesCommittee && matchesPosition;
  });

  const getPositionColor = (position: string) => {
    switch (position) {
      case "Admin":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      case "Head":
        return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      case "Co-Head":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "Member":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  const getCommitteeColor = (committee: string) => {
    const colors = {
      "Content Editor Committee":
        "bg-orange-500/20 text-orange-400 border-orange-500/30",
      "Technical Committee":
        "bg-purple-500/20 text-purple-400 border-purple-500/30",
      "Creative Committee": "bg-pink-500/20 text-pink-400 border-pink-500/30",
      "Sports Committee": "bg-red-500/20 text-red-400 border-red-500/30",
      "Publicity Committee": "bg-teal-500/20 text-teal-400 border-teal-500/30",
      "Discipline Committee": "bg-gray-500/20 text-gray-400 border-gray-500/30",
      "Event Committee": "bg-blue-500/20 text-blue-400 border-blue-500/30",
      "Digital Committee": "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
      "Techspot Committee":
        "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
      "Startup Committee":
        "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
      "NSS Committee": "bg-lime-500/20 text-lime-400 border-lime-500/30",
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
            The dedicated individuals who make Schologamma Forum a thriving
            community of innovation, learning, and excellence.
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
              <ChevronDown
                className={`w-4 h-4 ml-2 transition-transform ${
                  isFilterOpen ? "rotate-180" : ""
                }`}
              />
            </Button>
          </div>

          {/* Filter Options */}
          {isFilterOpen && (
            <div className="grid md:grid-cols-2 gap-4 p-6 bg-gray-900/50 rounded-lg border border-gray-700 animate-in slide-in-from-top duration-200">
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
                  Position
                </label>
                <Select
                  value={selectedPosition}
                  onValueChange={setSelectedPosition}
                >
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
                    <Badge className={getPositionColor(member.position)}>
                      {member.position}
                    </Badge>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white">
                    {member.name}
                  </h3>
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
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
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
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
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
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
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
            <h3 className="text-2xl font-bold text-gray-300 mb-2">
              No members found
            </h3>
            <p className="text-gray-400">
              Try adjusting your search or filter criteria
            </p>
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
                      className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 ${getPositionColor(
                        selectedMember.position
                      )}`}
                    >
                      {selectedMember.position}
                    </Badge>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-white">
                      {selectedMember.name}
                    </h2>
                    <p className="text-orange-400 font-medium text-lg">
                      {selectedMember.role}
                    </p>
                    <Badge
                      className={getCommitteeColor(selectedMember.committee)}
                    >
                      {selectedMember.committee}
                    </Badge>
                  </div>

                  <div className="space-y-3 text-sm text-gray-300">
                    <div className="flex items-center justify-center space-x-2">
                      <Calendar className="w-4 h-4 text-purple-400" />
                      <span>
                        Born:{" "}
                        {new Date(selectedMember.dob).toLocaleDateString()}
                      </span>
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
                        <svg
                          className="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                    )}
                    {selectedMember.social.instagram && (
                      <a
                        href={selectedMember.social.instagram}
                        className="text-pink-400 hover:text-pink-300 transition-colors"
                      >
                        <svg
                          className="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.315 0-.612-.123-.837-.348-.225-.225-.348-.522-.348-.837s.123-.612.348-.837c.225-.225.522-.348.837-.348s.612.123.837.348c.225.225.348.522.348.837s-.123.612-.348.837c-.225.225-.522.348-.837.348z" />
                        </svg>
                      </a>
                    )}
                    {selectedMember.social.facebook && (
                      <a
                        href={selectedMember.social.facebook}
                        className="text-blue-600 hover:text-blue-500 transition-colors"
                      >
                        <svg
                          className="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </a>
                    )}
                    {selectedMember.social.twitter && (
                      <a
                        href={selectedMember.social.twitter}
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <svg
                          className="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
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
                    <h3 className="text-xl font-semibold text-white mb-3">
                      About
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {selectedMember.bio}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      Skills
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedMember.skills.map((skill, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="border-purple-500/30 text-purple-400"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      Key Responsibilities
                    </h3>
                    <ul className="space-y-2">
                      {selectedMember.responsibilities.map(
                        (responsibility, index) => (
                          <li
                            key={index}
                            className="flex items-start space-x-3 text-gray-300"
                          >
                            <span className="text-purple-400 mt-1">•</span>
                            <span>{responsibility}</span>
                          </li>
                        )
                      )}
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
  );
}
