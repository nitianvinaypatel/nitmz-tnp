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
  FaGlobe,
  FaBell,
  FaQuestion,
} from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

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
  const [hasNotifications] = useState(true);

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
          {navLinks.map((link, idx) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * (idx + 1) }}
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
        </nav>

        {/* Right side items */}
        <motion.div
          className="hidden md:flex items-center gap-3"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Help Center */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <FaQuestion className="h-4 w-4" />
                <span className="sr-only">Help Center</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <div className="flex flex-col gap-1 p-2">
                <h4 className="font-medium text-sm">Help Center</h4>
                <p className="text-xs text-muted-foreground">
                  Get assistance with our platform
                </p>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/faq" className="flex items-center w-full">
                  FAQ
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/support" className="flex items-center w-full">
                  Support
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/guides" className="flex items-center w-full">
                  Guides
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Notifications */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full relative"
              >
                <FaBell className="h-4 w-4" />
                {hasNotifications && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                )}
                <span className="sr-only">Notifications</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <div className="flex justify-between items-center p-2">
                <h4 className="font-medium text-sm">Notifications</h4>
                <Badge variant="outline" className="text-xs">
                  3 new
                </Badge>
              </div>
              <DropdownMenuSeparator />
              <div className="max-h-72 overflow-y-auto">
                <div className="p-3 border-b hover:bg-muted/50 transition-colors cursor-pointer">
                  <div className="flex items-start gap-3">
                    <div className="h-9 w-9 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      <FaBriefcase className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">
                        New job opportunities
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Google is hiring for Software Engineers
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        2 hours ago
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-3 border-b hover:bg-muted/50 transition-colors cursor-pointer">
                  <div className="flex items-start gap-3">
                    <div className="h-9 w-9 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      <FaCalendarAlt className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Upcoming Event</p>
                      <p className="text-xs text-muted-foreground">
                        Resume building workshop tomorrow
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Yesterday
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-3 hover:bg-muted/50 transition-colors cursor-pointer">
                  <div className="flex items-start gap-3">
                    <div className="h-9 w-9 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      <FaUsers className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">
                        Microsoft Recruitment
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Pre-placement talk scheduled for next week
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        3 days ago
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <DropdownMenuSeparator />
              <div className="p-2 text-center">
                <Link
                  href="/dashboard/notifications"
                  className="text-xs text-primary hover:underline"
                >
                  View all notifications
                </Link>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Language Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-1 h-8">
                <FaGlobe className="h-3.5 w-3.5" />
                <span className="text-xs">EN</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>English</DropdownMenuItem>
              <DropdownMenuItem>हिन्दी (Hindi)</DropdownMenuItem>
              <DropdownMenuItem>मिज़ो (Mizo)</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Auth buttons - Login/Register */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/login">
              <Button
                variant="ghost"
                className="text-gray-100 hover:text-white hover:bg-gray-800"
              >
                Sign In
              </Button>
            </Link>
            <Link href="/register">
              <Button className="bg-primary text-white hover:bg-primary/90">
                Register
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Mobile Menu Button */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden relative"
              aria-label="Menu"
            >
              <Menu className="h-5 w-5" />
              {hasNotifications && (
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:w-72 pt-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <Link href="/" className="flex items-center gap-2 mb-6">
                <Image
                  src="/logo_nitmz.png"
                  alt="NIT Mizoram Logo"
                  width={30}
                  height={30}
                  className="h-7 w-auto"
                />
                <span className="font-bold text-lg">T&P Cell</span>
              </Link>

              <nav className="space-y-1">
                {navLinks.map((link) => (
                  <div key={link.name} className="mb-4">
                    <Link
                      href={link.href}
                      className={`flex items-center rounded-md px-3 py-2 text-sm font-medium ${
                        pathname === link.href
                          ? "bg-primary/10 text-primary"
                          : "hover:bg-muted"
                      }`}
                    >
                      {link.icon && (
                        <span className="mr-3 text-muted-foreground">
                          {link.icon}
                        </span>
                      )}
                      {link.name}
                    </Link>

                    {link.submenu && (
                      <div className="ml-6 mt-1 space-y-1 border-l pl-3">
                        {link.submenu.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
                          >
                            {subItem.icon && (
                              <span className="mr-3 text-xs">
                                {subItem.icon}
                              </span>
                            )}
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              <div className="mt-6 flex flex-col space-y-3 border-t pt-6">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Notifications</span>
                  <Badge variant="outline" className="text-xs">
                    3 new
                  </Badge>
                </div>

                <div className="space-y-2 max-h-32 overflow-y-auto">
                  <div className="flex items-center gap-2 text-sm p-2 hover:bg-muted rounded-md cursor-pointer">
                    <FaBriefcase className="h-3 w-3 text-primary" />
                    <div>
                      <p className="text-xs font-medium">
                        New job opportunities
                      </p>
                      <p className="text-xs text-muted-foreground">2h ago</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm p-2 hover:bg-muted rounded-md cursor-pointer">
                    <FaCalendarAlt className="h-3 w-3 text-primary" />
                    <div>
                      <p className="text-xs font-medium">Resume workshop</p>
                      <p className="text-xs text-muted-foreground">Yesterday</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-4">
                  <Link href="/login">
                    <Button variant="outline" size="sm" className="w-full">
                      Sign In
                    </Button>
                  </Link>
                  <div className="w-4"></div>
                  <Link href="/register">
                    <Button size="sm" className="w-full">
                      Register
                    </Button>
                  </Link>
                </div>

                <div className="flex items-center gap-2 mt-4 pt-4 border-t">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="gap-1 h-8 text-xs"
                  >
                    <FaGlobe className="h-3 w-3" />
                    EN
                  </Button>
                  <span className="text-xs text-muted-foreground">|</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="gap-1 h-8 text-xs"
                  >
                    <FaQuestion className="h-3 w-3" />
                    Help
                  </Button>
                </div>
              </div>
            </motion.div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}
