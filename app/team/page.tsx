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
  position:
  | "Admin"
  | "Head"
  | "Co-Head"
  | "Member"
  | "Spokesperson"
  | "Student Co-ordinator";
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
      id: "11",
      name: "Shivam Naredi",
      role: "President",
      committee: "Admin",
      position: "Admin",
      image: "WhatsApp Image 2025-08-20 at 22.41.54_75edb947 - Shivam Naredi.jpg",
      bio: "",
      dob: "2004-08-03",
      email: "shivamgdgjdcoem@gmail.com",
      phone: "",
      responsibilities: [],
      social: {
        linkedin: "https://www.linkedin.com/in/shivamnaredi/",
        instagram: "https://www.instagram.com/shivamnaredi/",
        facebook: "",
        twitter: "",
      },
      skills: [
        "Python",
        "SQL",
        "Excel",
        "Agentic AI",
        "Management",
        "Networking",
        "Machine Learning",
      ],
    },
    {
      id: "9",
      name: "Ruchi Ritesh Jaiswal",
      role: "Vice President",
      committee: "Admin",
      position: "Admin",
      image: "1000296443 - Tanjiro Kamado.jpg",
      bio: "",
      dob: "2005-08-21",
      email: "tanjjirokamado2108@gmail.com",
      phone: "",
      responsibilities: [],
      social: {
        linkedin: "https://www.linkedin.com/in/ruchi-jaiswal-3629bb2a7",
        instagram: "",
        facebook: "",
        twitter: "",
      },
      skills: ["UI/UX Designing", "Graphics Designing", "Communication"],
    },

    {
      id: "10",
      name: "Anjali Sonekar",
      role: "Secretary",
      committee: "Admin",
      position: "Admin",
      image: "Snapchat-1930806880 - Anjali Sonekar (1).jpg",
      bio: "I'm a 2nd-year CSE student and currently the Secretary of the Schologamma forum, looking forward to organizing grand events with excitement.",
      dob: "2006-11-05",
      email: "sonekaranjali98@gmail.com",
      phone: "",
      responsibilities: [],
      social: {
        linkedin: "https://www.linkedin.com/in/anjali-sonekar-9bb45530b",
        instagram: "",
        facebook: "",
        twitter: "",
      },
      skills: ["C", "C++", "Python (basic)"],
    },
    {
      id: "18",
      name: "Mrunmayi Abhay Somalkar",
      role: "Joint Secretary",
      committee: "Core Committee",
      position: "Admin",
      image: "Photo from Mrunmayi - MRUNMAYI SOMALKAR (1).jpg",
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
      id: "15",
      name: "Prathamesh Ratnaparkhi",
      role: "Treasurer",
      committee: "Finance",
      position: "Admin",
      image: "FORUM PIC - Prathamesh Ratnaparkhi.jpg",
      bio: "Skilled at maintaining transparency, ensuring timely collections, and managing funds responsibly to support organizational goals. Experienced in teamwork, decision-making, and applying corporate qualities like accountability and efficiency to achieve smooth operations.",
      dob: "2004-12-30",
      email: "prathmeshratnaparkhi2@gmail.com",
      phone: "",
      responsibilities: [],
      social: {
        linkedin: "www.linkedin.com/in/prathamesh-ratnaparkhi3012",
        instagram:
          "https://www.instagram.com/pj_ratnaparkhi?igsh=NDl0MHd4NnhpZ2dj",
      },
      skills: ["HTML", "CSS", "Java", "Canva (Intermediate)"],
    },

    {
      id: "3",
      name: "Piyush Sunil Kolte",
      role: "Joint-Treasure",
      committee: "",
      position: "Admin",
      image: "20240924_094947 - Piyush Kolte (1).jpg",
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
      id: "2",
      name: "Tanvi Sanghani",
      role: "Spokesperson",
      committee: "Admin",
      position: "Admin",
      image: "IMG20250802171750 - Tanvi Sanghani.jpg",
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
      id: "22",
      name: "Rushang Pravin Chandekar",
      role: "Student Co-ordinator",
      committee: "Administration",
      position: "Admin",
      image: "rushmoon.jpg",
      bio: "",
      dob: "2005-02-02",
      email: "rushangchandekar05@gmail.com",
      phone: "8857842043",
      responsibilities: [],
      social: {
        linkedin: "https://www.linkedin.com/in/rushang-chandekar",
        instagram: "/team",
      },
      skills: ["Leadership", "Coordination", "Management"],
    },
    {
      id: "28",
      name: "Sanika Lanjewar ",
      role: "Digital Committee Head",
      committee: "Digital committee",
      position: "Head",
      image: "IMG_20250731_151647 - Sanika Lanjewar.jpg",
      bio: "A passionate Computer Science and Engineering student exploring the intersection of technology, design, and creativity. With experience in UI/UX, branding, and media, and a keen interest in machine learning and blockchain, always eager to create impactful digital solutions",
      dob: "2004-12-14",
      email: "shewarwpiyush@gmail.com",
      phone: "",
      responsibilities: [],
      social: {
        linkedin:
          "https://www.linkedin.com/in/sanika-lanjewar-84260b243?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        instagram: "/team",
      },
      skills: ["Python,", "Javscript ", "UI/UX design", "HTML & CSS"],
    },
    {
      id: "16",
      name: "Sheefali Raichand",
      role: "Creative Committee Head",
      committee: "Creative",
      position: "Head",
      image: "IMG-20240924-WA0007 - Sheefali Raichand.jpg",
      bio: "Creative Committee Head | Passionate about design, innovation, and bringing fresh ideas to life | Believer in teamwork & creativity as the key to success.",
      dob: "2006-09-01",
      email: "raichandshefali6@gmail.com",
      phone: "",
      responsibilities: [],
      social: {
        linkedin: "https://www.linkedin.com/in/sheefali-raichand-977534323",
      },
      skills: [
        "Good communication skill",
        "Quick learner",
        "DSA",
        "Basic Python",
      ],
    },
    {
      id: "1",
      name: "Shivraj Ambhore",
      role: "TechSpot Committee Head",
      committee: "TechSpot",
      position: "Head",
      image: "Shivraj-Ambhore.jpg",
      bio: "I am a Computer Science Engineering student passionate about Java, Data Structures & Algorithms, and Web Development, with a strong focus on problem-solving and building impactful projects.",
      dob: "2004-02-19",
      email: "shivrajambhore01@gmail.com",
      phone: "",
      responsibilities: ["Organize Hachathon", "Handle forum Website"],
      social: {
        linkedin: "https://www.linkedin.com/in/shivraj-ambhore",
        instagram:
          "https://www.instagram.com/shivraj_ambhore01?igsh=MWQxNzkxNnRrZ2hlZw==",
        facebook: "",
      },
      skills: ["Java", "DSA", "Full stack Development", "Github", "Chatgpt"],
    },
    {
      id: "4",
      name: "Aditya Wankhede",
      role: "Technical Committee Head",
      committee: "Technical Committee",
      position: "Head",
      image: "Picsart_25-08-10_22-13-26-600 (1) - Aditya Wankhede.jpg",
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
      id: "10",
      name: "Janvi Akhand",
      role: "Publicity Head",
      committee: "Publicity Committee",
      position: "Head",
      image: "IMG_5591 - Janvi Akhand.JPG",
      bio: "Leading publicity at Schologamma Forum, I’m passionate about building bridges between our vision and the audiences who can bring it to life.",
      dob: "2005-12-17",
      email: "janviakhand@gmail.com",
      phone: "",
      responsibilities: [],
      social: {
        linkedin: "https://www.linkedin.com/in/janvi-akhand-6bb310371",
        instagram: "/team",
      },
      skills: ["Publicity", "Communication", "Leadership"],
    },
    {
      id: "23",
      name: "Trisha Pillay ",
      role: "Event committee head ",
      committee: "Event committee",
      position: "Head",
      image: "IMG-20250818-WA0017 - Trisha Pillay.jpg",
      bio: "I'm Trisha Pillay from CSE 3nd year a driver and ambitious person with a versatile ,dynamic , innovative personality",
      dob: "2005-11-02",
      email: "trishapillay804@gmail.com",
      phone: "",
      responsibilities: [],
      social: {
        linkedin:
          "https://www.linkedin.com/in/trisha-pillay-9a1066321?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        instagram: "/team",
      },
      skills: ["Communication", "innovative personality", "Management"],
    },
    {
      id: "24",
      name: "Khushal Tondre ",
      role: "Sports Committee Head",
      committee: "Sport committee",
      position: "Head",
      image: "IMG_20240926_150056 - khushal tondare.jpg",
      bio: "",
      dob: "2005-05-01",
      email: "khushaltondare16@gmail.com",
      phone: "",
      responsibilities: [],
      social: {
        linkedin:
          "https://www.linkedin.com/in/khushal-tondare-0b489822a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        instagram:
          "https://www.instagram.com/khushall_01._?igsh=a3BocTZyN2MxOTB5",
      },
      skills: ["Full stack developer", "python", "c++"],
    },
    {
      id: "30",
      name: "Piyush Sheware ",
      role: "Content Editor Committee Head",
      committee: "Content Editor committee",
      position: "Head",
      image: "piyushSH.jpg",
      bio: "I am an engineering student and the Content Committee Head, where I get to blend creativity with technology. I enjoy shaping ideas into engaging content and building connections through impactful communication.",
      dob: "2006-03-15",
      email: "shewarwpiyush@gmail.com",
      phone: "",
      responsibilities: [],
      social: {
        linkedin:
          "https://www.linkedin.com/in/piyush-sheware-910a68293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        instagram:
          "https://www.instagram.com/piyush_sheware_?igsh=MWU4Y205eTc4M3cwNQ==",
      },
      skills: [
        "Content Writing & Editing",
        "Presentation & Communication",
        "Public Speaking",
      ],
    },
    {
      id: "27",
      name: "Mayur Londhekar ",
      role: "Discipline Committee Head",
      committee: "Discipline",
      position: "Head",
      image: "IMG_20250801_115807 - Mayur Londhekar.jpg",
      bio: "Head of the Discipline Committee, passionate social worker, and dedicated sportsman — recognized for leadership, discipline, and teamwork. Committed to serving society, inspiring others, and striving for excellence both on and off the fiel",
      dob: "2005-01-01",
      email: "mayurlondhekar1105@gmail.com",
      phone: "",
      responsibilities: [],
      social: {
        linkedin: "https://www.linkedin.com/in/mayur-londhekar-b47b64278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        instagram:
          "https://www.instagram.com/mayur_londhekar01?igsh=MXA3djI0NXl0emowYg==",
      },
      skills: [
        "DSA",
        "c",
      ],
    },

    {
      id: "29",
      name: "Yadvi Bhandarkar",
      role: "NSS Committee Head",
      committee: "NSS committee",
      position: "Head",
      image: "Passport REsize photo - Yadvi Bhandarkar.jpg",
      bio: "CSE student Skilled in Python and Exploring Data Science ",
      dob: "2004-07-30",
      email: "yadvi@gmail.com",
      phone: "",
      responsibilities: [],
      social: {
        linkedin: "https://www.linkedin.com/in/yadvi-bhandarkar-b944a1301/",
        instagram: "/team",
      },
      skills: ["Python,", "Data Analytics"],
    },
    {
      id: "7",
      name: "Nikhil Rathod",
      role: "StartUp Committee Head",
      committee: "StartUp Committee",
      position: "Head",
      image: "DSC_3570_Nikhil - Nikhil Rathod.jpg",
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
      id: "5",
      name: "Yuvtika Rahangdale",
      role: "Creative Committee",
      committee: "Creative Committee",
      position: "Co-Head",
      image: "IMG-20250720-WA0197 - Yuvtika Rahangdale.jpg",
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
      id: "8",
      name: "Akansha Anil Ambadkar",
      role: "Creative Committee",
      committee: "Creative Committee",
      position: "Co-Head",
      image: "Pi7_Passport_Photo (1) - Akansha Ambadkar.jpeg",
      bio: "",
      dob: "2007-02-24",
      email: "madhu.ambadkar2003@gmail.com",
      phone: "",
      responsibilities: [],
      social: {
        linkedin: "https://www.linkedin.com/in/akansha-ambadkar/",
        instagram:
          "https://www.instagram.com/akansciouss?igsh=MTFrbGN5c3ZxNXQzcg==",
      },
      skills: [],
    },
    {
      id: "BT240165CS",
      name: "Anushka Sonone",
      role: "Event Committee ",
      committee: "Event",
      position: "Co-Head",
      image:
        "20250730_150849 - Anushka Sonone.jpg",
      bio: "",
      dob: "23/12/2006",
      email: "anushkasonone9@gmail.com",
      phone: "",
      responsibilities: [
        "Event planning",
        "Assisting in committee coordination",
      ],
      social: {
        linkedin:
          "https://www.linkedin.com/in/anushka-sonone-785b8a37a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        instagram:
          "https://www.instagram.com/anushhka_.s?igsh=MWNsZjBqcm9pc3U1cQ==",
      },
      skills: [],
    },
    {
      id: "17",
      name: "Sakshi Nitin Gokhe",
      role: "Event Committee ",
      committee: "Event Committee",
      position: "Co-Head",
      image: "IMG_20250727_231227 - Sakshi Gokhe.jpg",
      bio: "My name is Sakshi Gokhe. I am from CSE-A 2nd year. Beyond my love for technology, I thrive on creativity and self-expression. I am passionate about dancing, cooking, traveling, and exploring new things, which fuel my imagination. I am also skilled in using Canva.",
      dob: "2006-02-20",
      email: "sakshigokhe67@gmail.com",
      phone: "",
      responsibilities: [],
      social: {
        linkedin: "/team",
        instagram: "/team",
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
      id: "17",
      name: "Dhruvakumar Sanjayrao Doras",
      role: "Digital committee",
      committee: "Digital",
      position: "Co-Head",
      image: "IMG-20250824-WA0041 - Dhruv Doras.jpg",
      bio: "",
      dob: "2006-05-26",
      email: "dhruvdoras3@gmail.com",
      phone: "",
      responsibilities: [],
      social: {
        linkedin:
          "https://www.linkedin.com/in/dhruv-doras-8b8b56328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        instagram: "dhruv_s_doras_",
      },
      skills: [],
    },
    {
      id: "5",
      name: "Romil Burile",
      role: "NSS Committee",
      committee: "NSS",
      position: "Co-Head",
      image:
        "IMG_20241203_160702 - Romil Burile (1).jpg",
      bio: "I am Romil Burile, Co Head of NSS Committee from 2nd year CSE A Department.",
      dob: "2006-08-29",
      email: "romilburile@gmail.com",
      phone: "",
      responsibilities: [],
      social: {
        linkedin: "",
        instagram: "",
        facebook: "",
      },
      skills: ["Communication"],
    },

    {
      id: "7",
      name: "Manaswi Gajanan Lodam",
      role: "NSS Committee",
      committee: "NSS",
      position: "Co-Head",
      image: "Screenshot_2025-08-06-20-50-10-919_com.miui.gallery - Manaswi Lodam (1).jpg",
      bio: "I am a disciplined and organised person.",
      dob: "2006-09-02",
      email: "manaswilodam@gmail.com",
      phone: "",
      responsibilities: [],
      social: {
        linkedin:
          "https://www.linkedin.com/in/manaswi-lodam-a95793342?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        instagram:
          "https://www.instagram.com/manaswi_lodam?igsh=MWU3ZXV3bzF1M3U3YQ==",
        facebook: "",
        twitter: "",
      },
      skills: ["Python", "Java", "Communication"],
    },


    {
      id: "9",
      name: "Anuj Vinod Lakhekar",
      role: "TechSpot Committee",
      committee: "TechSpot Committee",
      position: "Co-Head",
      image: "IMG-20250801-WA0075 - anuj lakhekar.jpg",
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
      id: "11",
      name: "Santosh Donapurge",
      role: "TechSpot Committee",
      committee: "TechSpot Committee",
      position: "Co-Head",
      image: "1748265675540 - Sento Coder.jpg",
      bio: "SDE",
      dob: "2005-11-19",
      email: "codersento@gmail.com",
      phone: "",
      responsibilities: [],
      social: {
        linkedin: "https://www.linkedin.com/in/santosh-donapurge-bb1835304",
        instagram: "/team",
      },
      skills: ["Software Development", "Problem Solving", "Team Collaboration"],
    },
    {
      id: "12",
      name: "Yashasvi Sandesh Bhambore",
      role: "Technical Committee",
      committee: "Technical Committee",
      position: "Co-Head",
      image: "IMG_20250815_171101 - YASHASVI BHAMBORE.jpg",
      bio: "",
      dob: "2005-08-27",
      email: "yashasvibhambore1@jdcoem.ac.in",
      phone: "",
      responsibilities: [],
      social: {
        linkedin: "https://www.linkedin.com/in/yashasvi-bhambore-893bb9355",
        instagram: "/team",
      },
      skills: ["Leadership", "Technical Knowledge", "Team Collaboration"],
    },
    {
      id: "13",
      name: "Om Hemraj Deshmukh",
      role: "Technical Committee",
      committee: "Technical Committee",
      position: "Co-Head",
      image: "20250731_190814 - OM DESHMUKH.jpg",
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
      id: "21",
      name: "Payal Kumare",
      role: "Sports Committee ",
      committee: "Sports Committee",
      position: "Co-Head",
      image: "BT240083CS - Payal Kumare.jpg",
      bio: "I am a Computer Science Engineering student with interest in technology and problem-solving. Along with academics, I actively participate in sports and serve as the Co-Head of our college Sports Committee. I believe in teamwork, discipline, and continuous learning to grow both personally and professionally.",
      dob: "2006-09-11",
      email: "payalkumare86686@gmail.com",
      phone: "",
      responsibilities: [],
      social: {
        linkedin: "https://www.linkedin.com/in/payal-kumare86686/",
        instagram: "/team",
      },
      skills: ["Sports Management", "Teamwork", "Leadership", "Discipline"],
    },
    {
      id: "14",
      name: "Nehal Ravindra Zade",
      role: "Sport Committee",
      committee: "Sports Committee",
      position: "Co-Head",
      image: "IMG-20250719-WA0011 - Nehal Zade.jpg",
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
      id: "16",
      name: "Bhavya Pandey",
      role: "Content Committee",
      committee: "Content Committee",
      position: "Co-Head",
      image: "Document from Bhavya Pandey - Bhavya Pandey.jpg",
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
      id: "29",
      name: "Anushka Moon ",
      role: "Content Committee",
      committee: "Content Committee",
      position: "Co-Head",
      image: "Screenshot_2025-08-25-19-55-41-93_99c04817c0de5652397fc8b56c3b3817 - Anushka Moon.jpg",
      bio: "Co-Head of the Content Committee, passionate about creating engaging, impactful, and creative content strategies. Skilled in leading teams, managing ideas, and ensuring quality communication that connects with audiences",
      dob: "2006-06-01",
      email: "anuskamoon16@gmail.com",
      phone: "9322370821",
      responsibilities: [],
      social: {
        linkedin: "https://www.instagram.com/_jeonsuax06?igsh=MWlrbmY2aW5mamUwaw==",
      },
      skills: [
        "Communication",
        "leadership",
        "hardworking",
        "artist ",
      ],
    },

    {
      id: "19",
      name: "Manswini Unhone",
      role: "Publicity Committee",
      committee: "Publicity Committee",
      position: "Co-Head",
      image: "IMG-20241204-WA0001 - Ishu Unhone.jpg",
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
      id: "26",
      name: "Mohini Wankhede",
      role: "Publicity Committee ",
      committee: "Publicity committee",
      position: "Co-Head",
      image: "IMG_20250802_094903407_HDR - Mohini Wankhede.jpg",
      bio: "I'm Mohini, a Computer Science Engineering student with a curious mindset. I enjoy exploring new things, learning consistently, and improving myself every day. I believe in staying positive and growing step by step.",
      dob: "2006-04-10",
      email: "wankhedemohini4@gmail.com",
      phone: "",
      responsibilities: [],
      social: {
        linkedin:
          "https://www.linkedin.com/in/mohini-wankhede-a2699337a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        instagram:
          "https://www.instagram.com/mohini_wankhede_10/profilecard/?igsh=MXRyM21kMXoyY2p6Zw==",
      },
      skills: ["Python", "DSA", "Teamwork and collaboration "],
    },
    {
      id: "15",
      name: "Karishma Naidu",
      role: "Discipline Committee ",
      committee: "Discipline Committee",
      position: "Co-Head",
      image: "IMG-20250425-WA0009 - H-H .Karishma Naidu.jpg",
      bio: "I am currently pursuing my B.Tech degree in Computer Science. I am a kind and hardworking person, eager to learn and grow.",
      dob: "2006-02-26",
      email: "karishmanaidu035@gmail.com",
      phone: "",
      responsibilities: [],
      social: {
        linkedin: "https://www.linkedin.com/in/karishma-naidu-915168339",
        instagram: "/team",
      },
      skills: ["Discipline", "Teamwork", "Leadership", "Adaptability"],
    },
    {
      id: "25",
      name: "HITESH MISHRA",
      role: "Discipline Committee",
      committee: "Discipline committee",
      position: "Co-Head",
      image: "IMG-20250727-WA0026 - HITESH MISHRA.jpg",
      bio: "Hello everyone My name is HITESH MISHRA CURRENTLY PERSUING BTECH UNDERGRAD DEGREE FROM JD COLLEGE OF ENGINEERING IN CSE BRANCH.",
      dob: "2005-09-19",
      email: "hiteshmishra910@gmail.com",
      phone: "",
      responsibilities: [],
      social: {
        linkedin: "https://www.linkedin.com/in/Hitesh mishra",
        instagram: "/team",
      },
      skills: ["C", "c++"],
    },

    {
      id: "6",
      name: "Vishakha S Pawade",
      role: "Startup Community",
      committee: "Startup Community",
      position: "Co-Head",
      image: "Vishakha-S-Pawade.jpg",
      bio: "",
      dob: "2006-01-23",
      email: "vishakhapawade@gmail.com",
      phone: "",
      responsibilities: [],
      social: {
        linkedin: "",
        instagram: "https://www.instagram.com/vishakha__pawade",
        facebook: "",
        twitter: "",
      },
      skills: ["DSA", "Communication", "C Programming"],
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
        return "bg-red-500/60 text-red-150 border-red-500/20";
      case "Head":
        return "bg-purple-500/60 text-purple-100 border-purple-500/30";
      case "Co-Head":
        return "bg-blue-500/60 text-blue-100 border-blue-500/30";
      case "Member":
        return "bg-green-500/60 text-green-100 border-green-500/30";
      default:
        return "bg-gray-500/60 text-gray-100 border-gray-500/30";
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
                className={`w-4 h-4 ml-2 transition-transform ${isFilterOpen ? "rotate-180" : ""
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
                  <div className="w-34 h-34 mx-auto mb-4">
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
                  <p className="text-orange-400 font-large">{member.role}</p>
                  {/* <p className="text-gray-400 text-sm">{member.committee}</p> */}
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
                      className="w-40 h-40 rounded-full object-cover border-4 border-purple-500 mx-auto"
                    />
                    <Badge
                      className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2  ${getPositionColor(
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
                    {/* <div className="flex items-center justify-center space-x-2">
                      <Users className="w-4 h-4 text-purple-400" />
                      <span>Joined: {new Date(selectedMember.joinDate).toLocaleDateString()}</span>
                    </div> */}
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
                  {/* 
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
                  </div> */}

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
