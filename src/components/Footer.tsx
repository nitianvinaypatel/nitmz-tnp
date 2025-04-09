import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}
        <div className="relative overflow-hidden mb-16">
          <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-3xl"></div>
          <div className="relative bg-gray-900/80 border border-gray-800 rounded-xl p-8 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-2 text-white">
                  Stay Updated
                </h3>
                <p className="text-gray-300 mb-4">
                  Subscribe to our newsletter for the latest placement
                  opportunities, events, and resources.
                </p>
              </div>
              <div>
                <form className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <Input
                      type="email"
                      placeholder="Your email address"
                      className="flex-1 bg-gray-800/70 border-gray-700 pl-10 h-12 text-white placeholder:text-gray-500 focus:border-primary"
                    />
                  </div>
                  <Button className="shrink-0 h-12 px-6 transition-all bg-primary hover:bg-primary/90">
                    Subscribe <FaArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
                <p className="text-xs text-gray-500 mt-2">
                  By subscribing, you agree to our Privacy Policy and consent to
                  receive updates.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Logo and about */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo_nitmz.png"
                alt="NIT Mizoram Logo"
                width={50}
                height={50}
                className="h-12 w-auto"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold">NIT Mizoram</span>
                <span className="text-sm text-gray-400">
                  Training & Placement Cell
                </span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              The Training and Placement Cell of NIT Mizoram aims to provide
              excellent placement opportunities to students and serves as a
              bridge between students, alumni, and employers.
            </p>
            <div className="flex space-x-4 mb-8">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 p-2.5 rounded-full text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook size={18} />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 p-2.5 rounded-full text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter size={18} />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 p-2.5 rounded-full text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 p-2.5 rounded-full text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </Link>
              <Link
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 p-2.5 rounded-full text-gray-400 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube size={18} />
              </Link>
            </div>
          </div>

          {/* Links columns */}
          <div>
            <h3 className="text-lg font-bold mb-4 pb-2 border-b border-gray-800">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-flex"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-flex"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/placements"
                  className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-flex"
                >
                  Placements
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-flex"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-flex"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 pb-2 border-b border-gray-800">
              For Students
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/for-students#process"
                  className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-flex"
                >
                  Placement Process
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/resources"
                  className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-flex"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/internships"
                  className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-flex"
                >
                  Internships
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/jobs"
                  className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-flex"
                >
                  Job Listings
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/events"
                  className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-flex"
                >
                  Events
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 pb-2 border-b border-gray-800">
              Contact Us
            </h3>
            <address className="not-italic flex flex-col gap-4 text-gray-400">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-primary mt-1 shrink-0" />
                <div>
                  <p>Training & Placement Cell</p>
                  <p>National Institute of Technology Mizoram</p>
                  <p>Aizawl, Mizoram - 796012</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-primary shrink-0" />
                <a href="mailto:tnp@nitmz.ac.in" className="hover:text-white">
                  tnp@nitmz.ac.in
                </a>
              </div>

              <div className="flex items-center gap-3">
                <FaPhone className="text-primary shrink-0" />
                <a href="tel:+911234567890" className="hover:text-white">
                  +91-123-456-7890
                </a>
              </div>
            </address>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="text-gray-500 text-sm">
            <p>
              &copy; {currentYear} NIT Mizoram Training & Placement Cell. All
              rights reserved.
            </p>
          </div>

          <div className="flex gap-4 justify-start md:justify-end text-gray-500 text-sm">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-white">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="hover:text-white">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
