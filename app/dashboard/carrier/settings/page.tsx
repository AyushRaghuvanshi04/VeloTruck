"use client";

import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Bell, CreditCard, Shield, Save, Truck } from "lucide-react";
import { mockFleet } from "@/constants/mockData";
import { Badge } from "@/components/ui/badge";

export default function CarrierSettingsPage() {
  return (
    <DashboardLayout userRole="carrier">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
            Settings
          </h1>
          <p className="text-gray-600">
            Manage your account, fleet, and preferences
          </p>
        </div>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="fleet">Fleet</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="payment">Payment</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile">
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-gray-50 to-white border-b">
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5 text-primary" />
                  Profile Information
                </CardTitle>
                <CardDescription>Update your personal and business information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 pt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Company/Individual Name</Label>
                    <Input id="companyName" defaultValue="Sharma Transport" className="h-12" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contactPerson">Contact Person</Label>
                    <Input id="contactPerson" defaultValue="Rajesh Sharma" className="h-12" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="rajesh@sharmatransport.com" className="h-12" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" defaultValue="+91 98765 43210" className="h-12" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="address">Business Address</Label>
                    <Input id="address" defaultValue="456 Transport Nagar, Delhi" className="h-12" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="gst">GST Number</Label>
                    <Input id="gst" defaultValue="07ABCDE1234F1Z5" className="h-12" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pan">PAN Number</Label>
                    <Input id="pan" defaultValue="ABCDE1234F" className="h-12" />
                  </div>
                </div>
                <Button className="gap-2 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg">
                  <Save className="h-4 w-4" />
                  Save Changes
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Fleet Tab */}
          <TabsContent value="fleet">
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-gray-50 to-white border-b">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Truck className="h-5 w-5 text-primary" />
                      Fleet Management
                    </CardTitle>
                    <CardDescription>Manage your vehicles</CardDescription>
                  </div>
                  <Button className="gap-2">
                    <Truck className="h-4 w-4" />
                    Add Vehicle
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {mockFleet.map((vehicle) => (
                    <div key={vehicle.id} className="p-4 rounded-xl border-2 hover:border-primary/50 transition-all bg-gradient-to-br from-white to-gray-50/50">
                      <div className="flex items-center justify-between mb-3">
                        <div className="font-semibold text-lg">{vehicle.vehicleType}</div>
                        <Badge variant={vehicle.status === "idle" ? "outline" : "secondary"}>
                          {vehicle.status === "idle" ? "Idle" : "On Trip"}
                        </Badge>
                      </div>
                      <div className="text-sm text-muted-foreground font-mono mb-3">{vehicle.rcNumber}</div>
                      {vehicle.currentLocation && (
                        <div className="text-xs text-muted-foreground">📍 {vehicle.currentLocation}</div>
                      )}
                      <div className="flex gap-2 mt-4">
                        <Button variant="outline" size="sm" className="flex-1">Edit</Button>
                        <Button variant="outline" size="sm" className="flex-1">Remove</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Notifications Tab */}
          <TabsContent value="notifications">
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-gray-50 to-white border-b">
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5 text-primary" />
                  Notification Preferences
                </CardTitle>
                <CardDescription>Manage how you receive notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 pt-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-lg border-2 hover:border-primary/50 transition-all">
                    <div>
                      <div className="font-semibold">New Load Alerts</div>
                      <div className="text-sm text-muted-foreground">Get notified about new loads matching your fleet</div>
                    </div>
                    <input type="checkbox" defaultChecked className="h-5 w-5 rounded" />
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-lg border-2 hover:border-primary/50 transition-all">
                    <div>
                      <div className="font-semibold">Bid Updates</div>
                      <div className="text-sm text-muted-foreground">Receive alerts when your bids are accepted or rejected</div>
                    </div>
                    <input type="checkbox" defaultChecked className="h-5 w-5 rounded" />
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-lg border-2 hover:border-primary/50 transition-all">
                    <div>
                      <div className="font-semibold">Payment Notifications</div>
                      <div className="text-sm text-muted-foreground">Get notified about payments and payouts</div>
                    </div>
                    <input type="checkbox" defaultChecked className="h-5 w-5 rounded" />
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-lg border-2 hover:border-primary/50 transition-all">
                    <div>
                      <div className="font-semibold">Email Notifications</div>
                      <div className="text-sm text-muted-foreground">Receive notifications via email</div>
                    </div>
                    <input type="checkbox" defaultChecked className="h-5 w-5 rounded" />
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-lg border-2 hover:border-primary/50 transition-all">
                    <div>
                      <div className="font-semibold">SMS Notifications</div>
                      <div className="text-sm text-muted-foreground">Receive notifications via SMS</div>
                    </div>
                    <input type="checkbox" className="h-5 w-5 rounded" />
                  </div>
                </div>
                <Button className="gap-2 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg">
                  <Save className="h-4 w-4" />
                  Save Preferences
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Payment Tab */}
          <TabsContent value="payment">
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-gray-50 to-white border-b">
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-primary" />
                  Payment & Payout Settings
                </CardTitle>
                <CardDescription>Manage your payment methods and payout preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 pt-6">
                <div className="space-y-4">
                  <div className="p-4 rounded-lg border-2 border-primary/20 bg-primary/5">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold">Bank Account</div>
                        <div className="text-sm text-muted-foreground">Account ending in 5678</div>
                      </div>
                      <Badge variant="outline">Default</Badge>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">Add Bank Account</Button>
                </div>
                <div className="pt-6 border-t">
                  <h3 className="font-semibold mb-4">Payout Schedule</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 rounded-lg border-2">
                      <div>
                        <div className="font-semibold">Automatic Payout</div>
                        <div className="text-sm text-muted-foreground">Weekly payouts every Monday</div>
                      </div>
                      <input type="checkbox" defaultChecked className="h-5 w-5 rounded" />
                    </div>
                  </div>
                </div>
                <Button className="gap-2 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg">
                  <Save className="h-4 w-4" />
                  Save Payment Settings
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Security Tab */}
          <TabsContent value="security">
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-gray-50 to-white border-b">
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Security Settings
                </CardTitle>
                <CardDescription>Manage your account security and password</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 pt-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <Input id="currentPassword" type="password" className="h-12" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input id="newPassword" type="password" className="h-12" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm New Password</Label>
                    <Input id="confirmPassword" type="password" className="h-12" />
                  </div>
                </div>
                <Button className="gap-2 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg">
                  <Save className="h-4 w-4" />
                  Update Password
                </Button>
                <div className="pt-6 border-t">
                  <h3 className="font-semibold mb-4">Two-Factor Authentication</h3>
                  <div className="flex items-center justify-between p-4 rounded-lg border-2">
                    <div>
                      <div className="font-semibold">Enable 2FA</div>
                      <div className="text-sm text-muted-foreground">Add an extra layer of security</div>
                    </div>
                    <input type="checkbox" className="h-5 w-5 rounded" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
