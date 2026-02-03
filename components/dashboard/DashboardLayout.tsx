"use client";

import { Sidebar } from "./Sidebar";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { VeloTruckLogo } from "@/components/VeloTruckLogo";

interface DashboardLayoutProps {
  children: React.ReactNode;
  userRole: "shipper" | "carrier" | "admin";
}

export function DashboardLayout({ children, userRole }: DashboardLayoutProps) {
  return (
    <div className="flex h-screen dashboard-bg relative">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>
      
      <Sidebar userRole={userRole} />
      <div className="flex flex-1 flex-col overflow-hidden relative z-10">
        <header className="flex h-16 items-center gap-4 border-b bg-white/80 backdrop-blur-md px-4 sm:px-6 shadow-md relative z-20">
          <div className="hidden md:block">
            <VeloTruckLogo showText={false} size="sm" />
          </div>
          <div className="flex-1">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <Input
                type="search"
                placeholder="Search loads, trips, or users..."
                className="pl-11 h-11 border-2 bg-white/90 backdrop-blur-sm focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 scrollbar-thin relative z-10">{children}</main>
      </div>
    </div>
  );
}
