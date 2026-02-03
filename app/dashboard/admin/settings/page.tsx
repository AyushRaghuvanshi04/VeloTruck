"use client";

import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Settings, Sliders, Shield, Save, Bell, Globe } from "lucide-react";

export default function AdminSettingsPage() {
  return (
    <DashboardLayout userRole="admin">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
            Platform Settings
          </h1>
          <p className="text-gray-600">
            Configure platform-wide settings and preferences
          </p>
        </div>

        <Tabs defaultValue="general" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="commission">Commission</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
          </TabsList>

          {/* General Settings */}
          <TabsContent value="general">
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-gray-50 to-white border-b">
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-primary" />
                  General Settings
                </CardTitle>
                <CardDescription>Platform-wide configuration</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 pt-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="platformName">Platform Name</Label>
                    <Input id="platformName" defaultValue="VeloTruck" className="h-12" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="supportEmail">Support Email</Label>
                    <Input id="supportEmail" type="email" defaultValue="support@velotruck.com" className="h-12" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="supportPhone">Support Phone</Label>
                    <Input id="supportPhone" defaultValue="+91 1800-123-4567" className="h-12" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="maintenanceMode">Maintenance Mode</Label>
                    <div className="flex items-center justify-between p-4 rounded-lg border-2">
                      <div>
                        <div className="font-semibold">Enable Maintenance Mode</div>
                        <div className="text-sm text-muted-foreground">Temporarily disable platform access</div>
                      </div>
                      <input type="checkbox" className="h-5 w-5 rounded" />
                    </div>
                  </div>
                </div>
                <Button className="gap-2 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg">
                  <Save className="h-4 w-4" />
                  Save Settings
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Commission Settings */}
          <TabsContent value="commission">
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-gray-50 to-white border-b">
                <CardTitle className="flex items-center gap-2">
                  <Sliders className="h-5 w-5 text-primary" />
                  Commission Management
                </CardTitle>
                <CardDescription>Adjust platform fees and commission rates</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 pt-6">
                <div className="grid md:grid-cols-2 gap-6">
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
                    <Button className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg">
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
                    <Button variant="outline" className="w-full">
                      Add Route Fee
                    </Button>
                  </div>
                </div>
                <div className="pt-6 border-t">
                  <h3 className="font-semibold mb-4">Active Route Fees</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 rounded-lg border-2 bg-gray-50">
                      <div>
                        <div className="font-semibold">Delhi - Mumbai</div>
                        <div className="text-sm text-muted-foreground">7% commission</div>
                      </div>
                      <Button variant="outline" size="sm">Remove</Button>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg border-2 bg-gray-50">
                      <div>
                        <div className="font-semibold">Bangalore - Chennai</div>
                        <div className="text-sm text-muted-foreground">6% commission</div>
                      </div>
                      <Button variant="outline" size="sm">Remove</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Notifications Settings */}
          <TabsContent value="notifications">
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-gray-50 to-white border-b">
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5 text-primary" />
                  Notification Settings
                </CardTitle>
                <CardDescription>Configure system-wide notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 pt-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-lg border-2 hover:border-primary/50 transition-all">
                    <div>
                      <div className="font-semibold">New User Registrations</div>
                      <div className="text-sm text-muted-foreground">Get notified when new users sign up</div>
                    </div>
                    <input type="checkbox" defaultChecked className="h-5 w-5 rounded" />
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-lg border-2 hover:border-primary/50 transition-all">
                    <div>
                      <div className="font-semibold">KYC Verification Requests</div>
                      <div className="text-sm text-muted-foreground">Alert when new KYC documents are submitted</div>
                    </div>
                    <input type="checkbox" defaultChecked className="h-5 w-5 rounded" />
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-lg border-2 hover:border-primary/50 transition-all">
                    <div>
                      <div className="font-semibold">System Alerts</div>
                      <div className="text-sm text-muted-foreground">Critical system notifications</div>
                    </div>
                    <input type="checkbox" defaultChecked className="h-5 w-5 rounded" />
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-lg border-2 hover:border-primary/50 transition-all">
                    <div>
                      <div className="font-semibold">Payment Issues</div>
                      <div className="text-sm text-muted-foreground">Notifications for payment failures</div>
                    </div>
                    <input type="checkbox" defaultChecked className="h-5 w-5 rounded" />
                  </div>
                </div>
                <Button className="gap-2 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg">
                  <Save className="h-4 w-4" />
                  Save Preferences
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Security Settings */}
          <TabsContent value="security">
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-gray-50 to-white border-b">
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Security Settings
                </CardTitle>
                <CardDescription>Platform security and access control</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 pt-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="sessionTimeout">Session Timeout (minutes)</Label>
                    <Input id="sessionTimeout" type="number" defaultValue="30" className="h-12" />
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-lg border-2">
                    <div>
                      <div className="font-semibold">Require 2FA for Admins</div>
                      <div className="text-sm text-muted-foreground">Force two-factor authentication for admin accounts</div>
                    </div>
                    <input type="checkbox" defaultChecked className="h-5 w-5 rounded" />
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-lg border-2">
                    <div>
                      <div className="font-semibold">IP Whitelist</div>
                      <div className="text-sm text-muted-foreground">Restrict admin access to specific IP addresses</div>
                    </div>
                    <input type="checkbox" className="h-5 w-5 rounded" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="allowedIPs">Allowed IP Addresses</Label>
                    <Input id="allowedIPs" placeholder="192.168.1.1, 10.0.0.1" className="h-12" />
                  </div>
                </div>
                <Button className="gap-2 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg">
                  <Save className="h-4 w-4" />
                  Save Security Settings
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
