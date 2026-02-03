"use client";

import { useState } from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { mockLoads } from "@/constants/mockData";
import { Package, IndianRupee, Truck, MapPin, ArrowRight, Navigation } from "lucide-react";
import Link from "next/link";

export default function ShipperDashboard() {
  const [activeTab, setActiveTab] = useState<"active" | "past">("active");
  
  const activeLoads = mockLoads.filter(load => load.status === "in_transit" || load.status === "pending");
  const pastLoads = mockLoads.filter(load => load.status === "delivered" || load.status === "cancelled");
  const totalSpent = mockLoads
    .filter(load => load.status === "delivered")
    .reduce((sum, load) => sum + load.price, 0);
  const deliveriesThisWeek = mockLoads.filter(load => 
    load.status === "delivered" && 
    new Date(load.createdAt) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
  ).length;

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "in_transit":
        return <Badge variant="secondary" className="bg-secondary/10 text-secondary border-secondary/20">In Transit</Badge>;
      case "pending":
        return <Badge variant="warning">Pending</Badge>;
      case "delivered":
        return <Badge variant="success">Delivered</Badge>;
      case "cancelled":
        return <Badge variant="destructive">Cancelled</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const displayedLoads = activeTab === "active" ? activeLoads : pastLoads;

  return (
    <DashboardLayout userRole="shipper">
      <div className="space-y-6">
        {/* Header with Quick Action */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Shipper Dashboard</h1>
            <p className="text-gray-600 mt-1">Monitor your shipments and manage loads</p>
          </div>
          <Link href="/dashboard/shipper/post-load">
            <Button size="lg" className="gap-2 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 hover:scale-105 w-full sm:w-auto">
              <Package className="h-5 w-5" />
              Post New Load
            </Button>
          </Link>
        </div>

        {/* Hero Stat Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-primary/5 via-white to-primary/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full blur-2xl" />
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
              <CardTitle className="text-sm font-semibold text-gray-700">Active Loads</CardTitle>
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform">
                <Truck className="h-6 w-6 text-white" />
              </div>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">{activeLoads.length}</div>
              <p className="text-xs text-muted-foreground mt-2 font-medium">
                {mockLoads.filter(l => l.status === "in_transit").length} in transit
              </p>
            </CardContent>
          </Card>
          <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-secondary/5 via-white to-secondary/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary/20 to-transparent rounded-bl-full blur-2xl" />
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
              <CardTitle className="text-sm font-semibold text-gray-700">Total Spent</CardTitle>
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center shadow-lg shadow-secondary/30 group-hover:scale-110 transition-transform">
                <IndianRupee className="h-6 w-6 text-white" />
              </div>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-secondary to-secondary/70 bg-clip-text text-transparent">₹{totalSpent.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground mt-2 font-medium">
                All time deliveries
              </p>
            </CardContent>
          </Card>
          <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-green-500/5 via-white to-green-500/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500/20 to-transparent rounded-bl-full blur-2xl" />
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
              <CardTitle className="text-sm font-semibold text-gray-700">Deliveries This Week</CardTitle>
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg shadow-green-500/30 group-hover:scale-110 transition-transform">
                <Package className="h-6 w-6 text-white" />
              </div>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">{deliveriesThisWeek}</div>
              <p className="text-xs text-muted-foreground mt-2 font-medium">
                Completed shipments
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Active Shipments Table */}
          <Card className="lg:col-span-1 border-0 shadow-xl bg-white/80 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-gray-50 to-white border-b">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-xl font-bold">Active Shipments</CardTitle>
                  <CardDescription className="text-sm">Your current loads in progress</CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant={activeTab === "active" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveTab("active")}
                    className={activeTab === "active" ? "bg-gradient-to-r from-primary to-primary/90 shadow-md" : ""}
                  >
                    Active
                  </Button>
                  <Button
                    variant={activeTab === "past" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveTab("past")}
                    className={activeTab === "past" ? "bg-gradient-to-r from-primary to-primary/90 shadow-md" : ""}
                  >
                    Past
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {/* Mobile Card View */}
              <div className="block md:hidden space-y-3">
                {displayedLoads.map((load) => (
                  <div
                    key={load.id}
                    className="rounded-xl border-2 border-gray-200 p-4 space-y-3 hover:shadow-lg hover:border-primary/30 transition-all duration-300 bg-gradient-to-br from-white to-gray-50/50"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold text-base">{load.origin}</span>
                          <ArrowRight className="h-4 w-4 text-gray-400" />
                          <span className="font-semibold text-base">{load.destination}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{load.truckType}</p>
                      </div>
                      {getStatusBadge(load.status)}
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t">
                      <div>
                        <p className="text-xs text-muted-foreground">Price</p>
                        <p className="text-lg font-bold text-primary">₹{load.price.toLocaleString()}</p>
                      </div>
                      {load.status === "in_transit" && (
                        <Link href={`/dashboard/shipper/tracking?loadId=${load.id}`}>
                          <Button variant="outline" size="sm" className="gap-2">
                            <Navigation className="h-4 w-4" />
                            Track
                          </Button>
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
                {displayedLoads.length === 0 && (
                  <div className="text-center py-8 text-muted-foreground">
                    <Truck className="h-12 w-12 mx-auto mb-2 opacity-50" />
                    <p>No {activeTab === "active" ? "active" : "past"} shipments</p>
                  </div>
                )}
              </div>

              {/* Desktop Table View */}
              <div className="hidden md:block">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-semibold">Route</TableHead>
                      <TableHead className="font-semibold">Status</TableHead>
                      <TableHead className="font-semibold">Price</TableHead>
                      <TableHead className="font-semibold">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {displayedLoads.map((load) => (
                      <TableRow key={load.id} className="hover:bg-gray-50">
                        <TableCell>
                          <div className="font-semibold text-base">
                            {load.origin} → {load.destination}
                          </div>
                          <div className="text-sm text-muted-foreground mt-0.5">
                            {load.truckType} • {load.weight} tons
                          </div>
                        </TableCell>
                        <TableCell>{getStatusBadge(load.status)}</TableCell>
                        <TableCell>
                          <div className="font-bold text-lg text-primary">
                            ₹{load.price.toLocaleString()}
                          </div>
                        </TableCell>
                        <TableCell>
                          {load.status === "in_transit" ? (
                            <Link href={`/dashboard/shipper/tracking?loadId=${load.id}`}>
                              <Button variant="outline" size="sm" className="gap-2">
                                <Navigation className="h-4 w-4" />
                                Track
                              </Button>
                            </Link>
                          ) : (
                            <span className="text-sm text-muted-foreground">—</span>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                    {displayedLoads.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={4} className="text-center py-8 text-muted-foreground">
                          No {activeTab === "active" ? "active" : "past"} shipments
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          {/* Map Widget */}
          <Card className="lg:col-span-1 border-0 shadow-xl bg-white/80 backdrop-blur-sm overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-gray-50 to-white border-b">
              <CardTitle className="flex items-center gap-2 text-xl font-bold">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-md">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                Live Tracking Map
              </CardTitle>
              <CardDescription className="text-sm">Current locations of your shipments</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="h-[400px] rounded-lg border-2 border-dashed border-gray-300 bg-gradient-to-br from-blue-50 via-gray-50 to-orange-50 flex items-center justify-center relative overflow-hidden shadow-inner">
                {/* Simulated map with dots */}
                <div className="absolute inset-0">
                  {/* Route lines */}
                  <svg className="w-full h-full" viewBox="0 0 400 400">
                    <path
                      d="M 50 200 Q 150 100 250 150 T 350 200"
                      stroke="#FF6600"
                      strokeWidth="3"
                      fill="none"
                      strokeDasharray="8,4"
                      opacity="0.6"
                    />
                    <path
                      d="M 80 250 Q 180 180 280 220 T 350 280"
                      stroke="#0066CC"
                      strokeWidth="3"
                      fill="none"
                      strokeDasharray="8,4"
                      opacity="0.6"
                    />
                  </svg>
                  
                  {/* Location markers */}
                  <div className="absolute top-1/4 left-1/4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping"></div>
                      <div className="relative bg-primary rounded-full p-2 shadow-lg">
                        <MapPin className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-medium bg-white px-2 py-1 rounded shadow border">
                      Near Agra
                    </div>
                  </div>
                  
                  <div className="absolute top-1/2 right-1/3">
                    <div className="relative">
                      <div className="absolute inset-0 bg-secondary/20 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                      <div className="relative bg-secondary rounded-full p-2 shadow-lg">
                        <MapPin className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-medium bg-white px-2 py-1 rounded shadow border">
                      Near Varanasi
                    </div>
                  </div>
                </div>
                
                {/* Center content */}
                <div className="text-center relative z-10 glass rounded-xl p-6 border-2 border-white/50 shadow-2xl">
                  <div className="mb-4">
                    <div className="inline-block p-4 bg-gradient-to-br from-primary to-primary/80 rounded-full shadow-lg animate-pulse-glow">
                      <MapPin className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <p className="text-base font-bold text-gray-800 mb-1">
                    {activeLoads.filter(l => l.status === "in_transit").length} Active Shipments
                  </p>
                  <p className="text-xs text-gray-600 font-medium">
                    Real-time tracking enabled
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
