"use client";

import Link from "next/link";
import { Truck } from "lucide-react";
import { cn } from "@/lib/utils";

interface VeloTruckLogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

export function VeloTruckLogo({ className, showText = true, size = "md" }: VeloTruckLogoProps) {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12",
  };

  const textSizeClasses = {
    sm: "text-base",
    md: "text-xl",
    lg: "text-2xl",
  };

  return (
    <Link
      href="/"
      className={cn(
        "flex items-center gap-2 group transition-all duration-300 hover:scale-105",
        className
      )}
    >
      <div className={cn(
        "rounded-xl bg-gradient-to-br from-primary via-primary to-secondary flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 relative overflow-hidden",
        sizeClasses[size]
      )}>
        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        <Truck className={cn(
          "text-white relative z-10 transition-transform group-hover:scale-110",
          size === "sm" ? "h-4 w-4" : size === "md" ? "h-5 w-5" : "h-6 w-6"
        )} />
      </div>
      {showText && (
        <span className={cn(
          "font-bold bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent group-hover:from-primary/80 group-hover:to-secondary/80 transition-all",
          textSizeClasses[size]
        )}>
          VeloTruck
        </span>
      )}
    </Link>
  );
}
