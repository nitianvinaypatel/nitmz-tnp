"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FaGraduationCap,
  FaBriefcase,
  FaUsers,
  FaChartLine,
  FaBook,
  FaCalendarAlt,
  FaNewspaper,
  FaPhoneAlt,
} from "react-icons/fa";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
    submenu: [
      {
        name: "Our Team",
        href: "/about#team",
        icon: <FaUsers className="w-4 h-4" />,
      },
      {
        name: "Mission & Vision",
        href: "/about#mission",
        icon: <FaBook className="w-4 h-4" />,
      },
      {
        name: "Achievements",
        href: "/about#achievements",
        icon: <FaChartLine className="w-4 h-4" />,
      },
    ],
  },
  {
    name: "For Students",
    href: "/for-students",
    submenu: [
      {
        name: "Placement Process",
        href: "/for-students#process",
        icon: <FaGraduationCap className="w-4 h-4" />,
      },
      {
        name: "Resources",
        href: "/for-students#resources",
        icon: <FaBook className="w-4 h-4" />,
      },
      {
        name: "Training Programs",
        href: "/for-students#training",
        icon: <FaBriefcase className="w-4 h-4" />,
      },
      {
        name: "Schedule",
        href: "/for-students#schedule",
        icon: <FaCalendarAlt className="w-4 h-4" />,
      },
    ],
  },
  {
    name: "For Recruiters",
    href: "/for-recruiters",
    submenu: [
      {
        name: "Why Recruit",
        href: "/for-recruiters#why",
        icon: <FaUsers className="w-4 h-4" />,
      },
      {
        name: "Procedure",
        href: "/for-recruiters#procedure",
        icon: <FaBriefcase className="w-4 h-4" />,
      },
      {
        name: "Facilities",
        href: "/for-recruiters#facilities",
        icon: <FaBook className="w-4 h-4" />,
      },
      {
        name: "Past Recruiters",
        href: "/for-recruiters#past",
        icon: <FaChartLine className="w-4 h-4" />,
      },
    ],
  },
  {
    name: "Placements",
    href: "/placements",
    submenu: [
      {
        name: "Statistics",
        href: "/placements#statistics",
        icon: <FaChartLine className="w-4 h-4" />,
      },
      {
        name: "Success Stories",
        href: "/placements#stories",
        icon: <FaUsers className="w-4 h-4" />,
      },
      {
        name: "News",
        href: "/placements#news",
        icon: <FaNewspaper className="w-4 h-4" />,
      },
    ],
  },
  {
    name: "Contact",
    href: "/contact",
    icon: <FaPhoneAlt className="w-4 h-4" />,
  },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <motion.header
      className={`sticky top-0 z-50 w-full border-b backdrop-blur-lg supports-[backdrop-filter]:bg-background/60 transition-all duration-300 ${
        scrolled ? "bg-background/95 shadow-md" : "bg-background/80"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container flex h-16 items-center justify-between">
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link href="/" className="flex items-center gap-2 group">
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Image
                src="/logo_nitmz.png"
                alt="NIT Mizoram Logo"
                width={40}
                height={40}
                className="h-10 w-auto transition-transform duration-300"
              />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                NIT Mizoram
              </span>
              <span className="text-xs text-muted-foreground">
                Training & Placement Cell
              </span>
            </div>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * (index + 1) }}
              className="relative"
              onMouseEnter={() => setActiveSubmenu(link.name)}
              onMouseLeave={() => setActiveSubmenu(null)}
            >
              <Link
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary relative group flex items-center gap-2 ${
                  pathname === link.href
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {link.icon && link.icon}
                {link.name}
                {link.submenu && (
                  <motion.span
                    animate={{ rotate: activeSubmenu === link.name ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-xs opacity-60"
                  >
                    ▼
                  </motion.span>
                )}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${
                    pathname === link.href ? "w-full" : ""
                  }`}
                ></span>
              </Link>

              {/* Submenu */}
              {link.submenu && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: activeSubmenu === link.name ? 1 : 0,
                    y: activeSubmenu === link.name ? 0 : 10,
                    pointerEvents:
                      activeSubmenu === link.name ? "auto" : "none",
                  }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 w-64 bg-background/95 backdrop-blur-lg rounded-lg shadow-lg border border-border p-2"
                >
                  {link.submenu.map((subItem) => (
                    <Link
                      key={subItem.href}
                      href={subItem.href}
                      className="flex items-center gap-3 px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-accent/10 rounded-md transition-colors"
                    >
                      {subItem.icon}
                      {subItem.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.7 }}
          >
            <Button
              asChild
              className="bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform"
            >
              <Link href="/login">Login</Link>
            </Button>
          </motion.div>
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button
              variant="outline"
              size="icon"
              className="hover:bg-accent/10 transition-colors duration-300"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80 border-l-accent/20">
            <nav className="flex flex-col gap-4 mt-8">
              {navLinks.map((link, index) => (
                <div key={link.href} className="space-y-2">
                  <Link
                    href={link.href}
                    className={`text-sm font-medium transition-colors hover:text-primary flex items-center gap-2 p-2 rounded-md ${
                      pathname === link.href
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:bg-accent/5"
                    }`}
                  >
                    {link.icon && link.icon}
                    {link.name}
                  </Link>
                  {link.submenu && (
                    <div className="ml-4 space-y-1 border-l border-border pl-4">
                      {link.submenu.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="flex items-center gap-2 p-2 text-sm text-muted-foreground hover:text-primary hover:bg-accent/5 rounded-md transition-colors"
                        >
                          {subItem.icon}
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.6 }}
              >
                <Button
                  asChild
                  className="mt-4 w-full bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-shadow duration-300"
                >
                  <Link href="/login">Login</Link>
                </Button>
              </motion.div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}
