"use client";

import { useState } from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { mockLoads } from "@/constants/mockData";
import { Truck, ArrowRight, MapPin, Calendar, IndianRupee, Navigation } from "lucide-react";
import Link from "next/link";

export default function MyTripsPage() {
  const [activeTab, setActiveTab] = useState<"active" | "completed">("active");
  
  // Filter trips based on status
  const activeTrips = mockLoads.filter(load => load.status === "in_transit");
  const completedTrips = mockLoads.filter(load => load.status === "delivered");
  const displayedTrips = activeTab === "active" ? activeTrips : completedTrips;

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "in_transit":
        return <Badge variant="secondary" className="bg-secondary/10 text-secondary border-secondary/20">In Transit</Badge>;
      case "delivered":
        return <Badge variant="success">Delivered</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <DashboardLayout userRole="carrier">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
              My Trips
            </h1>
            <p className="text-gray-600">
              Track your active and completed trips
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              variant={activeTab === "active" ? "default" : "outline"}
              onClick={() => setActiveTab("active")}
              className={activeTab === "active" ? "bg-gradient-to-r from-primary to-primary/90 shadow-md" : ""}
            >
              Active ({activeTrips.length})
            </Button>
            <Button
              variant={activeTab === "completed" ? "default" : "outline"}
              onClick={() => setActiveTab("completed")}
              className={activeTab === "completed" ? "bg-gradient-to-r from-primary to-primary/90 shadow-md" : ""}
            >
              Completed ({completedTrips.length})
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Total Earnings</div>
                  <div className="text-3xl font-bold text-primary">
                    ₹{displayedTrips.reduce((sum, trip) => sum + trip.price, 0).toLocaleString()}
                  </div>
                </div>
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <IndianRupee className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Total Trips</div>
                  <div className="text-3xl font-bold text-secondary">{displayedTrips.length}</div>
                </div>
                <div className="h-12 w-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Truck className="h-6 w-6 text-secondary" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Avg. per Trip</div>
                  <div className="text-3xl font-bold text-green-600">
                    ₹{displayedTrips.length > 0 ? Math.round(displayedTrips.reduce((sum, trip) => sum + trip.price, 0) / displayedTrips.length).toLocaleString() : "0"}
                  </div>
                </div>
                <div className="h-12 w-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                  <Truck className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Trips Table - Desktop */}
        <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hidden md:block">
          <CardHeader className="bg-gradient-to-r from-gray-50 to-white border-b">
            <CardTitle className="text-xl font-bold">
              {activeTab === "active" ? "Active Trips" : "Completed Trips"}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-semibold">Route</TableHead>
                  <TableHead className="font-semibold">Truck Type</TableHead>
                  <TableHead className="font-semibold">Weight</TableHead>
                  <TableHead className="font-semibold">Earnings</TableHead>
                  <TableHead className="font-semibold">Status</TableHead>
                  <TableHead className="font-semibold">Pickup Date</TableHead>
                  <TableHead className="font-semibold">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {displayedTrips.map((trip) => (
                  <TableRow key={trip.id} className="hover:bg-gray-50">
                    <TableCell>
                      <div className="font-semibold text-base">
                        {trip.origin} <ArrowRight className="inline h-4 w-4 mx-1" /> {trip.destination}
                      </div>
                      <div className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                        <MapPin className="h-3 w-3" />
                        {trip.materialType}
                      </div>
                    </TableCell>
                    <TableCell>{trip.truckType}</TableCell>
                    <TableCell>{trip.weight} tons</TableCell>
                    <TableCell>
                      <div className="font-bold text-lg text-primary">
                        ₹{trip.price.toLocaleString()}
                      </div>
                    </TableCell>
                    <TableCell>{getStatusBadge(trip.status)}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {new Date(trip.createdAt).toLocaleDateString()}
                      </div>
                    </TableCell>
                    <TableCell>
                      {trip.status === "in_transit" ? (
                        <Link href={`/dashboard/shipper/tracking?loadId=${trip.id}`}>
                          <Button variant="outline" size="sm" className="gap-2">
                            <Navigation className="h-4 w-4" />
                            Track
                          </Button>
                        </Link>
                      ) : (
                        <Button variant="outline" size="sm">View Details</Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Trips Cards - Mobile */}
        <div className="block md:hidden space-y-4">
          {displayedTrips.map((trip) => (
            <Card key={trip.id} className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="font-bold text-lg">
                      {trip.origin} <ArrowRight className="inline h-4 w-4 mx-1" /> {trip.destination}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">{trip.truckType} • {trip.weight} tons</div>
                  </div>
                  {getStatusBadge(trip.status)}
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <span className="text-muted-foreground text-sm">Earnings:</span>
                    <div className="font-bold text-primary text-lg">₹{trip.price.toLocaleString()}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground text-sm">Pickup:</span>
                    <div className="font-semibold">{new Date(trip.createdAt).toLocaleDateString()}</div>
                  </div>
                </div>
                {trip.status === "in_transit" && (
                  <Link href={`/dashboard/shipper/tracking?loadId=${trip.id}`} className="block">
                    <Button variant="outline" className="w-full gap-2">
                      <Navigation className="h-4 w-4" />
                      Track Trip
                    </Button>
                  </Link>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {displayedTrips.length === 0 && (
          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
            <CardContent className="p-12 text-center">
              <Truck className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">No {activeTab === "active" ? "active" : "completed"} trips</h3>
              <p className="text-gray-600">
                {activeTab === "active" ? "You don't have any active trips right now" : "You haven't completed any trips yet"}
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </DashboardLayout>
  );
}
