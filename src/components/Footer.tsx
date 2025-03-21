import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-neutral-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">NIT Mizoram</h3>
            <p className="text-neutral-400 mb-4">Training & Placement Cell</p>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com"
                className="text-neutral-400 hover:text-white"
              >
                <FaFacebook size={20} />
              </Link>
              <Link
                href="https://twitter.com"
                className="text-neutral-400 hover:text-white"
              >
                <FaTwitter size={20} />
              </Link>
              <Link
                href="https://linkedin.com"
                className="text-neutral-400 hover:text-white"
              >
                <FaLinkedin size={20} />
              </Link>
              <Link
                href="https://instagram.com"
                className="text-neutral-400 hover:text-white"
              >
                <FaInstagram size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-neutral-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-neutral-400 hover:text-white"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/placements"
                  className="text-neutral-400 hover:text-white"
                >
                  Placements
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-neutral-400 hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">For Students</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/for-students"
                  className="text-neutral-400 hover:text-white"
                >
                  Placement Process
                </Link>
              </li>
              <li>
                <Link
                  href="/for-students/resources"
                  className="text-neutral-400 hover:text-white"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/for-students/internships"
                  className="text-neutral-400 hover:text-white"
                >
                  Internships
                </Link>
              </li>
              <li>
                <Link
                  href="/for-students/faqs"
                  className="text-neutral-400 hover:text-white"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-neutral-400">
              <p>Training & Placement Cell</p>
              <p>National Institute of Technology Mizoram</p>
              <p>Aizawl, Mizoram - 796012</p>
              <p className="mt-2">Email: tnp@nitmz.ac.in</p>
              <p>Phone: +91-123-456-7890</p>
            </address>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-8 pt-8 text-center text-neutral-400">
          <p>
            &copy; {new Date().getFullYear()} NIT Mizoram Training & Placement
            Cell. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
