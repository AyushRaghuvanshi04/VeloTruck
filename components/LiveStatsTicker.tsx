"use client";

import { useEffect, useState } from "react";
import { Truck, Clock, TrendingUp } from "lucide-react";

interface Stat {
  icon: React.ReactNode;
  label: string;
  value: string;
  color: string;
}

export function LiveStatsTicker() {
  const [stats] = useState<Stat[]>([
    {
      icon: <Truck className="h-4 w-4" />,
      label: "Trucks Available Now",
      value: "452",
      color: "text-primary",
    },
    {
      icon: <Clock className="h-4 w-4" />,
      label: "Average Matching Time",
      value: "4 mins",
      color: "text-secondary",
    },
    {
      icon: <TrendingUp className="h-4 w-4" />,
      label: "Loads Posted Today",
      value: "1,247",
      color: "text-green-600",
    },
  ]);

  const [currentStat, setCurrentStat] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [stats.length]);

  const stat = stats[currentStat];

  return (
    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/80 backdrop-blur-md border-2 border-primary/20 shadow-lg">
      <div className={`${stat.color} animate-pulse`}>{stat.icon}</div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-600 font-medium">{stat.label}:</span>
        <span className={`text-lg font-bold ${stat.color}`}>{stat.value}</span>
      </div>
      <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
    </div>
  );
}
