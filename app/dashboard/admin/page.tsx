"use client";

import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { mockLoads, mockKYCQueue } from "@/constants/mockData";
import { MapPin, CheckCircle2, XCircle, Sliders, FileCheck } from "lucide-react";

export default function AdminControlTower() {
  const pendingKYCs = mockKYCQueue.filter(kyc => kyc.status === "pending");

  return (
    <DashboardLayout userRole="admin">
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">Control Tower</h1>
          <p className="text-gray-600 mt-2 text-lg">Monitor platform activity and manage operations</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Heat Map */}
          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-gray-50 to-white border-b">
              <CardTitle className="flex items-center gap-2 text-xl font-bold">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-md">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                Demand/Supply Heat Map
              </CardTitle>
              <CardDescription className="text-sm">
                Visualize truck clusters to identify gaps
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] rounded-lg border-2 border-dashed border-gray-300 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 flex items-center justify-center relative overflow-hidden">
                {/* Simulated heat map visualization */}
                <div className="absolute inset-0">
                  {/* City markers with heat intensity */}
                  <div className="absolute top-1/4 left-1/4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-red-500/40 rounded-full animate-pulse" style={{ width: '80px', height: '80px' }}></div>
                      <div className="relative bg-red-500 rounded-full p-3 shadow-lg">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-bold bg-white px-3 py-1 rounded shadow border">
                        Delhi (High)
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute top-1/3 right-1/4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-red-500/40 rounded-full animate-pulse" style={{ width: '80px', height: '80px' }}></div>
                      <div className="relative bg-red-500 rounded-full p-3 shadow-lg">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-bold bg-white px-3 py-1 rounded shadow border">
                        Mumbai (High)
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-1/3 left-1/3">
                    <div className="relative">
                      <div className="absolute inset-0 bg-yellow-500/40 rounded-full" style={{ width: '60px', height: '60px' }}></div>
                      <div className="relative bg-yellow-500 rounded-full p-2.5 shadow-lg">
                        <MapPin className="h-5 w-5 text-white" />
                      </div>
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-bold bg-white px-3 py-1 rounded shadow border">
                        Bangalore (Med)
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-1/4 right-1/3">
                    <div className="relative">
                      <div className="absolute inset-0 bg-yellow-500/40 rounded-full" style={{ width: '60px', height: '60px' }}></div>
                      <div className="relative bg-yellow-500 rounded-full p-2.5 shadow-lg">
                        <MapPin className="h-5 w-5 text-white" />
                      </div>
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-bold bg-white px-3 py-1 rounded shadow border">
                        Chennai (Med)
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute top-1/2 left-1/2">
                    <div className="relative">
                      <div className="absolute inset-0 bg-green-500/40 rounded-full" style={{ width: '40px', height: '40px' }}></div>
                      <div className="relative bg-green-500 rounded-full p-2 shadow-lg">
                        <MapPin className="h-4 w-4 text-white" />
                      </div>
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-bold bg-white px-3 py-1 rounded shadow border">
                        Tier 2 (Low)
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Legend */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 border shadow-lg">
                  <div className="flex flex-wrap items-center gap-4 text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-red-500"></div>
                      <span className="font-medium">High Demand</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
                      <span className="font-medium">Medium Demand</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-green-500"></div>
                      <span className="font-medium">Low Demand</span>
                    </div>
                    <div className="ml-auto text-muted-foreground">
                      {mockLoads.length} active loads
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Verification Queue */}
          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-gray-50 to-white border-b">
              <CardTitle className="flex items-center gap-2 text-xl font-bold">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-md">
                  <FileCheck className="h-5 w-5 text-white" />
                </div>
                Verification Queue
              </CardTitle>
              <CardDescription className="text-sm">
                {pendingKYCs.length} pending KYC verifications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 max-h-[600px] overflow-y-auto">
                {pendingKYCs.map((kyc) => (
                  <div
                    key={kyc.id}
                    className="rounded-lg border-2 border-yellow-200 bg-yellow-50/30 p-5 space-y-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-bold text-base text-gray-900">{kyc.userName}</h3>
                        <p className="text-sm text-muted-foreground capitalize mt-0.5">
                          {kyc.userType} • Submitted {new Date(kyc.submittedAt).toLocaleDateString()}
                        </p>
                      </div>
                      <Badge variant="warning" className="text-xs">Pending</Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-lg border-2 border-gray-200 bg-white p-3">
                        <p className="text-xs font-semibold text-muted-foreground mb-2">Aadhaar Card</p>
                        <div className="h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded flex items-center justify-center border-2 border-dashed border-gray-300">
                          <div className="text-center">
                            <FileCheck className="h-6 w-6 text-gray-400 mx-auto mb-1" />
                            <span className="text-xs text-gray-500">Document Preview</span>
                          </div>
                        </div>
                      </div>
                      {kyc.rcImage && (
                        <div className="rounded-lg border-2 border-gray-200 bg-white p-3">
                          <p className="text-xs font-semibold text-muted-foreground mb-2">RC Document</p>
                          <div className="h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded flex items-center justify-center border-2 border-dashed border-gray-300">
                            <div className="text-center">
                              <FileCheck className="h-6 w-6 text-gray-400 mx-auto mb-1" />
                              <span className="text-xs text-gray-500">Document Preview</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="flex gap-2 pt-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1 border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700"
                      >
                        <XCircle className="h-4 w-4 mr-2" />
                        Reject
                      </Button>
                      <Button 
                        size="sm" 
                        className="flex-1 bg-green-600 hover:bg-green-700"
                      >
                        <CheckCircle2 className="h-4 w-4 mr-2" />
                        Approve
                      </Button>
                    </div>
                  </div>
                ))}
                {pendingKYCs.length === 0 && (
                  <div className="text-center py-12 text-muted-foreground">
                    <FileCheck className="h-16 w-16 mx-auto mb-4 opacity-50" />
                    <p className="font-medium">No pending verifications</p>
                    <p className="text-sm mt-1">All verifications are up to date</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Commission Manager */}
        <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
          <CardHeader className="bg-gradient-to-r from-gray-50 to-white border-b">
            <CardTitle className="flex items-center gap-2 text-xl font-bold">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-md">
                <Sliders className="h-5 w-5 text-white" />
              </div>
              Commission Manager
            </CardTitle>
            <CardDescription className="text-sm">
              Adjust platform fees globally or per route
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="space-y-4 p-5 rounded-lg border-2 border-primary/20 bg-primary/5">
                <div className="space-y-2">
                  <Label htmlFor="globalFee" className="text-base font-semibold">
                    Global Platform Fee (%)
                  </Label>
                  <Input
                    id="globalFee"
                    type="number"
                    defaultValue="5"
                    min="0"
                    max="20"
                    step="0.5"
                    className="h-12 text-lg font-semibold"
                  />
                  <p className="text-xs text-muted-foreground">
                    Applied to all transactions by default
                  </p>
                </div>
                <Button className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all" size="lg">
                  Update Global Fee
                </Button>
              </div>
              <div className="space-y-4 p-5 rounded-lg border-2 border-secondary/20 bg-secondary/5">
                <div className="space-y-2">
                  <Label htmlFor="routeFee" className="text-base font-semibold">
                    Route-Specific Fee
                  </Label>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Route (e.g., Delhi-Mumbai)"
                      className="flex-1 h-12"
                    />
                    <Input
                      type="number"
                      placeholder="Fee %"
                      className="w-24 h-12 text-lg font-semibold"
                      min="0"
                      max="20"
                      step="0.5"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Override global fee for specific routes
                  </p>
                </div>
                <Button variant="outline" className="w-full" size="lg">
                  Add Route Fee
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Platform Stats */}
        <div className="grid gap-6 md:grid-cols-4">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-primary/5 via-white to-primary/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-semibold text-gray-700">Total Users</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">1,234</div>
              <p className="text-xs text-muted-foreground font-medium mt-1">+12% from last month</p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-secondary/5 via-white to-secondary/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-semibold text-gray-700">Active Loads</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold bg-gradient-to-r from-secondary to-secondary/70 bg-clip-text text-transparent">{mockLoads.length}</div>
              <p className="text-xs text-muted-foreground font-medium mt-1">Currently in system</p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-green-500/5 via-white to-green-500/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-semibold text-gray-700">Platform Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">₹2.5L</div>
              <p className="text-xs text-muted-foreground font-medium mt-1">This month</p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-yellow-500/5 via-white to-yellow-500/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-semibold text-gray-700">Pending Verifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent">{pendingKYCs.length}</div>
              <p className="text-xs text-muted-foreground font-medium mt-1">Require attention</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
