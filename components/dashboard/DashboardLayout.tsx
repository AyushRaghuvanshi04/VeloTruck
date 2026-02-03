"use client";

import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Search, Menu } from "lucide-react";
import { Input } from "@/components/ui/input";
import { VeloTruckLogo } from "@/components/VeloTruckLogo";
import { Button } from "@/components/ui/button";

interface DashboardLayoutProps {
  children: React.ReactNode;
  userRole: "shipper" | "carrier" | "admin";
}

export function DashboardLayout({ children, userRole }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen dashboard-bg relative">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-32 h-32 md:w-72 md:h-72 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-20 left-10 w-40 h-40 md:w-96 md:h-96 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-[500px] md:h-[500px] bg-primary/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>
      
      <Sidebar userRole={userRole} isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex flex-1 flex-col overflow-hidden relative z-10">
        <header className="flex h-16 items-center gap-2 sm:gap-4 border-b bg-white/80 backdrop-blur-md px-3 sm:px-4 md:px-6 shadow-md relative z-20">
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
          <div className="hidden md:block">
            <VeloTruckLogo showText={false} size="sm" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 sm:h-5 sm:w-5 -translate-y-1/2 text-gray-400" />
              <Input
                type="search"
                placeholder="Search..."
                className="pl-9 sm:pl-11 h-9 sm:h-11 text-sm sm:text-base border-2 bg-white/90 backdrop-blur-sm focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-3 sm:p-4 md:p-6 scrollbar-thin relative z-10">{children}</main>
      </div>
    </div>
  );
}
