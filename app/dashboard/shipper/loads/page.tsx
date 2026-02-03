"use client";

import { useState } from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { mockLoads } from "@/constants/mockData";
import { Package, Search, Filter, ArrowRight, Navigation, Calendar, MapPin } from "lucide-react";
import Link from "next/link";

export default function MyLoadsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "pending" | "in_transit" | "delivered" | "cancelled">("all");

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

  const filteredLoads = mockLoads.filter(load => {
    const matchesSearch = 
      load.origin.toLowerCase().includes(searchQuery.toLowerCase()) ||
      load.destination.toLowerCase().includes(searchQuery.toLowerCase()) ||
      load.id.includes(searchQuery);
    const matchesStatus = statusFilter === "all" || load.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <DashboardLayout userRole="shipper">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
              My Loads
            </h1>
            <p className="text-gray-600">
              Manage and track all your shipments
            </p>
          </div>
          <Link href="/dashboard/shipper/post-load">
            <Button size="lg" className="gap-2 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all">
              <Package className="h-5 w-5" />
              Post New Load
            </Button>
          </Link>
        </div>

        {/* Filters */}
        <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search by route, load ID..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>
              <div className="flex gap-2">
                {(["all", "pending", "in_transit", "delivered", "cancelled"] as const).map((status) => (
                  <Button
                    key={status}
                    variant={statusFilter === status ? "default" : "outline"}
                    onClick={() => setStatusFilter(status)}
                    className="capitalize"
                  >
                    {status === "all" ? "All" : status.replace("_", " ")}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Loads Table - Desktop */}
        <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hidden md:block">
          <CardHeader className="bg-gradient-to-r from-gray-50 to-white border-b">
            <CardTitle className="text-xl font-bold">All Loads ({filteredLoads.length})</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-semibold">Load ID</TableHead>
                  <TableHead className="font-semibold">Route</TableHead>
                  <TableHead className="font-semibold">Truck Type</TableHead>
                  <TableHead className="font-semibold">Weight</TableHead>
                  <TableHead className="font-semibold">Price</TableHead>
                  <TableHead className="font-semibold">Status</TableHead>
                  <TableHead className="font-semibold">Created</TableHead>
                  <TableHead className="font-semibold">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredLoads.map((load) => (
                  <TableRow key={load.id} className="hover:bg-gray-50">
                    <TableCell className="font-mono text-sm">#{load.id}</TableCell>
                    <TableCell>
                      <div className="font-semibold text-base">
                        {load.origin} <ArrowRight className="inline h-4 w-4 mx-1" /> {load.destination}
                      </div>
                      <div className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                        <MapPin className="h-3 w-3" />
                        {load.materialType}
                      </div>
                    </TableCell>
                    <TableCell>{load.truckType}</TableCell>
                    <TableCell>{load.weight} tons</TableCell>
                    <TableCell>
                      <div className="font-bold text-lg text-primary">
                        ₹{load.price.toLocaleString()}
                      </div>
                    </TableCell>
                    <TableCell>{getStatusBadge(load.status)}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {new Date(load.createdAt).toLocaleDateString()}
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
                      ) : load.status === "pending" ? (
                        <Button variant="outline" size="sm">View Details</Button>
                      ) : (
                        <Button variant="outline" size="sm">View</Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Loads Cards - Mobile */}
        <div className="block md:hidden space-y-4">
          {filteredLoads.map((load) => (
            <Card key={load.id} className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-xs font-mono text-muted-foreground mb-1">#{load.id}</div>
                    <div className="font-bold text-lg">
                      {load.origin} <ArrowRight className="inline h-4 w-4 mx-1" /> {load.destination}
                    </div>
                  </div>
                  {getStatusBadge(load.status)}
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Truck Type:</span>
                    <div className="font-semibold">{load.truckType}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Weight:</span>
                    <div className="font-semibold">{load.weight} tons</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Price:</span>
                    <div className="font-bold text-primary">₹{load.price.toLocaleString()}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Created:</span>
                    <div className="font-semibold">{new Date(load.createdAt).toLocaleDateString()}</div>
                  </div>
                </div>
                {load.status === "in_transit" && (
                  <Link href={`/dashboard/shipper/tracking?loadId=${load.id}`} className="block">
                    <Button variant="outline" className="w-full gap-2">
                      <Navigation className="h-4 w-4" />
                      Track Shipment
                    </Button>
                  </Link>
                )}
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
                {searchQuery ? "Try adjusting your search filters" : "Get started by posting your first load"}
              </p>
              <Link href="/dashboard/shipper/post-load">
                <Button className="gap-2">
                  <Package className="h-4 w-4" />
                  Post New Load
                </Button>
              </Link>
            </CardContent>
          </Card>
        )}
      </div>
    </DashboardLayout>
  );
}
