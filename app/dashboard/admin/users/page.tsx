"use client";

import { useState } from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Users, Search, Filter, Mail, Phone, Shield, MoreVertical } from "lucide-react";

// Mock user data
const mockUsers = [
  { id: "1", name: "ABC Logistics", email: "contact@abclogistics.com", phone: "+91 98765 43210", type: "shipper", status: "active", joined: "2024-01-01", loads: 45 },
  { id: "2", name: "Sharma Transport", email: "rajesh@sharmatransport.com", phone: "+91 98765 43211", type: "carrier", status: "active", joined: "2024-01-05", trips: 32 },
  { id: "3", name: "XYZ Freight", email: "info@xyzfreight.com", phone: "+91 98765 43212", type: "shipper", status: "active", joined: "2024-01-10", loads: 28 },
  { id: "4", name: "Kumar Transport", email: "kumar@transport.com", phone: "+91 98765 43213", type: "carrier", status: "pending", joined: "2024-01-15", trips: 0 },
  { id: "5", name: "Global Logistics", email: "contact@globallogistics.com", phone: "+91 98765 43214", type: "shipper", status: "active", joined: "2024-01-20", loads: 67 },
];

export default function UsersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState<"all" | "shipper" | "carrier">("all");
  const [statusFilter, setStatusFilter] = useState<"all" | "active" | "pending" | "suspended">("all");

  const filteredUsers = mockUsers.filter(user => {
    const matchesSearch = 
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = typeFilter === "all" || user.type === typeFilter;
    const matchesStatus = statusFilter === "all" || user.status === statusFilter;
    return matchesSearch && matchesType && matchesStatus;
  });

  return (
    <DashboardLayout userRole="admin">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
              User Management
            </h1>
            <p className="text-gray-600">
              Manage all platform users
            </p>
          </div>
          <Button className="gap-2 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg">
            <Users className="h-4 w-4" />
            Add User
          </Button>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Total Users</div>
                  <div className="text-3xl font-bold text-primary">{mockUsers.length}</div>
                </div>
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Shippers</div>
                  <div className="text-3xl font-bold text-secondary">{mockUsers.filter(u => u.type === "shipper").length}</div>
                </div>
                <div className="h-12 w-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Carriers</div>
                  <div className="text-3xl font-bold text-green-600">{mockUsers.filter(u => u.type === "carrier").length}</div>
                </div>
                <div className="h-12 w-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Active</div>
                  <div className="text-3xl font-bold text-green-600">{mockUsers.filter(u => u.status === "active").length}</div>
                </div>
                <div className="h-12 w-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search by name or email..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>
              <div className="flex gap-2">
                <Button
                  variant={typeFilter === "all" ? "default" : "outline"}
                  onClick={() => setTypeFilter("all")}
                >
                  All Types
                </Button>
                <Button
                  variant={typeFilter === "shipper" ? "default" : "outline"}
                  onClick={() => setTypeFilter("shipper")}
                >
                  Shippers
                </Button>
                <Button
                  variant={typeFilter === "carrier" ? "default" : "outline"}
                  onClick={() => setTypeFilter("carrier")}
                >
                  Carriers
                </Button>
              </div>
              <div className="flex gap-2">
                <Button
                  variant={statusFilter === "all" ? "default" : "outline"}
                  onClick={() => setStatusFilter("all")}
                >
                  All Status
                </Button>
                <Button
                  variant={statusFilter === "active" ? "default" : "outline"}
                  onClick={() => setStatusFilter("active")}
                >
                  Active
                </Button>
                <Button
                  variant={statusFilter === "pending" ? "default" : "outline"}
                  onClick={() => setStatusFilter("pending")}
                >
                  Pending
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Users Table - Desktop */}
        <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hidden md:block">
          <CardHeader className="bg-gradient-to-r from-gray-50 to-white border-b">
            <CardTitle className="text-xl font-bold">Users ({filteredUsers.length})</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-semibold">User</TableHead>
                  <TableHead className="font-semibold">Type</TableHead>
                  <TableHead className="font-semibold">Contact</TableHead>
                  <TableHead className="font-semibold">Status</TableHead>
                  <TableHead className="font-semibold">Activity</TableHead>
                  <TableHead className="font-semibold">Joined</TableHead>
                  <TableHead className="font-semibold">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.map((user) => (
                  <TableRow key={user.id} className="hover:bg-gray-50">
                    <TableCell>
                      <div className="font-semibold text-base">{user.name}</div>
                      <div className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                        <Mail className="h-3 w-3" />
                        {user.email}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={user.type === "shipper" ? "outline" : "secondary"} className="capitalize">
                        {user.type}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1 text-sm">
                        <Phone className="h-3 w-3 text-muted-foreground" />
                        {user.phone}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge 
                        variant={
                          user.status === "active" ? "success" :
                          user.status === "pending" ? "warning" : "destructive"
                        }
                        className="capitalize"
                      >
                        {user.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {user.type === "shipper" ? (
                        <div className="text-sm">
                          <span className="font-semibold">{user.loads}</span> loads
                        </div>
                      ) : (
                        <div className="text-sm">
                          <span className="font-semibold">{user.trips}</span> trips
                        </div>
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="text-sm text-muted-foreground">
                        {new Date(user.joined).toLocaleDateString()}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Users Cards - Mobile */}
        <div className="block md:hidden space-y-4">
          {filteredUsers.map((user) => (
            <Card key={user.id} className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="font-semibold text-lg mb-1">{user.name}</div>
                    <div className="text-sm text-muted-foreground flex items-center gap-1 mb-2">
                      <Mail className="h-3 w-3" />
                      {user.email}
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge variant={user.type === "shipper" ? "outline" : "secondary"} className="capitalize">
                        {user.type}
                      </Badge>
                      <Badge 
                        variant={
                          user.status === "active" ? "success" :
                          user.status === "pending" ? "warning" : "destructive"
                        }
                        className="capitalize"
                      >
                        {user.status}
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm border-t pt-4">
                  <div>
                    <span className="text-muted-foreground">Phone:</span>
                    <div className="font-semibold flex items-center gap-1">
                      <Phone className="h-3 w-3" />
                      {user.phone}
                    </div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Joined:</span>
                    <div className="font-semibold">{new Date(user.joined).toLocaleDateString()}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Activity:</span>
                    <div className="font-semibold">
                      {user.type === "shipper" ? (
                        <>{user.loads} loads</>
                      ) : (
                        <>{user.trips} trips</>
                      )}
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="w-full gap-2">
                  <MoreVertical className="h-4 w-4" />
                  Manage User
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredUsers.length === 0 && (
          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
            <CardContent className="p-12 text-center">
              <Users className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">No users found</h3>
              <p className="text-gray-600">
                Try adjusting your search filters
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </DashboardLayout>
  );
}
