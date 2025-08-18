"use client";

import { useState } from "react";
import {
  Search,
  ArrowLeft,
  X,
  Users,
  Award,
  Calendar,
  Target,
  TrendingUp,
  Mail,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import Footer from "@/components/footer";

interface Committee {
  id: string;
  name: string;
  description: string;
  fullDescription: string;
  logo: string;
  color: string;
  members: number;
  // established: string;
  focus: string[];
  leadership: {
    head: {
      name: string;
      image: string;
      bio: string;
      achievements: string[];
      contact: { email?: string; phone?: string };
      social: { linkedin?: string; instagram?: string; facebook?: string };
    };
    coHead1: {
      name: string;
      image: string;
      bio: string;
      achievements: string[];
      contact: { email?: string; phone?: string };
      social: { linkedin?: string; instagram?: string; facebook?: string };
    };
    coHead2: {
      name: string;
      image: string;
      bio: string;
      achievements: string[];
      contact: { email?: string; phone?: string };
      social: { linkedin?: string; instagram?: string; facebook?: string };
    };
  };
  membersList: {
    name: string;
    role: string;
    image: string;
    year: string;
  }[];
  achievements: {
    title: string;
    description: string;
    date: string;
    impact: string;
  }[];
  events: {
    title: string;
    description: string;
    date: string;
    status: "completed" | "upcoming" | "ongoing";
    image: string;
    participants: number;
  }[];
  activities: string[];
  gallery: string[];
}

export default function CommitteesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCommittee, setSelectedCommittee] = useState<Committee | null>(
    null
  );

  const committees: Committee[] = [
    {
      id: "techspot",
      name: "Techspot Committee",
      description:
        "Manages Techspot initiatives: tech talks, reviews, and maker sessions.",
      fullDescription:
        "Techspot committee is the hub for gadget reviews, demos, maker-space builds, and weekly lightning talks on emerging tech.",
      logo: "/placeholder.svg?height=80&width=80&text=🧰",
      color: "blue",
      members: 8,
      // established: "2020-07-22",
      focus: ["Techniqual events", "organize Hachathons", "Make Projects", "Talks"],
      leadership: {
        head: {
          name: "Shivraj Ambhore",
          image:
            "Shivraj-Ambhore.jpg",
          bio: "I am a Computer Science Engineering student passionate about Java, Data Structures & Algorithms, and Web Development, with a strong focus on problem-solving and building impactful projects.",
          achievements: ["Java", "DSA", "Full stack Development"],
          contact: { email: "shivrajambhore01@gmail.com" },
          social: {
            linkedin: "https://www.linkedin.com/in/shivraj-ambhore",
            instagram:
              "https://www.instagram.com/shivraj_ambhore01?igsh=MWQxNzkxNnRrZ2hlZw==",
          },
        },
         coHead1: {
          name: "Anuj Lakhekar",
          image:
            "IMG-20250801-WA0075 - anuj lakhekar.jpg",
          bio: "Hello I am Anuj  from cse b passionate about coading and good at web dev",
          achievements: [""],
          contact: { email: "anujlakhekar@gmail.com" },
          social: {
            linkedin: "https://www.linkedin.com/in/anuj-lakhekar-72a43033b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            instagram:
              "https://www.instagram.com/anuj_lakhekar?igsh=MWxob3V0NzQzaWJyaQ==",
          },
        },
         coHead2: {
          name: "Santosh Donapurge",
          image:
            "1748265675540 - Sento Coder.jpg",
          bio: "SDE",
          achievements: [""],
          contact: { email: "codersento@gmail.com" },
          social: {
            linkedin: "https://www.linkedin.com/in/santosh-donapurge-bb1835304?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            instagram:
              "/team",
          },
        },
        
      },
      membersList: [
        {
          name: "Sargun singh Bhatia",
          role: "Member",
          image: "/professional-female-student.png",
          year: "3rd Year",
        },
        {
          name: "Sachin Bodani",
          role: "Member",
          image: "/professional-male-student.png",
          year: "3rd Year",
        },
         {
          name: "Anjali Kundojwar",
          role: "Member",
          image: "/professional-female-student.png",
          year: "2nd Year",
        },
          {
          name: "sanchi Sawale",
          role: "Member",
          image: "/professional-female-student.png",
          year: "2nd Year",
        },
      ],
      achievements: [
        {
          title: "Schologamma Website",
          description: "All About schologamma forum",
          date: "2025-26",
          impact: "every one can see updates and details of schologamma forum",
        },
      ],
      events: [
        {
          title: "",
          description: "",
          date: "",
          status: "upcoming",
          image: "",
          participants: 0,
        },
      ],
      activities: ["Weekly talks", "Hands-on builds", "Review sessions"],
      gallery: ["/techspot-pi-night.png"],
    },
    {
      id: "content-editor",
      name: "Content Editor Committee",
      description:
        "Managing content creation, editorial processes, and digital storytelling for the forum.",
      fullDescription:
        "The Content Editor Committee is responsible for creating, curating, and managing all written and digital content for Schologamma. We maintain quality, voice, and consistency across platforms.",
      logo: "/placeholder.svg?height=80&width=80&text=📝",
      color: "indigo",
      members: 12,
      // established: "2020-01-15",
      focus: [
        "Content Creation",
        "Editorial Review",
        "Documentation",
        "Copy Editing",
        "Blog/Newsletter",
      ],
      leadership: {
         head: {
          name: "Shivraj Ambhore",
          image:
            "https://drive.google.com/open?id=1X-4r14KBPa-yeFsudR3gJAMGGfhqs0WK",
          bio: "I am a Computer Science Engineering student passionate about Java, Data Structures & Algorithms, and Web Development, with a strong focus on problem-solving and building impactful projects.",
          achievements: ["Java", "DSA", "Full stack Development"],
          contact: { email: "shivrajambhore01@gmail.com" },
          social: {
            linkedin: "https://www.linkedin.com/in/shivraj-ambhore",
            instagram:
              "https://www.instagram.com/shivraj_ambhore01?igsh=MWQxNzkxNnRrZ2hlZw==",
          },
        },
         coHead1: {
          name: "Anuj Lakhekar",
          image:
            "IMG-20250801-WA0075 - anuj lakhekar.jpg",
          bio: "Hello I am Anuj  from cse b passionate about coading and good at web dev",
          achievements: [""],
          contact: { email: "anujlakhekar@gmail.com" },
          social: {
            linkedin: "https://www.linkedin.com/in/anuj-lakhekar-72a43033b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            instagram:
              "https://www.instagram.com/anuj_lakhekar?igsh=MWxob3V0NzQzaWJyaQ==",
          },
        },
         coHead2: {
          name: "Santosh Donapurge",
          image:
            "1748265675540 - Sento Coder.jpg",
          bio: "SDE",
          achievements: [""],
          contact: { email: "codersento@gmail.com" },
          social: {
            linkedin: "https://www.linkedin.com/in/santosh-donapurge-bb1835304?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            instagram:
              "/team",
          },
        },
      },
      membersList: [
        {
          name: "Anita Patel",
          role: "Senior Writer",
          image: "/professional-female-student.png",
          year: "3rd Year",
        },
        {
          name: "Vikash Kumar",
          role: "Social Media Manager",
          image: "/professional-male-student-glasses.png",
          year: "2nd Year",
        },
        {
          name: "Sneha Reddy",
          role: "Content Reviewer",
          image: "/creative-female-student.png",
          year: "4th Year",
        },
        {
          name: "Arjun Singh",
          role: "Technical Writer",
          image: "/technical-student-laptop.png",
          year: "3rd Year",
        },
      ],
      achievements: [
        {
          title: "Best Content Strategy 2023",
          description: "Recognized for innovative content planning",
          date: "2023-12-15",
          impact: "200% engagement increase",
        },
      ],
      events: [
        {
          title: "Content Writing Workshop",
          description: "Hands-on writing and editing",
          date: "2024-02-15",
          status: "upcoming",
          image: "/web-dev-bootcamp-poster.png",
          participants: 45,
        },
        {
          title: "Digital Marketing Seminar",
          description: "Content + SEO fundamentals",
          date: "2023-11-10",
          status: "completed",
          image: "/digital-marketing-masterclass-poster.png",
          participants: 60,
        },
      ],
      activities: [
        "Weekly content planning",
        "Monthly newsletter",
        "Docs & guides",
        "Event coverage",
        "Editorial reviews",
      ],
      gallery: [
        "/canva-tutorial-poster.png",
        "/digital-marketing-masterclass-poster.png",
      ],
    },
    {
      id: "technical",
      name: "Technical Committee",
      description:
        "Focused on coding, development, and technical projects for the forum.",
      fullDescription:
        "The Technical Committee drives innovation through software development, web technologies, and emerging tech solutions. It manages the website, organizes hackathons, and supports tech-driven initiatives.",
      logo: "/placeholder.svg?height=80&width=80&text=💻",
      color: "blue",
      members: 12,
      // established: "2019-01-15",
      focus: [
        "Web Development",
        "App Development",
        "AI/ML",
        "Blockchain",
        "Hackathons",
      ],
      leadership: {
         head: {
          name: "Shivraj Ambhore",
          image:
            "https://drive.google.com/open?id=1X-4r14KBPa-yeFsudR3gJAMGGfhqs0WK",
          bio: "I am a Computer Science Engineering student passionate about Java, Data Structures & Algorithms, and Web Development, with a strong focus on problem-solving and building impactful projects.",
          achievements: ["Java", "DSA", "Full stack Development"],
          contact: { email: "shivrajambhore01@gmail.com" },
          social: {
            linkedin: "https://www.linkedin.com/in/shivraj-ambhore",
            instagram:
              "https://www.instagram.com/shivraj_ambhore01?igsh=MWQxNzkxNnRrZ2hlZw==",
          },
        },
         coHead1: {
          name: "Anuj Lakhekar",
          image:
            "IMG-20250801-WA0075 - anuj lakhekar.jpg",
          bio: "Hello I am Anuj  from cse b passionate about coading and good at web dev",
          achievements: [""],
          contact: { email: "anujlakhekar@gmail.com" },
          social: {
            linkedin: "https://www.linkedin.com/in/anuj-lakhekar-72a43033b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            instagram:
              "https://www.instagram.com/anuj_lakhekar?igsh=MWxob3V0NzQzaWJyaQ==",
          },
        },
         coHead2: {
          name: "Santosh Donapurge",
          image:
            "1748265675540 - Sento Coder.jpg",
          bio: "SDE",
          achievements: [""],
          contact: { email: "codersento@gmail.com" },
          social: {
            linkedin: "https://www.linkedin.com/in/santosh-donapurge-bb1835304?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            instagram:
              "/team",
          },
        },
      },
      membersList: [
        {
          name: "Sneha Verma",
          role: "Frontend Developer",
          image: "/professional-female-student.png",
          year: "3rd Year",
        },
        {
          name: "Rohit Agarwal",
          role: "Backend Developer",
          image: "/professional-male-student.png",
          year: "2nd Year",
        },
        {
          name: "Kunal Joshi",
          role: "AI/ML Specialist",
          image: "/professional-male-student-glasses.png",
          year: "3rd Year",
        },
      ],
      achievements: [
        {
          title: "Hackathon Excellence 2023",
          description: "Largest coding competition on campus",
          date: "2023-10-10",
          impact: "Tech culture boost",
        },
      ],
      events: [
        {
          title: "Web Development Bootcamp",
          description: "HTML/CSS/JS crash course",
          date: "2024-01-25",
          status: "completed",
          image: "/web-dev-bootcamp-poster.png",
          participants: 90,
        },
        {
          title: "AI & ML Hackathon",
          description: "24-hour challenge",
          date: "2024-03-15",
          status: "upcoming",
          image: "/hackathon-poster.png",
          participants: 120,
        },
      ],
      activities: [
        "Website maintenance",
        "Tech workshops",
        "Open-source sprints",
        "Event tech support",
      ],
      gallery: ["/web-dev-bootcamp-poster.png"],
    },
    {
      id: "creative",
      name: "Creative Committee",
      description:
        "Handling design, graphics, multimedia content, and creative project development.",
      fullDescription:
        "The Creative Committee brings artistic vision to life through innovative design solutions, multimedia content creation, and creative project management. We handle branding, posters, social graphics, and campaigns.",
      logo: "/placeholder.svg?height=80&width=80&text=🎨",
      color: "pink",
      members: 10,
      // established: "2020-03-10",
      focus: [
        "Graphic Design",
        "Video Production",
        "Photography",
        "Brand Identity",
        "Creative Campaigns",
      ],
      leadership: {
        head: {
          name: "Shivraj Ambhore",
          image:
            "https://drive.google.com/open?id=1X-4r14KBPa-yeFsudR3gJAMGGfhqs0WK",
          bio: "I am a Computer Science Engineering student passionate about Java, Data Structures & Algorithms, and Web Development, with a strong focus on problem-solving and building impactful projects.",
          achievements: ["Java", "DSA", "Full stack Development"],
          contact: { email: "shivrajambhore01@gmail.com" },
          social: {
            linkedin: "https://www.linkedin.com/in/shivraj-ambhore",
            instagram:
              "https://www.instagram.com/shivraj_ambhore01?igsh=MWQxNzkxNnRrZ2hlZw==",
          },
        },
         coHead1: {
          name: "Anuj Lakhekar",
          image:
            "IMG-20250801-WA0075 - anuj lakhekar.jpg",
          bio: "Hello I am Anuj  from cse b passionate about coading and good at web dev",
          achievements: [""],
          contact: { email: "anujlakhekar@gmail.com" },
          social: {
            linkedin: "https://www.linkedin.com/in/anuj-lakhekar-72a43033b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            instagram:
              "https://www.instagram.com/anuj_lakhekar?igsh=MWxob3V0NzQzaWJyaQ==",
          },
        },
         coHead2: {
          name: "Santosh Donapurge",
          image:
            "1748265675540 - Sento Coder.jpg",
          bio: "SDE",
          achievements: [""],
          contact: { email: "codersento@gmail.com" },
          social: {
            linkedin: "https://www.linkedin.com/in/santosh-donapurge-bb1835304?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            instagram:
              "/team",
          },
        },
      },
      membersList: [
        {
          name: "Ravi Kumar",
          role: "Video Editor",
          image: "/professional-male-student.png",
          year: "3rd Year",
        },
        {
          name: "Pooja Singh",
          role: "Graphic Designer",
          image: "/professional-female-student.png",
          year: "2nd Year",
        },
        {
          name: "Nisha Patel",
          role: "UI/UX Designer",
          image: "/creative-female-student.png",
          year: "3rd Year",
        },
      ],
      achievements: [
        {
          title: "Best Design Portfolio 2023",
          description: "Outstanding creative work and innovation",
          date: "2023-11-20",
          impact: "Brand uplift",
        },
      ],
      events: [
        {
          title: "Canva Advanced Tutorial",
          description: "Design workflows & shortcuts",
          date: "2024-01-08",
          status: "completed",
          image: "/canva-tutorial-poster.png",
          participants: 65,
        },
        {
          title: "Photography Workshop",
          description: "Shooting + post-processing",
          date: "2024-02-25",
          status: "upcoming",
          image: "/web-dev-bootcamp-poster.png",
          participants: 40,
        },
      ],
      activities: [
        "Poster design",
        "Social graphics",
        "Event photo/video",
        "Brand guidelines",
      ],
      gallery: ["/canva-tutorial-poster.png"],
    },
    {
      id: "sports",
      name: "Sports Committee",
      description:
        "Encourages athletic spirit and organizes sports tournaments.",
      fullDescription:
        "The Sports Committee promotes fitness and team spirit through inter- and intra-college tournaments and regular training sessions.",
      logo: "/placeholder.svg?height=80&width=80&text=🏅",
      color: "emerald",
      members: 12,
      // established: "2017-09-15",
      focus: ["Cricket", "Football", "Athletics", "Badminton", "Fitness"],
      leadership: {
       head: {
          name: "Shivraj Ambhore",
          image:
            "https://drive.google.com/open?id=1X-4r14KBPa-yeFsudR3gJAMGGfhqs0WK",
          bio: "I am a Computer Science Engineering student passionate about Java, Data Structures & Algorithms, and Web Development, with a strong focus on problem-solving and building impactful projects.",
          achievements: ["Java", "DSA", "Full stack Development"],
          contact: { email: "shivrajambhore01@gmail.com" },
          social: {
            linkedin: "https://www.linkedin.com/in/shivraj-ambhore",
            instagram:
              "https://www.instagram.com/shivraj_ambhore01?igsh=MWQxNzkxNnRrZ2hlZw==",
          },
        },
         coHead1: {
          name: "Anuj Lakhekar",
          image:
            "IMG-20250801-WA0075 - anuj lakhekar.jpg",
          bio: "Hello I am Anuj  from cse b passionate about coading and good at web dev",
          achievements: [""],
          contact: { email: "anujlakhekar@gmail.com" },
          social: {
            linkedin: "https://www.linkedin.com/in/anuj-lakhekar-72a43033b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            instagram:
              "https://www.instagram.com/anuj_lakhekar?igsh=MWxob3V0NzQzaWJyaQ==",
          },
        },
         coHead2: {
          name: "Santosh Donapurge",
          image:
            "1748265675540 - Sento Coder.jpg",
          bio: "SDE",
          achievements: [""],
          contact: { email: "codersento@gmail.com" },
          social: {
            linkedin: "https://www.linkedin.com/in/santosh-donapurge-bb1835304?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            instagram:
              "/team",
          },
        },
      },
      membersList: [
        {
          name: "Aisha Khan",
          role: "Athletics Captain",
          image: "/professional-female-student.png",
          year: "3rd Year",
        },
        {
          name: "Rohit Mehra",
          role: "Football Lead",
          image: "/professional-male-student.png",
          year: "2nd Year",
        },
        {
          name: "Diya Jain",
          role: "Badminton Lead",
          image: "/professional-female-student.png",
          year: "1st Year",
        },
      ],
      achievements: [
        {
          title: "Intercollege Winners 2023",
          description: "Gold in athletics relay",
          date: "2023-12-05",
          impact: "Reputation boost",
        },
      ],
      events: [
        {
          title: "Sports Meet",
          description: "Track and field + team sports",
          date: "2024-03-10",
          status: "upcoming",
          image: "/sports-meet.png",
          participants: 350,
        },
      ],
      activities: [
        "Weekly training",
        "Intra-college leagues",
        "Fitness sessions",
      ],
      gallery: ["/sports-meet.png"],
    },
    {
      id: "publicity",
      name: "Publicity Committee",
      description: "Spreads the word through PR, announcements, and outreach.",
      fullDescription:
        "The Publicity Committee handles announcements, posters, press notes, and campus outreach to maximize event awareness.",
      logo: "/placeholder.svg?height=80&width=80&text=📣",
      color: "orange",
      members: 9,
      // established: "2018-08-01",
      focus: ["PR & Outreach", "Announcements", "Campaigns", "Brand Voice"],
      leadership: {
         head: {
          name: "Shivraj Ambhore",
          image:
            "https://drive.google.com/open?id=1X-4r14KBPa-yeFsudR3gJAMGGfhqs0WK",
          bio: "I am a Computer Science Engineering student passionate about Java, Data Structures & Algorithms, and Web Development, with a strong focus on problem-solving and building impactful projects.",
          achievements: ["Java", "DSA", "Full stack Development"],
          contact: { email: "shivrajambhore01@gmail.com" },
          social: {
            linkedin: "https://www.linkedin.com/in/shivraj-ambhore",
            instagram:
              "https://www.instagram.com/shivraj_ambhore01?igsh=MWQxNzkxNnRrZ2hlZw==",
          },
        },
         coHead1: {
          name: "Anuj Lakhekar",
          image:
            "IMG-20250801-WA0075 - anuj lakhekar.jpg",
          bio: "Hello I am Anuj  from cse b passionate about coading and good at web dev",
          achievements: [""],
          contact: { email: "anujlakhekar@gmail.com" },
          social: {
            linkedin: "https://www.linkedin.com/in/anuj-lakhekar-72a43033b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            instagram:
              "https://www.instagram.com/anuj_lakhekar?igsh=MWxob3V0NzQzaWJyaQ==",
          },
        },
         coHead2: {
          name: "Santosh Donapurge",
          image:
            "1748265675540 - Sento Coder.jpg",
          bio: "SDE",
          achievements: [""],
          contact: { email: "codersento@gmail.com" },
          social: {
            linkedin: "https://www.linkedin.com/in/santosh-donapurge-bb1835304?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            instagram:
              "/team",
          },
        },
      },
      membersList: [
        {
          name: "Harsh Vaid",
          role: "Announcements Lead",
          image: "/professional-male-student.png",
          year: "3rd Year",
        },
        {
          name: "Mahek Jain",
          role: "Outreach Coordinator",
          image: "/professional-female-student.png",
          year: "2nd Year",
        },
      ],
      achievements: [
        {
          title: "Campus Awareness 2023",
          description: "Record event impressions",
          date: "2023-10-28",
          impact: "High turnout",
        },
      ],
      events: [
        {
          title: "Publicity Drive",
          description: "Standees, posters, and mic announcements",
          date: "2024-01-30",
          status: "completed",
          image: "/publicity-drive.png",
          participants: 60,
        },
      ],
      activities: [
        "Posters & standees",
        "Press notes",
        "Mic announcements",
        "Classroom visits",
      ],
      gallery: ["/publicity-drive.png"],
    },
    {
      id: "discipline",
      name: "Discipline Committee",
      description: "Maintains decorum, safety, and code of conduct at events.",
      fullDescription:
        "The Discipline Committee ensures smooth, safe, and respectful participation by setting and enforcing event guidelines.",
      logo: "/placeholder.svg?height=80&width=80&text=🛡️",
      color: "indigo",
      members: 10,
      // established: "2018-01-20",
      focus: ["Code of Conduct", "Safety", "Crowd Control", "Compliance"],
      leadership: {
         head: {
          name: "Shivraj Ambhore",
          image:
            "https://drive.google.com/open?id=1X-4r14KBPa-yeFsudR3gJAMGGfhqs0WK",
          bio: "I am a Computer Science Engineering student passionate about Java, Data Structures & Algorithms, and Web Development, with a strong focus on problem-solving and building impactful projects.",
          achievements: ["Java", "DSA", "Full stack Development"],
          contact: { email: "shivrajambhore01@gmail.com" },
          social: {
            linkedin: "https://www.linkedin.com/in/shivraj-ambhore",
            instagram:
              "https://www.instagram.com/shivraj_ambhore01?igsh=MWQxNzkxNnRrZ2hlZw==",
          },
        },
         coHead1: {
          name: "Anuj Lakhekar",
          image:
            "IMG-20250801-WA0075 - anuj lakhekar.jpg",
          bio: "Hello I am Anuj  from cse b passionate about coading and good at web dev",
          achievements: [""],
          contact: { email: "anujlakhekar@gmail.com" },
          social: {
            linkedin: "https://www.linkedin.com/in/anuj-lakhekar-72a43033b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            instagram:
              "https://www.instagram.com/anuj_lakhekar?igsh=MWxob3V0NzQzaWJyaQ==",
          },
        },
         coHead2: {
          name: "Santosh Donapurge",
          image:
            "1748265675540 - Sento Coder.jpg",
          bio: "SDE",
          achievements: [""],
          contact: { email: "codersento@gmail.com" },
          social: {
            linkedin: "https://www.linkedin.com/in/santosh-donapurge-bb1835304?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            instagram:
              "/team",
          },
        },
      },
      membersList: [
        {
          name: "Mohit Patil",
          role: "Security Marshal",
          image: "/professional-male-student.png",
          year: "3rd Year",
        },
        {
          name: "Riya Sen",
          role: "Volunteer Lead",
          image: "/professional-female-student.png",
          year: "2nd Year",
        },
      ],
      achievements: [
        {
          title: "Safe Fest 2023",
          description: "Managed 2k+ attendees without incident",
          date: "2023-12-18",
          impact: "Model SOP adopted",
        },
      ],
      events: [
        {
          title: "Volunteer Orientation",
          description: "Rules, roles, and emergency drills",
          date: "2024-02-05",
          status: "completed",
          image: "/discipline-orientation.png",
          participants: 80,
        },
      ],
      activities: [
        "Queue & entry systems",
        "Backstage control",
        "Emergency response readiness",
      ],
      gallery: ["/discipline-orientation.png"],
    },
    {
      id: "event",
      name: "Event committee",
      description: "Plans, schedules, and executes club/forum events.",
      fullDescription:
        "The Event committee manages end-to-end event lifecycle: ideation, budgeting, permissions, scheduling, and execution.",
      logo: "/placeholder.svg?height=80&width=80&text=🗓️",
      color: "orange",
      members: 11,
      // established: "2018-06-10",
      focus: ["Planning", "Budgeting", "Vendor & Venue", "Stage Management"],
      leadership: {
         head: {
          name: "Shivraj Ambhore",
          image:
            "https://drive.google.com/open?id=1X-4r14KBPa-yeFsudR3gJAMGGfhqs0WK",
          bio: "I am a Computer Science Engineering student passionate about Java, Data Structures & Algorithms, and Web Development, with a strong focus on problem-solving and building impactful projects.",
          achievements: ["Java", "DSA", "Full stack Development"],
          contact: { email: "shivrajambhore01@gmail.com" },
          social: {
            linkedin: "https://www.linkedin.com/in/shivraj-ambhore",
            instagram:
              "https://www.instagram.com/shivraj_ambhore01?igsh=MWQxNzkxNnRrZ2hlZw==",
          },
        },
         coHead1: {
          name: "Anuj Lakhekar",
          image:
            "IMG-20250801-WA0075 - anuj lakhekar.jpg",
          bio: "Hello I am Anuj  from cse b passionate about coading and good at web dev",
          achievements: [""],
          contact: { email: "anujlakhekar@gmail.com" },
          social: {
            linkedin: "https://www.linkedin.com/in/anuj-lakhekar-72a43033b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            instagram:
              "https://www.instagram.com/anuj_lakhekar?igsh=MWxob3V0NzQzaWJyaQ==",
          },
        },
         coHead2: {
          name: "Santosh Donapurge",
          image:
            "1748265675540 - Sento Coder.jpg",
          bio: "SDE",
          achievements: [""],
          contact: { email: "codersento@gmail.com" },
          social: {
            linkedin: "https://www.linkedin.com/in/santosh-donapurge-bb1835304?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            instagram:
              "/team",
          },
        },
      },
      membersList: [
        {
          name: "Kripa Shah",
          role: "Stage Manager",
          image: "/professional-female-student.png",
          year: "3rd Year",
        },
        {
          name: "Yash Tiwari",
          role: "Logistics",
          image: "/professional-male-student.png",
          year: "2nd Year",
        },
      ],
      achievements: [
        {
          title: "Zero-Delay Fest 2022",
          description: "All slots started on time",
          date: "2022-12-12",
          impact: "Operational excellence",
        },
      ],
      events: [
        {
          title: "Annual Forum Day",
          description: "Flagship multi-track event",
          date: "2024-02-20",
          status: "completed",
          image: "/forum-day.png",
          participants: 800,
        },
      ],
      activities: [
        "Event timelines",
        "Volunteer rosters",
        "Stage/backstage ops",
      ],
      gallery: ["/forum-day.png"],
    },
    {
      id: "digital",
      name: "Digital Committee",
      description: "Oversees digital platforms, streaming, and analytics.",
      fullDescription:
        "The Digital Committee focuses on livestreams, recordings, on-site AV, analytics, and website/app enhancements to improve digital reach.",
      logo: "/placeholder.svg?height=80&width=80&text=🔗",
      color: "emerald",
      members: 8,
      // established: "2019-09-01",
      focus: ["Livestream", "Video/Audio", "Web/App Enhancements", "Analytics"],
      leadership: {
         head: {
          name: "Shivraj Ambhore",
          image:
            "https://drive.google.com/open?id=1X-4r14KBPa-yeFsudR3gJAMGGfhqs0WK",
          bio: "I am a Computer Science Engineering student passionate about Java, Data Structures & Algorithms, and Web Development, with a strong focus on problem-solving and building impactful projects.",
          achievements: ["Java", "DSA", "Full stack Development"],
          contact: { email: "shivrajambhore01@gmail.com" },
          social: {
            linkedin: "https://www.linkedin.com/in/shivraj-ambhore",
            instagram:
              "https://www.instagram.com/shivraj_ambhore01?igsh=MWQxNzkxNnRrZ2hlZw==",
          },
        },
         coHead1: {
          name: "Anuj Lakhekar",
          image:
            "IMG-20250801-WA0075 - anuj lakhekar.jpg",
          bio: "Hello I am Anuj  from cse b passionate about coading and good at web dev",
          achievements: [""],
          contact: { email: "anujlakhekar@gmail.com" },
          social: {
            linkedin: "https://www.linkedin.com/in/anuj-lakhekar-72a43033b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            instagram:
              "https://www.instagram.com/anuj_lakhekar?igsh=MWxob3V0NzQzaWJyaQ==",
          },
        },
         coHead2: {
          name: "Santosh Donapurge",
          image:
            "1748265675540 - Sento Coder.jpg",
          bio: "SDE",
          achievements: [""],
          contact: { email: "codersento@gmail.com" },
          social: {
            linkedin: "https://www.linkedin.com/in/santosh-donapurge-bb1835304?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            instagram:
              "/team",
          },
        },
      },
      membersList: [
        {
          name: "Sana Qureshi",
          role: "Stream Engineer",
          image: "/professional-female-student.png",
          year: "2nd Year",
        },
        {
          name: "Aman Gupta",
          role: "Editor",
          image: "/professional-male-student.png",
          year: "3rd Year",
        },
      ],
      achievements: [
        {
          title: "Seamless Hybrid 2023",
          description: "Zero-downtime streaming across tracks",
          date: "2023-11-05",
          impact: "Remote reach",
        },
      ],
      events: [
        {
          title: "Live AV Setup 101",
          description: "Hands-on with mixers/cams",
          date: "2024-01-18",
          status: "completed",
          image: "/digital-av-workshop.png",
          participants: 55,
        },
      ],
      activities: [
        "Livestream & recording",
        "On-site AV setup",
        "Post-event editing",
        "Site analytics",
      ],
      gallery: ["/digital-av-workshop.png"],
    },

    {
      id: "startup",
      name: "Startup Committee",
      description: "Fosters entrepreneurship, ideation, and incubation.",
      fullDescription:
        "The Startup Committee helps students validate ideas, build MVPs, connect with mentors, and pitch to investors.",
      logo: "/placeholder.svg?height=80&width=80&text=💡",
      color: "indigo",
      members: 10,
      // established: "2021-01-05",
      focus: [
        "Ideation",
        "MVP Building",
        "Pitching",
        "Mentoring",
        "Networking",
      ],
      leadership: {
        head: {
          name: "Shivraj Ambhore",
          image:
            "https://drive.google.com/open?id=1X-4r14KBPa-yeFsudR3gJAMGGfhqs0WK",
          bio: "I am a Computer Science Engineering student passionate about Java, Data Structures & Algorithms, and Web Development, with a strong focus on problem-solving and building impactful projects.",
          achievements: ["Java", "DSA", "Full stack Development"],
          contact: { email: "shivrajambhore01@gmail.com" },
          social: {
            linkedin: "https://www.linkedin.com/in/shivraj-ambhore",
            instagram:
              "https://www.instagram.com/shivraj_ambhore01?igsh=MWQxNzkxNnRrZ2hlZw==",
          },
        },
         coHead1: {
          name: "Anuj Lakhekar",
          image:
            "IMG-20250801-WA0075 - anuj lakhekar.jpg",
          bio: "Hello I am Anuj  from cse b passionate about coading and good at web dev",
          achievements: [""],
          contact: { email: "anujlakhekar@gmail.com" },
          social: {
            linkedin: "https://www.linkedin.com/in/anuj-lakhekar-72a43033b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            instagram:
              "https://www.instagram.com/anuj_lakhekar?igsh=MWxob3V0NzQzaWJyaQ==",
          },
        },
         coHead2: {
          name: "Santosh Donapurge",
          image:
            "1748265675540 - Sento Coder.jpg",
          bio: "SDE",
          achievements: [""],
          contact: { email: "codersento@gmail.com" },
          social: {
            linkedin: "https://www.linkedin.com/in/santosh-donapurge-bb1835304?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            instagram:
              "/team",
          },
        },
      },
      membersList: [
        {
          name: "Kartik Rao",
          role: "Pitch Coach",
          image: "/professional-male-student.png",
          year: "4th Year",
        },
        {
          name: "Nivedita Paul",
          role: "Research Lead",
          image: "/professional-female-student.png",
          year: "2nd Year",
        },
      ],
      achievements: [
        {
          title: "Demo Day 2023",
          description: "Raised seed grants for 2 teams",
          date: "2023-09-05",
          impact: "Early funding",
        },
      ],
      events: [
        {
          title: "Startup Bootcamp",
          description: "Problem → MVP → Pitch",
          date: "2024-02-28",
          status: "completed",
          image: "/startup-bootcamp.png",
          participants: 110,
        },
      ],
      activities: [
        "Idea jams",
        "Mentor office hours",
        "Pitch practice",
        "Investor connects",
      ],
      gallery: ["/startup-bootcamp.png"],
    },
    {
      id: "nss",
      name: "NSS Committee",
      description:
        "Encouraging student participation in community service, social responsibility, and nation-building activities.",
      fullDescription:
        "The NSS (National Service Scheme) Committee inspires students to contribute towards community service and social responsibility. Through awareness drives, social activities, and volunteering, we work for the welfare of society while promoting leadership, discipline, and empathy among students.",
      logo: "/placeholder.svg?height=80&width=80&text=🌍",
      color: "green",
      members: 25,
      // established: "2018-07-15",
      focus: [
        "Community Service",
        "Social Awareness",
        "Health Camps",
        "Environmental Initiatives",
        "Volunteering",
      ],
      leadership: {
         head: {
          name: "Shivraj Ambhore",
          image:
            "https://drive.google.com/open?id=1X-4r14KBPa-yeFsudR3gJAMGGfhqs0WK",
          bio: "I am a Computer Science Engineering student passionate about Java, Data Structures & Algorithms, and Web Development, with a strong focus on problem-solving and building impactful projects.",
          achievements: ["Java", "DSA", "Full stack Development"],
          contact: { email: "shivrajambhore01@gmail.com" },
          social: {
            linkedin: "https://www.linkedin.com/in/shivraj-ambhore",
            instagram:
              "https://www.instagram.com/shivraj_ambhore01?igsh=MWQxNzkxNnRrZ2hlZw==",
          },
        },
         coHead1: {
          name: "Anuj Lakhekar",
          image:
            "IMG-20250801-WA0075 - anuj lakhekar.jpg",
          bio: "Hello I am Anuj  from cse b passionate about coading and good at web dev",
          achievements: [""],
          contact: { email: "anujlakhekar@gmail.com" },
          social: {
            linkedin: "https://www.linkedin.com/in/anuj-lakhekar-72a43033b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            instagram:
              "https://www.instagram.com/anuj_lakhekar?igsh=MWxob3V0NzQzaWJyaQ==",
          },
        },
         coHead2: {
          name: "Santosh Donapurge",
          image:
            "1748265675540 - Sento Coder.jpg",
          bio: "SDE",
          achievements: [""],
          contact: { email: "codersento@gmail.com" },
          social: {
            linkedin: "https://www.linkedin.com/in/santosh-donapurge-bb1835304?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            instagram:
              "/team",
          },
        },
      },
      membersList: [
        {
          name: "Sneha Rathi",
          role: "Volunteer Coordinator",
          image: "/professional-female-student.png",
          year: "3rd Year",
        },
        {
          name: "Manoj Yadav",
          role: "Health Camp Organizer",
          image: "/professional-male-student.png",
          year: "2nd Year",
        },
        {
          name: "Priya Nair",
          role: "Environment Lead",
          image: "/professional-female-student.png",
          year: "4th Year",
        },
        {
          name: "Rahul Patil",
          role: "Event Volunteer",
          image: "/professional-male-student.png",
          year: "1st Year",
        },
      ],
      achievements: [
        {
          title: "Best NSS Unit Award",
          description:
            "Awarded for outstanding contribution to community service in 2023",
          date: "2023-12-10",
          impact: "Enhanced social impact and student engagement",
        },
      ],
      events: [
        {
          title: "Blood Donation Camp",
          description: "Organized a blood donation drive with local hospitals",
          date: "2024-03-12",
          status: "completed",
          image: "/blood-donation-camp.png",
          participants: 150,
        },
        {
          title: "Tree Plantation Drive",
          description:
            "Encouraging green initiatives and awareness on environmental conservation",
          date: "2024-06-05",
          status: "upcoming",
          image: "/tree-plantation-drive.png",
          participants: 80,
        },
      ],
      activities: [
        "Organizing health and blood donation camps",
        "Awareness drives on social issues",
        "Environmental activities like tree plantation",
        "Volunteering for community welfare programs",
        "Promoting youth leadership in social work",
      ],
      gallery: ["/blood-donation-camp.png", "/tree-plantation-drive.png"],
    },
  ];

  const filteredCommittees = committees.filter(
    (committee) =>
      committee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      committee.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      committee.focus.some((focus) =>
        focus.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  const getColorClasses = (color: string) => {
    const colorMap: Record<
      "blue" | "green" | "pink" | "orange" | "indigo" | "emerald",
      string
    > = {
      blue: "text-blue-500",
      green: "text-green-500",
      pink: "text-pink-500",
      orange: "text-orange-500",
      indigo: "text-indigo-500",
      emerald: "text-emerald-500",
    };

    function getColor(color: keyof typeof colorMap): string {
      return colorMap[color] || colorMap.blue;
    }

    return colorMap[color] || colorMap.blue;
  };

  type Status = "completed" | "ongoing" | "upcoming";

  const getStatusColor = (status: Status): string => {
    const statusMap: Record<Status, string> = {
      completed: "bg-green-500/20 text-green-400 border-green-500/30",
      ongoing: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
      upcoming: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    };

    return statusMap[status];
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
            Discover the dedicated teams that drive Schologamma's success. Each
            committee brings unique expertise and passion to create meaningful
            impact in our community.
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
              className={`bg-gradient-to-br ${getColorClasses(
                committee.color
              )} backdrop-blur-sm border transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 hover:shadow-2xl group cursor-pointer`}
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
                className={`h-32 bg-gradient-to-r ${getColorClasses(
                  selectedCommittee.color
                )} rounded-t-2xl flex items-center justify-center`}
              >
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <img
                      src={selectedCommittee.logo || "/placeholder.svg"}
                      alt={`${selectedCommittee.name} logo`}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <h2 className="text-3xl font-bold text-white">
                    {selectedCommittee.name}
                  </h2>
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
                    <h3 className="text-xl font-semibold text-white mb-3">
                      About
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {selectedCommittee.fullDescription}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      Focus Areas
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedCommittee.focus.map((focus, index) => (
                        <Badge
                          key={index}
                          className="bg-purple-500/20 text-purple-400 border-purple-500/30"
                        >
                          {focus}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      Key Activities
                    </h3>
                    <ul className="space-y-2">
                      {selectedCommittee.activities.map((activity, index) => (
                        <li
                          key={index}
                          className="flex items-start space-x-3 text-gray-300"
                        >
                          <Target className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 text-center">
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <Users className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-white">
                        {selectedCommittee.members}
                      </div>
                      <div className="text-gray-400">Active Members</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <Calendar className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-white">
                        {new Date().getFullYear() -
                          new Date(selectedCommittee.established).getFullYear()}
                      </div>
                      <div className="text-gray-400">Years Active</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <Award className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-white">
                        {selectedCommittee.achievements.length}
                      </div>
                      <div className="text-gray-400">Major Achievements</div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="leadership" className="space-y-6 mt-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Head */}
                    <Card className="bg-gray-800/50 border-gray-700">
                      <CardContent className="p-6 text-center space-y-4">
                        <Badge className="bg-red-500/20 text-red-400 border-red-500/30">
                          Committee Head
                        </Badge>
                        <div className="w-24 h-24 mx-auto">
                          <img
                            src={
                              selectedCommittee.leadership.head.image ||
                              "/placeholder.svg"
                            }
                            alt={selectedCommittee.leadership.head.name}
                            className="w-full h-full rounded-full object-cover border-2 border-purple-500"
                          />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-white">
                            {selectedCommittee.leadership.head.name}
                          </h4>
                          <p className="text-gray-300 text-sm mt-2">
                            {selectedCommittee.leadership.head.bio}
                          </p>
                        </div>

                        <div className="space-y-2">
                          {selectedCommittee.leadership.head.contact.email && (
                            <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
                              <Mail className="w-4 h-4" />
                              <span>
                                {
                                  selectedCommittee.leadership.head.contact
                                    .email
                                }
                              </span>
                            </div>
                          )}
                          {selectedCommittee.leadership.head.contact.phone && (
                            <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
                              <Phone className="w-4 h-4" />
                              <span>
                                {
                                  selectedCommittee.leadership.head.contact
                                    .phone
                                }
                              </span>
                            </div>
                          )}
                        </div>

                        <div>
                          <h5 className="text-sm font-semibold text-white mb-2">
                            Key Achievements
                          </h5>
                          <ul className="space-y-1 text-xs text-gray-400">
                            {selectedCommittee.leadership.head.achievements
                              .slice(0, 3)
                              .map((achievement, index) => (
                                <li
                                  key={index}
                                  className="flex items-start space-x-2"
                                >
                                  <Award className="w-3 h-3 text-orange-400 mt-0.5 flex-shrink-0" />
                                  <span>{achievement}</span>
                                </li>
                              ))}
                          </ul>
                        </div>
                        <div className="flex justify-center space-x-3">
                          {selectedCommittee.leadership.head.social
                            .linkedin && (
                            <a
                              href={
                                selectedCommittee.leadership.head.social
                                  .linkedin
                              }
                              className="text-blue-400 hover:text-blue-300 transition-colors"
                            >
                              <svg
                                className="w-4 h-4"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.564v11.452zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                              </svg>
                            </a>
                          )}
                          {selectedCommittee.leadership.head.social
                            .instagram && (
                            <a
                              href={
                                selectedCommittee.leadership.head.social
                                  .instagram
                              }
                              className="text-pink-400 hover:text-pink-300 transition-colors"
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
                        </div>
                      </CardContent>
                    </Card>

                    {/* Co-Head */}
                    {selectedCommittee.leadership.coHead1 && (
                      <Card className="bg-gray-800/50 border-gray-700">
                        <CardContent className="p-6 text-center space-y-4">
                          <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                            Co-Head
                          </Badge>
                          <div className="w-24 h-24 mx-auto">
                            <img
                              src={
                                selectedCommittee.leadership.coHead1.image ||
                                "/placeholder.svg"
                              }
                              alt={selectedCommittee.leadership.coHead1.name}
                              className="w-full h-full rounded-full object-cover border-2 border-blue-500"
                            />
                          </div>
                          <div>
                            <h4 className="text-xl font-bold text-white">
                              {selectedCommittee.leadership.coHead1.name}
                            </h4>
                            <p className="text-gray-300 text-sm mt-2">
                              {selectedCommittee.leadership.coHead1.bio}
                            </p>
                          </div>

                          <div className="space-y-2">
                            {selectedCommittee.leadership.coHead1.contact
                              .email && (
                              <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
                                <Mail className="w-4 h-4" />
                                <span>
                                  {
                                    selectedCommittee.leadership.coHead1.contact
                                      .email
                                  }
                                </span>
                              </div>
                            )}
                            {selectedCommittee.leadership.coHead1.contact
                              .phone && (
                              <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
                                <Phone className="w-4 h-4" />
                                <span>
                                  {
                                    selectedCommittee.leadership.coHead1.contact
                                      .phone
                                  }
                                </span>
                              </div>
                            )}
                          </div>

                          <div>
                            <h5 className="text-sm font-semibold text-white mb-2">
                              Key Achievements
                            </h5>
                            <ul className="space-y-1 text-xs text-gray-400">
                              {selectedCommittee.leadership.coHead1.achievements
                                .slice(0, 3)
                                .map((achievement, index) => (
                                  <li
                                    key={index}
                                    className="flex items-start space-x-2"
                                  >
                                    <Award className="w-3 h-3 text-orange-400 mt-0.5 flex-shrink-0" />
                                    <span>{achievement}</span>
                                  </li>
                                ))}
                            </ul>
                          </div>
                          <div className="flex justify-center space-x-3">
                            {selectedCommittee.leadership.coHead1.social
                              .linkedin && (
                              <a
                                href={
                                  selectedCommittee.leadership.coHead1.social
                                    .linkedin
                                }
                                className="text-blue-400 hover:text-blue-300 transition-colors"
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
                            {selectedCommittee.leadership.coHead1.social
                              .instagram && (
                              <a
                                href={
                                  selectedCommittee.leadership.coHead1.social
                                    .instagram
                                }
                                className="text-pink-400 hover:text-pink-300 transition-colors"
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
                          </div>
                        </CardContent>
                      </Card>
                    )}
                     {selectedCommittee.leadership.coHead2 && (
                      <Card className="bg-gray-800/50 border-gray-700">
                        <CardContent className="p-6 text-center space-y-4">
                          <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                            Co-Head
                          </Badge>
                          <div className="w-24 h-24 mx-auto">
                            <img
                              src={
                                selectedCommittee.leadership.coHead2.image ||
                                "/placeholder.svg"
                              }
                              alt={selectedCommittee.leadership.coHead2.name}
                              className="w-full h-full rounded-full object-cover border-2 border-blue-500"
                            />
                          </div>
                          <div>
                            <h4 className="text-xl font-bold text-white">
                              {selectedCommittee.leadership.coHead2.name}
                            </h4>
                            <p className="text-gray-300 text-sm mt-2">
                              {selectedCommittee.leadership.coHead2.bio}
                            </p>
                          </div>

                          <div className="space-y-2">
                            {selectedCommittee.leadership.coHead2.contact
                              .email && (
                              <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
                                <Mail className="w-4 h-4" />
                                <span>
                                  {
                                    selectedCommittee.leadership.coHead2.contact
                                      .email
                                  }
                                </span>
                              </div>
                            )}
                            {selectedCommittee.leadership.coHead2.contact
                              .phone && (
                              <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
                                <Phone className="w-4 h-4" />
                                <span>
                                  {
                                    selectedCommittee.leadership.coHead2.contact
                                      .phone
                                  }
                                </span>
                              </div>
                            )}
                          </div>

                          <div>
                            <h5 className="text-sm font-semibold text-white mb-2">
                              Key Achievements
                            </h5>
                            <ul className="space-y-1 text-xs text-gray-400">
                              {selectedCommittee.leadership.coHead2.achievements
                                .slice(0, 3)
                                .map((achievement, index) => (
                                  <li
                                    key={index}
                                    className="flex items-start space-x-2"
                                  >
                                    <Award className="w-3 h-3 text-orange-400 mt-0.5 flex-shrink-0" />
                                    <span>{achievement}</span>
                                  </li>
                                ))}
                            </ul>
                          </div>
                          <div className="flex justify-center space-x-3">
                            {selectedCommittee.leadership.coHead2.social
                              .linkedin && (
                              <a
                                href={
                                  selectedCommittee.leadership.coHead2.social
                                    .linkedin
                                }
                                className="text-blue-400 hover:text-blue-300 transition-colors"
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
                            {selectedCommittee.leadership.coHead2.social
                              .instagram && (
                              <a
                                href={
                                  selectedCommittee.leadership.coHead2.social
                                    .instagram
                                }
                                className="text-pink-400 hover:text-pink-300 transition-colors"
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
                          </div>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                </TabsContent>

                <TabsContent value="members" className="space-y-6 mt-6">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {selectedCommittee.membersList.map((member, index) => (
                      <Card
                        key={index}
                        className="bg-gray-800/50 border-gray-700"
                      >
                        <CardContent className="p-4 text-center space-y-3">
                          <div className="w-16 h-16 mx-auto">
                            <img
                              src={member.image || "/placeholder.svg"}
                              alt={member.name}
                              className="w-full h-full rounded-full object-cover border-2 border-gray-600"
                            />
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-white">
                              {member.name}
                            </h4>
                            <p className="text-xs text-purple-400">
                              {member.role}
                            </p>
                            <p className="text-xs text-gray-400">
                              {member.year}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="events" className="space-y-6 mt-6">
                  <div className="space-y-4">
                    {selectedCommittee.events.map((event, index) => (
                      <Card
                        key={index}
                        className="bg-gray-800/50 border-gray-700"
                      >
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
                                <h4 className="text-lg font-bold text-white mb-2">
                                  {event.title}
                                </h4>
                                <p className="text-gray-300 mb-3">
                                  {event.description}
                                </p>
                                <div className="flex items-center space-x-4 text-sm text-gray-400">
                                  <div className="flex items-center space-x-1">
                                    <Calendar className="w-4 h-4" />
                                    <span>
                                      {new Date(
                                        event.date
                                      ).toLocaleDateString()}
                                    </span>
                                  </div>
                                  <div className="flex items-center space-x-1">
                                    <Users className="w-4 h-4" />
                                    <span>
                                      {event.participants} participants
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <Badge className={getStatusColor(event.status)}>
                              {event.status.charAt(0).toUpperCase() +
                                event.status.slice(1)}
                            </Badge>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="achievements" className="space-y-6 mt-6">
                  <div className="space-y-4">
                    {selectedCommittee.achievements.map(
                      (achievement, index) => (
                        <Card
                          key={index}
                          className="bg-gray-800/50 border-gray-700"
                        >
                          <CardContent className="p-6">
                            <div className="flex items-start space-x-4">
                              <Award className="w-6 h-6 text-orange-400 mt-1 flex-shrink-0" />
                              <div className="flex-1">
                                <h4 className="text-lg font-bold text-white mb-2">
                                  {achievement.title}
                                </h4>
                                <p className="text-gray-300 mb-3">
                                  {achievement.description}
                                </p>
                                <div className="flex items-center justify-between text-sm">
                                  <div className="flex items-center space-x-1 text-gray-400">
                                    <Calendar className="w-4 h-4" />
                                    <span>
                                      {new Date(
                                        achievement.date
                                      ).toLocaleDateString()}
                                    </span>
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
                      )
                    )}
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
  );
}
