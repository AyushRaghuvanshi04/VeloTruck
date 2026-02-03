"use client";

import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { availableLoads, mockFleet, mockEarnings } from "@/constants/mockData";
import { Truck, TrendingUp, IndianRupee, ArrowRight, MapPin, Package, Clock } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";

export default function CarrierDashboard() {
  const idleTrucks = mockFleet.filter(v => v.status === "idle").length;
  const onTripTrucks = mockFleet.filter(v => v.status === "on_trip").length;
  const totalEarnings = mockEarnings.reduce((sum, day) => sum + day.earnings, 0);

  return (
    <DashboardLayout userRole="carrier">
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Carrier Dashboard</h1>
          <p className="text-gray-600 mt-1">Find loads and manage your fleet</p>
        </div>

        {/* Stats */}
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-green-500/5 via-white to-green-500/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500/20 to-transparent rounded-bl-full blur-2xl" />
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
              <CardTitle className="text-sm font-semibold text-gray-700">Idle Trucks</CardTitle>
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg shadow-green-500/30 group-hover:scale-110 transition-transform">
                <Truck className="h-6 w-6 text-white" />
              </div>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">{idleTrucks}</div>
              <p className="text-xs text-muted-foreground mt-2 font-medium">
                Available for booking
              </p>
            </CardContent>
          </Card>
          <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-secondary/5 via-white to-secondary/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary/20 to-transparent rounded-bl-full blur-2xl" />
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
              <CardTitle className="text-sm font-semibold text-gray-700">On Trip</CardTitle>
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center shadow-lg shadow-secondary/30 group-hover:scale-110 transition-transform">
                <Truck className="h-6 w-6 text-white" />
              </div>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-secondary to-secondary/70 bg-clip-text text-transparent">{onTripTrucks}</div>
              <p className="text-xs text-muted-foreground mt-2 font-medium">
                Currently delivering
              </p>
            </CardContent>
          </Card>
          <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-primary/5 via-white to-primary/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full blur-2xl" />
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
              <CardTitle className="text-sm font-semibold text-gray-700">Total Earnings</CardTitle>
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform">
                <IndianRupee className="h-6 w-6 text-white" />
              </div>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">₹{totalEarnings.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground mt-2 font-medium">
                Last 7 days
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Available Loads Feed */}
          <Card className="lg:col-span-1 border-0 shadow-xl bg-white/80 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-gray-50 to-white border-b">
              <CardTitle className="flex items-center gap-2 text-xl font-bold">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-md">
                  <Package className="h-5 w-5 text-white" />
                </div>
                Available Loads
              </CardTitle>
              <CardDescription className="text-sm">New opportunities for your fleet</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 max-h-[600px] overflow-y-auto">
                {availableLoads.map((load) => (
                  <div
                    key={load.id}
                    className="rounded-xl border-2 border-gray-200 p-5 hover:border-primary/50 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white via-white to-primary/5 hover:scale-[1.02] relative overflow-hidden group"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {/* Route Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-bold text-lg text-gray-900">{load.origin}</span>
                          <ArrowRight className="h-5 w-5 text-primary" />
                          <span className="font-bold text-lg text-gray-900">{load.destination}</span>
                        </div>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Truck className="h-4 w-4" />
                            {load.truckType}
                          </span>
                          <span>•</span>
                          <span>{load.weight} tons</span>
                          <span>•</span>
                          <span className="capitalize">{load.materialType}</span>
                        </div>
                      </div>
                      <Badge variant="outline" className="ml-2">Available</Badge>
                    </div>

                    {/* Price and Actions */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t">
                      <div className="flex-1">
                        <div className="flex items-baseline gap-2 mb-1">
                          <span className="text-3xl font-bold text-primary">
                            ₹{load.price.toLocaleString()}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          <span>Est. delivery: {new Date(load.estimatedDelivery).toLocaleDateString('en-IN', { 
                            day: 'numeric', 
                            month: 'short',
                            year: 'numeric'
                          })}</span>
                        </div>
                      </div>
                      <div className="flex gap-2 w-full sm:w-auto relative z-10">
                        <Button variant="outline" size="sm" className="flex-1 sm:flex-none hover:bg-gray-50 transition-all">
                          Place Bid
                        </Button>
                        <Button size="sm" className="flex-1 sm:flex-none bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-md hover:shadow-lg transition-all">
                          Accept Load
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
                {availableLoads.length === 0 && (
                  <div className="text-center py-12 text-muted-foreground">
                    <Package className="h-16 w-16 mx-auto mb-4 opacity-50" />
                    <p className="font-medium">No available loads</p>
                    <p className="text-sm mt-1">Check back later for new opportunities</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Earnings Graph */}
          <Card className="lg:col-span-1 border-0 shadow-xl bg-white/80 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-gray-50 to-white border-b">
              <CardTitle className="flex items-center gap-2 text-xl font-bold">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-md">
                  <TrendingUp className="h-5 w-5 text-white" />
                </div>
                Earnings Overview
              </CardTitle>
              <CardDescription className="text-sm">Revenue over the last 7 days</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={mockEarnings}>
                  <defs>
                    <linearGradient id="colorEarnings" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#FF6600" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#FF6600" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis 
                    dataKey="date" 
                    tickFormatter={(value) => new Date(value).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })}
                    stroke="#888"
                    fontSize={12}
                  />
                  <YAxis 
                    tickFormatter={(value) => `₹${(value / 1000).toFixed(0)}k`}
                    stroke="#888"
                    fontSize={12}
                  />
                  <Tooltip 
                    formatter={(value: number) => [`₹${value.toLocaleString()}`, "Earnings"]}
                    labelFormatter={(value) => new Date(value).toLocaleDateString('en-IN', { 
                      weekday: 'short',
                      month: 'short', 
                      day: 'numeric' 
                    })}
                    contentStyle={{
                      backgroundColor: 'white',
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="earnings" 
                    stroke="#FF6600" 
                    strokeWidth={3}
                    fill="url(#colorEarnings)"
                    dot={{ fill: "#FF6600", r: 5, strokeWidth: 2, stroke: "#fff" }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Fleet Overview */}
        <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
          <CardHeader className="bg-gradient-to-r from-gray-50 to-white border-b">
            <CardTitle className="flex items-center gap-2 text-xl font-bold">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-md">
                <Truck className="h-5 w-5 text-white" />
              </div>
              Fleet Overview
            </CardTitle>
            <CardDescription className="text-sm">Status of all your vehicles</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {mockFleet.map((vehicle) => (
                <div
                  key={vehicle.id}
                  className={`rounded-xl border-2 p-4 transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                    vehicle.status === "idle" 
                      ? "border-green-200 bg-gradient-to-br from-green-50/80 to-green-100/50 shadow-md" 
                      : "border-secondary/30 bg-gradient-to-br from-secondary/10 to-secondary/5 shadow-md"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className={`h-2 w-2 rounded-full ${
                        vehicle.status === "idle" ? "bg-green-500" : "bg-secondary"
                      }`}></div>
                      <p className="font-semibold text-base">{vehicle.vehicleType}</p>
                    </div>
                    <Badge variant={vehicle.status === "idle" ? "outline" : "secondary"}>
                      {vehicle.status === "idle" ? "Idle" : "On Trip"}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground font-mono mb-2">{vehicle.rcNumber}</p>
                  {vehicle.currentLocation && (
                    <div className="flex items-center gap-1 text-xs text-muted-foreground pt-2 border-t">
                      <MapPin className="h-3 w-3" />
                      <span>{vehicle.currentLocation}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
