"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Package, 
  Truck, 
  MapPin, 
  Settings, 
  Users,
  FileCheck,
  TrendingUp,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";
import { VeloTruckLogo } from "@/components/VeloTruckLogo";

interface SidebarProps {
  userRole: "shipper" | "carrier" | "admin";
  isOpen?: boolean;
  onClose?: () => void;
}

const shipperNav = [
  { name: "Dashboard", href: "/dashboard/shipper", icon: LayoutDashboard },
  { name: "Post Load", href: "/dashboard/shipper/post-load", icon: Package },
  { name: "My Loads", href: "/dashboard/shipper/loads", icon: Truck },
  { name: "Tracking", href: "/dashboard/shipper/tracking", icon: MapPin },
  { name: "Settings", href: "/dashboard/shipper/settings", icon: Settings },
];

const carrierNav = [
  { name: "Dashboard", href: "/dashboard/carrier", icon: LayoutDashboard },
  { name: "Available Loads", href: "/dashboard/carrier/loads", icon: Package },
  { name: "My Trips", href: "/dashboard/carrier/trips", icon: Truck },
  { name: "Earnings", href: "/dashboard/carrier/earnings", icon: TrendingUp },
  { name: "Settings", href: "/dashboard/carrier/settings", icon: Settings },
];

const adminNav = [
  { name: "Control Tower", href: "/dashboard/admin", icon: LayoutDashboard },
  { name: "Verification Queue", href: "/dashboard/admin/verifications", icon: FileCheck },
  { name: "Users", href: "/dashboard/admin/users", icon: Users },
  { name: "Settings", href: "/dashboard/admin/settings", icon: Settings },
];

export function Sidebar({ userRole, isOpen = true, onClose }: SidebarProps) {
  const pathname = usePathname();
  const navItems = userRole === "shipper" ? shipperNav : userRole === "carrier" ? carrierNav : adminNav;

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
        />
      )}
      {/* Sidebar */}
      <div className={cn(
        "fixed md:static inset-y-0 left-0 z-50 flex h-screen w-64 flex-col border-r bg-gradient-to-b from-white via-white to-gray-50 shadow-xl transition-transform duration-300",
        isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      )}>
      <div className="flex h-16 items-center justify-between border-b bg-gradient-to-r from-primary via-primary to-secondary px-6 shadow-md">
        <Link href="/" className="flex items-center gap-2 group transition-all duration-300 hover:scale-105" onClick={onClose}>
          <div className="h-10 w-10 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            <Truck className="h-5 w-5 text-white relative z-10 transition-transform group-hover:scale-110" />
          </div>
          <span className="text-xl font-bold text-white drop-shadow-md group-hover:drop-shadow-lg transition-all">
            VeloTruck
          </span>
        </Link>
        {/* Mobile close button */}
        <button
          onClick={onClose}
          className="md:hidden p-2 rounded-lg text-white hover:bg-white/20 transition-colors"
          aria-label="Close menu"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
      <nav className="flex-1 space-y-2 p-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={cn(
                "group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 relative overflow-hidden",
                isActive
                  ? "bg-gradient-to-r from-primary to-primary/90 text-white shadow-lg shadow-primary/30 scale-[1.02]"
                  : "text-gray-700 hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 hover:shadow-md hover:scale-[1.01]"
              )}
            >
              {isActive && (
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-shine" />
              )}
              <Icon className={cn(
                "h-5 w-5 relative z-10 transition-transform",
                isActive ? "scale-110" : "group-hover:scale-110"
              )} />
              <span className="relative z-10">{item.name}</span>
              {isActive && (
                <div className="absolute right-2 w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
              )}
            </Link>
          );
        })}
      </nav>
      <div className="border-t bg-gradient-to-r from-gray-50 to-white p-4">
        <div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/5 border border-primary/20 hover:shadow-md transition-all">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
            <span className="text-sm font-bold text-white">
              {userRole === "shipper" ? "S" : userRole === "carrier" ? "C" : "A"}
            </span>
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold capitalize text-gray-900">{userRole}</p>
            <p className="text-xs text-gray-500">Account</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
