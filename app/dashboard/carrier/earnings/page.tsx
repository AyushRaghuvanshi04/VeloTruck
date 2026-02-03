"use client";

import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { mockEarnings, mockLoads } from "@/constants/mockData";
import { IndianRupee, TrendingUp, Calendar, Download, BarChart3 } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

export default function EarningsPage() {
  const totalEarnings = mockEarnings.reduce((sum, day) => sum + day.earnings, 0);
  const thisMonthEarnings = mockEarnings.slice(-7).reduce((sum, day) => sum + day.earnings, 0);
  const completedTrips = mockLoads.filter(load => load.status === "delivered");
  const totalFromTrips = completedTrips.reduce((sum, trip) => sum + trip.price, 0);

  // Monthly earnings data (mock)
  const monthlyData = [
    { month: "Oct", earnings: 180000 },
    { month: "Nov", earnings: 220000 },
    { month: "Dec", earnings: 195000 },
    { month: "Jan", earnings: 345000 },
  ];

  return (
    <DashboardLayout userRole="carrier">
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
            Earnings Dashboard
          </h1>
          <p className="text-gray-600">
            Track your revenue and payment history
          </p>
        </div>

        {/* Earnings Stats */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm border-l-4 border-l-primary">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Total Earnings</div>
                  <div className="text-3xl font-bold text-primary">₹{totalEarnings.toLocaleString()}</div>
                  <div className="text-xs text-green-600 mt-1">All time</div>
                </div>
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <IndianRupee className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm border-l-4 border-l-secondary">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">This Month</div>
                  <div className="text-3xl font-bold text-secondary">₹{thisMonthEarnings.toLocaleString()}</div>
                  <div className="text-xs text-green-600 mt-1">+15% from last month</div>
                </div>
                <div className="h-12 w-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-secondary" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm border-l-4 border-l-green-500">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Completed Trips</div>
                  <div className="text-3xl font-bold text-green-600">{completedTrips.length}</div>
                  <div className="text-xs text-muted-foreground mt-1">Total revenue: ₹{totalFromTrips.toLocaleString()}</div>
                </div>
                <div className="h-12 w-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                  <BarChart3 className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm border-l-4 border-l-yellow-500">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Pending Payout</div>
                  <div className="text-3xl font-bold text-yellow-600">₹45,000</div>
                  <div className="text-xs text-muted-foreground mt-1">Next payout: Jan 25</div>
                </div>
                <div className="h-12 w-12 rounded-xl bg-yellow-500/10 flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-yellow-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="daily" className="space-y-6">
          <TabsList>
            <TabsTrigger value="daily">Daily Earnings</TabsTrigger>
            <TabsTrigger value="monthly">Monthly Overview</TabsTrigger>
            <TabsTrigger value="history">Payment History</TabsTrigger>
          </TabsList>

          {/* Daily Earnings */}
          <TabsContent value="daily">
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-gray-50 to-white border-b">
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Last 7 Days Earnings
                </CardTitle>
                <CardDescription>Daily revenue breakdown</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ResponsiveContainer width="100%" height={400}>
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
          </TabsContent>

          {/* Monthly Overview */}
          <TabsContent value="monthly">
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-gray-50 to-white border-b">
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  Monthly Earnings Trend
                </CardTitle>
                <CardDescription>Revenue over the last 4 months</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="month" stroke="#888" fontSize={12} />
                    <YAxis 
                      tickFormatter={(value) => `₹${(value / 1000).toFixed(0)}k`}
                      stroke="#888"
                      fontSize={12}
                    />
                    <Tooltip 
                      formatter={(value: number) => `₹${value.toLocaleString()}`}
                      contentStyle={{
                        backgroundColor: 'white',
                        border: '1px solid #e5e7eb',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                      }}
                    />
                    <Bar 
                      dataKey="earnings" 
                      fill="#FF6600"
                      radius={[8, 8, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Payment History */}
          <TabsContent value="history">
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-gray-50 to-white border-b">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      Payment History
                    </CardTitle>
                    <CardDescription>View all your past payouts</CardDescription>
                  </div>
                  <Button variant="outline" className="gap-2">
                    <Download className="h-4 w-4" />
                    Export
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {completedTrips.map((trip) => (
                    <div key={trip.id} className="flex items-center justify-between p-4 rounded-lg border-2 hover:border-primary/50 transition-all bg-gray-50/50">
                      <div>
                        <div className="font-semibold">{trip.origin} → {trip.destination}</div>
                        <div className="text-sm text-muted-foreground">
                          {new Date(trip.createdAt).toLocaleDateString('en-IN', { 
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric'
                          })}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-lg text-primary">₹{trip.price.toLocaleString()}</div>
                        <Badge variant="success" className="mt-1">Paid</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
