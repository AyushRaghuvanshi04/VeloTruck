"use client";

import { useState } from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { availableLoads } from "@/constants/mockData";
import { Package, Search, Filter, ArrowRight, Clock, Truck, MapPin, IndianRupee } from "lucide-react";

export default function AvailableLoadsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredLoads = availableLoads.filter(load =>
    load.origin.toLowerCase().includes(searchQuery.toLowerCase()) ||
    load.destination.toLowerCase().includes(searchQuery.toLowerCase()) ||
    load.materialType.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <DashboardLayout userRole="carrier">
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
            Available Loads
          </h1>
          <p className="text-gray-600">
            Browse and accept loads that match your fleet
          </p>
        </div>

        {/* Search */}
        <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Search by route, material type, truck type..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12"
              />
            </div>
          </CardContent>
        </Card>

        {/* Loads Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLoads.map((load) => (
            <Card key={load.id} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white via-white to-primary/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
              <CardHeader className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-bold text-xl text-gray-900">{load.origin}</span>
                      <ArrowRight className="h-5 w-5 text-primary" />
                      <span className="font-bold text-xl text-gray-900">{load.destination}</span>
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
              </CardHeader>
              <CardContent className="relative z-10 space-y-4">
                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-primary">
                        ₹{load.price.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                      <Clock className="h-3 w-3" />
                      <span>Est. delivery: {new Date(load.estimatedDelivery).toLocaleDateString('en-IN', { 
                        day: 'numeric', 
                        month: 'short',
                        year: 'numeric'
                      })}</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1 hover:bg-gray-50 transition-all">
                    Place Bid
                  </Button>
                  <Button className="flex-1 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-md hover:shadow-lg transition-all">
                    Accept Load
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredLoads.length === 0 && (
          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
            <CardContent className="p-12 text-center">
              <Package className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">No loads found</h3>
              <p className="text-gray-600">
                Try adjusting your search query
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </DashboardLayout>
  );
}
