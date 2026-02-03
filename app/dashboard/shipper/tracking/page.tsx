"use client";

import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { mockLoads, trackingEvents } from "@/constants/mockData";
import { MapPin, Phone, User, FileText, Clock, Navigation, ArrowRight } from "lucide-react";

export default function TrackingPage() {
  // In a real app, this would come from URL params or state
  const load = mockLoads[0]; // Using first load as example
  const driver = {
    name: load.driverName || "Rajesh Kumar",
    phone: load.driverPhone || "+91 98765 43210",
    photo: "/api/placeholder/100/100",
    vehicleRC: load.vehicleRC || "DL-01-AB-1234",
  };

  return (
    <DashboardLayout userRole="shipper">
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">Live Tracking</h1>
            <p className="text-gray-600 mt-2 text-lg">
              Track your shipment from <span className="font-semibold text-primary">{load.origin}</span> to <span className="font-semibold text-secondary">{load.destination}</span>
            </p>
          </div>
          <Badge variant="secondary" className="text-base px-4 py-2 bg-gradient-to-r from-primary/20 to-secondary/20 border-primary/30 shadow-md">
            <Navigation className="h-4 w-4 mr-2 animate-pulse text-primary" />
            <span className="font-semibold">Live</span>
          </Badge>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 min-h-[calc(100vh-200px)]">
          {/* Left Sidebar - Timeline */}
          <div className="lg:col-span-3 order-2 lg:order-1">
            <Card className="h-full border-0 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardHeader className="border-b bg-gradient-to-r from-gray-50 to-white">
                <CardTitle className="flex items-center gap-2 text-xl font-bold">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-md">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  Timeline
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-0">
                  {trackingEvents.map((event, index) => (
                    <div key={index} className="relative pl-8 pb-8 last:pb-0">
                      {/* Timeline line */}
                      <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-primary/30" />
                      
                      {/* Timeline dot */}
                      <div className={`absolute left-0 top-0 w-6 h-6 rounded-full border-4 border-white flex items-center justify-center ${
                        index === 0 ? "bg-primary animate-pulse" : "bg-primary/60"
                      }`}>
                        {index === 0 && (
                          <div className="w-2 h-2 bg-white rounded-full" />
                        )}
                      </div>
                      
                      {/* Event content */}
                      <div>
                        <p className="font-bold text-sm text-gray-900 mb-1">{event.time}</p>
                        <p className="text-sm text-gray-700 font-medium mb-1">{event.event}</p>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Central Map */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <Card className="h-full flex flex-col border-0 shadow-xl bg-white/80 backdrop-blur-sm overflow-hidden">
              <CardHeader className="border-b bg-gradient-to-r from-gray-50 to-white">
                <CardTitle className="flex items-center gap-2 text-xl font-bold">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-md">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  Live Location
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 p-0">
                <div className="h-full min-h-[500px] rounded-lg border-2 border-dashed border-gray-300 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 flex items-center justify-center relative overflow-hidden">
                  {/* Route visualization */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="none">
                    {/* Route path */}
                    <path
                      d="M 100 300 Q 250 200 400 250 T 700 300"
                      stroke="#FF6600"
                      strokeWidth="4"
                      fill="none"
                      strokeDasharray="10,5"
                      opacity="0.7"
                    />
                    {/* Start marker */}
                    <circle cx="100" cy="300" r="12" fill="#0066CC" stroke="white" strokeWidth="3" />
                    <text x="100" y="320" textAnchor="middle" className="text-xs font-semibold fill-gray-700">
                      {load.origin}
                    </text>
                    {/* Current location (animated) */}
                    <g>
                      <circle cx="400" cy="250" r="16" fill="#FF6600" stroke="white" strokeWidth="4">
                        <animate attributeName="r" values="16;20;16" dur="2s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="400" cy="250" r="30" fill="#FF6600" opacity="0.2">
                        <animate attributeName="r" values="30;50;30" dur="2s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.2;0;0.2" dur="2s" repeatCount="indefinite" />
                      </circle>
                    </g>
                    {/* End marker */}
                    <circle cx="700" cy="300" r="12" fill="#22C55E" stroke="white" strokeWidth="3" />
                    <text x="700" y="320" textAnchor="middle" className="text-xs font-semibold fill-gray-700">
                      {load.destination}
                    </text>
                  </svg>
                  
                  {/* Center info card */}
                  <div className="relative z-10 bg-white/95 backdrop-blur-sm rounded-xl p-6 border-2 border-primary/20 shadow-xl max-w-sm mx-4">
                    <div className="text-center mb-4">
                      <div className="inline-block p-4 bg-primary/10 rounded-full mb-3">
                        <Navigation className="h-8 w-8 text-primary animate-pulse" />
                      </div>
                      <p className="text-lg font-bold text-gray-900 mb-1">Truck in Transit</p>
                      <p className="text-sm text-muted-foreground mb-3">
                        Near Agra, Uttar Pradesh
                      </p>
                      <Badge variant="secondary" className="text-sm px-3 py-1">
                        In Transit
                      </Badge>
                    </div>
                    <div className="pt-4 border-t space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Progress:</span>
                        <span className="font-semibold">~45%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">ETA:</span>
                        <span className="font-semibold">2 days</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar - Driver Details */}
          <div className="lg:col-span-3 order-3">
            <Card className="h-full border-0 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardHeader className="border-b bg-gradient-to-r from-gray-50 to-white">
                <CardTitle className="flex items-center gap-2 text-xl font-bold">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-md">
                    <User className="h-5 w-5 text-white" />
                  </div>
                  Driver Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-28 h-28 rounded-full bg-gradient-to-br from-primary via-primary/80 to-secondary mb-4 flex items-center justify-center border-4 border-white shadow-2xl relative">
                    <User className="h-14 w-14 text-white" />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow-lg animate-pulse" />
                  </div>
                  <h3 className="font-bold text-xl text-gray-900">{driver.name}</h3>
                  <p className="text-sm text-muted-foreground font-medium">Professional Driver</p>
                </div>

                <div className="space-y-4 pt-4 border-t">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-muted-foreground mb-0.5">Phone Number</p>
                      <a href={`tel:${driver.phone}`} className="text-sm font-semibold text-gray-900 hover:text-primary">
                        {driver.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                    <div className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center">
                      <FileText className="h-5 w-5 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-muted-foreground mb-0.5">Vehicle RC</p>
                      <p className="text-sm font-semibold text-gray-900 font-mono">{driver.vehicleRC}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h4 className="font-semibold mb-4 text-gray-900">Load Information</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between p-2 rounded bg-gray-50">
                      <span className="text-muted-foreground">Route:</span>
                      <span className="font-semibold text-gray-900 flex items-center gap-1">
                        {load.origin} <ArrowRight className="h-3 w-3" /> {load.destination}
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded bg-gray-50">
                      <span className="text-muted-foreground">Price:</span>
                      <span className="font-bold text-primary">₹{load.price.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded bg-gray-50">
                      <span className="text-muted-foreground">Truck Type:</span>
                      <span className="font-semibold text-gray-900">{load.truckType}</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded bg-gray-50">
                      <span className="text-muted-foreground">Status:</span>
                      <Badge variant="secondary">In Transit</Badge>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all hover:scale-105" size="lg">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Driver
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
