"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Briefcase,
  Calendar,
  FileText,
  Users,
  Building,
  Settings,
  ChevronRight,
  BarChart3,
  BookOpen,
  GraduationCap,
  MessageSquare,
  Bell,
} from "lucide-react";

interface SidebarLinkProps {
  href: string;
  icon: React.ElementType;
  label: string;
  isActive?: boolean;
}

const SidebarLink = ({
  href,
  icon: Icon,
  label,
  isActive = false,
}: SidebarLinkProps) => {
  const pathname = usePathname();
  const isLinkActive =
    isActive || pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${
        isLinkActive ? "bg-accent" : "hover:bg-accent/50"
      }`}
    >
      <Icon className="h-5 w-5" />
      <span>{label}</span>
      {isLinkActive && (
        <div className="ml-auto">
          <ChevronRight className="h-4 w-4" />
        </div>
      )}
    </Link>
  );
};

const routes = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    icon: Briefcase,
    label: "Jobs",
    href: "/dashboard/jobs",
  },
  {
    icon: Building,
    label: "Companies",
    href: "/dashboard/companies",
  },
  {
    icon: Calendar,
    label: "Events",
    href: "/dashboard/events",
  },
  {
    icon: FileText,
    label: "Applications",
    href: "/dashboard/applications",
  },
  {
    icon: BookOpen,
    label: "Resources",
    href: "/dashboard/resources",
  },
  {
    icon: Users,
    label: "Interviews",
    href: "/dashboard/interviews",
  },
  {
    icon: MessageSquare,
    label: "Messages",
    href: "/dashboard/messages",
  },
  {
    icon: Bell,
    label: "Notifications",
    href: "/dashboard/notifications",
  },
  {
    icon: GraduationCap,
    label: "Students",
    href: "/dashboard/students",
  },
  {
    icon: BarChart3,
    label: "Reports",
    href: "/dashboard/reports",
  },
  {
    icon: Settings,
    label: "Settings",
    href: "/dashboard/settings",
  },
];

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="hidden w-64 border-r bg-background p-4 md:block">
        <div className="flex flex-col gap-1 h-full">
          <div className="mb-6">
            <Link href="/" className="text-xl font-bold">
              NIT Mizoram T&P
            </Link>
          </div>

          <nav className="space-y-1">
            {routes.map((route) => (
              <SidebarLink
                key={route.href}
                href={route.href}
                icon={route.icon}
                label={route.label}
                isActive={pathname === route.href}
              />
            ))}
          </nav>

          <div className="mt-auto pt-4">
            <SidebarLink
              href="/dashboard/settings"
              icon={Settings}
              label="Settings"
            />
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto p-6">{children}</main>
    </div>
  );
};

export default DashboardLayout;
