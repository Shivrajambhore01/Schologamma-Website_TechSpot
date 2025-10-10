import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Events", href: "/events" },
    { name: "Committees", href: "/committees" },
    { name: "Our Team", href: "/team" },
    { name: "Gallery", href: "/gallery" },
  ]

  const committees = [
    { name: "Technical Committee", href: "/committees#technical" },
    { name: "Creative Committee", href: "/committees#creative" },
    { name: "Content Editor", href: "/committees#content-editor" },
    { name: "Event Management", href: "/committees#event-management" },
  ]

  const resources = [
    { name: "Workshop Materials", href: "#" },
    { name: "Code Repository", href: "#" },
    { name: "Learning Resources", href: "#" },
    { name: "Career Guidance", href: "#" },
  ]

  return (
    <footer className="relative bg-gray-900/95 backdrop-blur-md border-t border-gray-800 text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-blue-900/10 to-orange-900/10"></div>
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-blue-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Schologamma Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent mb-4">
                  Schologamma
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  The premier student forum at JD College of Engineering & Management, fostering innovation, technical
                  excellence, and leadership among students through collaborative learning and hands-on experiences.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-start space-x-3 text-sm text-gray-400">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>
                    Valni Near Hanuman Temple, Borgoan, Kalmeshwar Road,
                    <br />
                    Phata Nagpur, Maharashtra 441501
                  </span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-400">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span>schologamma7@jdcoem.com</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-400">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>+91 98765 43210</span>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h4 className="text-white font-semibold mb-3">Follow Us</h4>
                <div className="flex space-x-3">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-9 h-9 p-0 bg-gray-800/50 hover:bg-blue-600 transition-colors"
                    asChild
                  >
                    <a href="#" aria-label="Facebook">
                      <Facebook className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-9 h-9 p-0 bg-gray-800/50 hover:bg-pink-600 transition-colors"
                    asChild
                  >
                    <a href="https://www.instagram.com/schologamma_jd/?igsh=MTh2NHo3dTJ6dmVrbQ%3D%3D#" aria-label="Instagram">
                      <Instagram className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-9 h-9 p-0 bg-gray-800/50 hover:bg-blue-700 transition-colors"
                    asChild
                  >
                    <a href="#" aria-label="LinkedIn">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-9 h-9 p-0 bg-gray-800/50 hover:bg-red-600 transition-colors"
                    asChild
                  >
                    <a href="#" aria-label="YouTube">
                      <Youtube className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group"
                    >
                      <span>{link.name}</span>
                      <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Committees */}
            <div>
              <h4 className="text-white font-semibold mb-4">Committees</h4>
              <ul className="space-y-3">
                {committees.map((committee) => (
                  <li key={committee.name}>
                    <Link
                      href={committee.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group"
                    >
                      <span>{committee.name}</span>
                      <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-3">
                {resources.map((resource) => (
                  <li key={resource.name}>
                    <Link
                      href={resource.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group"
                    >
                      <span>{resource.name}</span>
                      <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Newsletter Signup */}
              <div className="mt-6 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                <h5 className="text-white font-medium mb-2">Stay Updated</h5>
                <p className="text-gray-400 text-xs mb-3">Get the latest updates on events and workshops</p>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 bg-gray-900/50 border border-gray-600 rounded text-white text-sm placeholder-gray-500 focus:border-blue-500 focus:outline-none"
                  />
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-gray-700" />

        {/* Bottom Footer */}
        <div className="py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Schologamma Forum, JD College of Engineering & Management. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Code of Conduct
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
