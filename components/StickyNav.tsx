"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { VeloTruckLogo } from "./VeloTruckLogo";
import { ArrowRight } from "lucide-react";

export function StickyNav() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-in slide-in-from-bottom-5 duration-300">
      <div className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/95 backdrop-blur-xl shadow-2xl border-2 border-primary/20">
        <VeloTruckLogo showText={false} size="sm" />
        <Link href="/dashboard/shipper">
          <Button className="h-12 px-6 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all">
            Get Started
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
