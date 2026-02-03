"use client";

import { useState } from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { mockKYCQueue } from "@/constants/mockData";
import { FileCheck, Search, CheckCircle2, XCircle, User, Calendar } from "lucide-react";

export default function VerificationQueuePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "pending" | "approved" | "rejected">("all");

  const filteredVerifications = mockKYCQueue.filter(verification => {
    const matchesSearch = verification.userName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || verification.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const pendingCount = mockKYCQueue.filter(v => v.status === "pending").length;
  const approvedCount = mockKYCQueue.filter(v => v.status === "approved").length;
  const rejectedCount = mockKYCQueue.filter(v => v.status === "rejected").length;

  return (
    <DashboardLayout userRole="admin">
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
            Verification Queue
          </h1>
          <p className="text-gray-600">
            Review and approve KYC verifications
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm border-l-4 border-l-yellow-500">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Pending</div>
                  <div className="text-3xl font-bold text-yellow-600">{pendingCount}</div>
                </div>
                <div className="h-12 w-12 rounded-xl bg-yellow-500/10 flex items-center justify-center">
                  <FileCheck className="h-6 w-6 text-yellow-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm border-l-4 border-l-green-500">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Approved</div>
                  <div className="text-3xl font-bold text-green-600">{approvedCount}</div>
                </div>
                <div className="h-12 w-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm border-l-4 border-l-red-500">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Rejected</div>
                  <div className="text-3xl font-bold text-red-600">{rejectedCount}</div>
                </div>
                <div className="h-12 w-12 rounded-xl bg-red-500/10 flex items-center justify-center">
                  <XCircle className="h-6 w-6 text-red-600" />
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
                  placeholder="Search by user name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>
              <div className="flex gap-2">
                {(["all", "pending", "approved", "rejected"] as const).map((status) => (
                  <Button
                    key={status}
                    variant={statusFilter === status ? "default" : "outline"}
                    onClick={() => setStatusFilter(status)}
                    className="capitalize"
                  >
                    {status === "all" ? "All" : status}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Verification Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredVerifications.map((verification) => (
            <Card key={verification.id} className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all">
              <CardHeader className="bg-gradient-to-r from-gray-50 to-white border-b">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <User className="h-5 w-5 text-primary" />
                      {verification.userName}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-2 mt-1">
                      <span className="capitalize">{verification.userType}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(verification.submittedAt).toLocaleDateString()}
                      </span>
                    </CardDescription>
                  </div>
                  <Badge 
                    variant={
                      verification.status === "pending" ? "warning" :
                      verification.status === "approved" ? "success" : "destructive"
                    }
                  >
                    {verification.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="rounded-lg border-2 border-gray-200 bg-gray-50 p-4">
                    <p className="text-xs font-semibold text-muted-foreground mb-2">Aadhaar Card</p>
                    <div className="h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded flex items-center justify-center border-2 border-dashed border-gray-300">
                      <div className="text-center">
                        <FileCheck className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                        <span className="text-xs text-gray-500">Document Preview</span>
                      </div>
                    </div>
                  </div>
                  {verification.rcImage && (
                    <div className="rounded-lg border-2 border-gray-200 bg-gray-50 p-4">
                      <p className="text-xs font-semibold text-muted-foreground mb-2">RC Document</p>
                      <div className="h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded flex items-center justify-center border-2 border-dashed border-gray-300">
                        <div className="text-center">
                          <FileCheck className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                          <span className="text-xs text-gray-500">Document Preview</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                {verification.status === "pending" && (
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      className="flex-1 border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700"
                    >
                      <XCircle className="h-4 w-4 mr-2" />
                      Reject
                    </Button>
                    <Button 
                      className="flex-1 bg-green-600 hover:bg-green-700"
                    >
                      <CheckCircle2 className="h-4 w-4 mr-2" />
                      Approve
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredVerifications.length === 0 && (
          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
            <CardContent className="p-12 text-center">
              <FileCheck className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">No verifications found</h3>
              <p className="text-gray-600">
                {searchQuery ? "Try adjusting your search filters" : "All verifications are up to date"}
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </DashboardLayout>
  );
}
