"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Package, Shield, ArrowRight, Zap, TrendingUp, Users, MapPin, CheckCircle2, Award, FileCheck } from "lucide-react";
import { VeloTruckLogo } from "@/components/VeloTruckLogo";
import { FareCalculator } from "@/components/FareCalculator";
import { LiveStatsTicker } from "@/components/LiveStatsTicker";
import { StickyNav } from "@/components/StickyNav";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-gray-50 to-orange-50 animate-gradient-shift" />
      
      {/* Floating orbs - responsive sizes */}
      <div className="absolute top-20 left-10 w-32 h-32 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '0s' }} />
      <div className="absolute bottom-20 right-10 w-40 h-40 sm:w-80 sm:h-80 md:w-[500px] md:h-[500px] bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-96 sm:h-96 md:w-[600px] md:h-[600px] bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      {/* Radial gradients for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,102,0,0.1),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(0,102,204,0.1),transparent_50%)]" />
      

      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8 md:py-12 lg:py-16 relative z-10">
        {/* Hero Section - The Hook */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          {/* Logo */}
          <ScrollReveal>
            <div className="flex justify-center mb-8 animate-float">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-2xl opacity-50 animate-pulse" />
                <VeloTruckLogo showText={true} size="lg" className="relative z-10" />
              </div>
            </div>
          </ScrollReveal>
          
          {/* Dynamic Headline - Benefit-Driven */}
          <ScrollReveal delay={200}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-4 sm:mb-6 leading-tight max-w-5xl mx-auto px-2">
              <span className="block bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent mb-2 sm:mb-4">
                Reduce Empty Return Miles by 30%
              </span>
              <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-normal text-gray-700">
                with AI-Powered Logistics
              </span>
            </h1>
          </ScrollReveal>

          {/* Live Stats Ticker */}
          <ScrollReveal delay={400}>
            <div className="flex justify-center mb-8">
              <LiveStatsTicker />
            </div>
          </ScrollReveal>
          
          {/* Triple CTAs Above the Fold */}
          <ScrollReveal delay={600}>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 px-2">
              <Link href="/dashboard/shipper/post-load" className="group w-full sm:w-auto">
                <Button size="lg" className="h-24 sm:h-28 md:h-32 w-full sm:w-44 md:w-48 flex flex-col items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-primary via-primary to-primary/90 hover:from-primary/90 hover:via-primary hover:to-primary shadow-2xl hover:shadow-primary/50 transition-all hover:scale-105 active:scale-95 border-2 border-primary/20 rounded-2xl">
                  <Package className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white group-hover:rotate-12 transition-transform" />
                  <span className="text-base sm:text-lg font-bold text-white">Book a Load</span>
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-white group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/dashboard/carrier" className="group w-full sm:w-auto">
                <Button size="lg" variant="secondary" className="h-24 sm:h-28 md:h-32 w-full sm:w-44 md:w-48 flex flex-col items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-secondary via-secondary to-secondary/90 hover:from-secondary/90 hover:via-secondary hover:to-secondary shadow-2xl hover:shadow-secondary/50 transition-all hover:scale-105 active:scale-95 border-2 border-secondary/20 rounded-2xl">
                  <Truck className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white group-hover:rotate-12 transition-transform" />
                  <span className="text-base sm:text-lg font-bold text-white">Join as Carrier</span>
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-white group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/dashboard/admin" className="group w-full sm:w-auto">
                <Button size="lg" variant="outline" className="h-24 sm:h-28 md:h-32 w-full sm:w-44 md:w-48 flex flex-col items-center justify-center gap-2 sm:gap-3 border-2 bg-white/90 backdrop-blur-sm hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 shadow-xl hover:shadow-2xl transition-all hover:scale-105 active:scale-95 border-gray-300 hover:border-primary/50 rounded-2xl">
                  <Shield className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-gray-700 group-hover:rotate-12 transition-transform" />
                  <span className="text-base sm:text-lg font-bold text-gray-700">Admin Portal</span>
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-gray-700 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>
          
          {/* Stats Bar */}
          <ScrollReveal delay={800}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto mb-12 sm:mb-16 px-2">
              <div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl border border-white/50 hover:shadow-2xl transition-all hover:scale-105">
                <div className="flex items-center justify-center mb-2 sm:mb-3">
                  <div className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg">
                    <Truck className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />
                  </div>
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">10K+</div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">Active Trucks</div>
              </div>
              <div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl border border-white/50 hover:shadow-2xl transition-all hover:scale-105">
                <div className="flex items-center justify-center mb-2 sm:mb-3">
                  <div className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-xl bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center shadow-lg">
                    <Package className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />
                  </div>
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-secondary to-secondary/70 bg-clip-text text-transparent">50K+</div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">Loads Delivered</div>
              </div>
              <div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl border border-white/50 hover:shadow-2xl transition-all hover:scale-105">
                <div className="flex items-center justify-center mb-2 sm:mb-3">
                  <div className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg">
                    <Users className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />
                  </div>
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">5K+</div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">Verified Users</div>
              </div>
              <div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl border border-white/50 hover:shadow-2xl transition-all hover:scale-105">
                <div className="flex items-center justify-center mb-2 sm:mb-3">
                  <div className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-xl bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center shadow-lg">
                    <Zap className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />
                  </div>
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent">99%</div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">On-Time Delivery</div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Fare Calculator Widget */}
        <ScrollReveal delay={200}>
          <div className="max-w-md mx-auto mb-20">
            <FareCalculator />
          </div>
        </ScrollReveal>

        {/* Problem-First Feature Cards */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto mb-12 sm:mb-16 md:mb-20 px-2">
          <ScrollReveal delay={200}>
            <Card className="border-0 shadow-2xl hover:shadow-primary/30 transition-all duration-500 hover:scale-105 hover:-translate-y-2 glass relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
              <CardHeader className="relative z-10">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mb-4 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Package className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold mb-2">For Shippers</CardTitle>
                <CardDescription className="text-base font-semibold text-gray-800 mb-2">
                  Sick of unorganized brokers?
                </CardDescription>
                <CardDescription className="text-base">
                  Get transparent pricing in <span className="font-bold text-primary">10 seconds</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-3 text-gray-700 font-medium">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </div>
                    <span>Instant price quotes</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700 font-medium">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </div>
                    <span>Real-time tracking</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700 font-medium">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </div>
                    <span>No hidden fees</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <Card className="border-0 shadow-2xl hover:shadow-secondary/30 transition-all duration-500 hover:scale-105 hover:-translate-y-2 glass relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary/20 to-transparent rounded-bl-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
              <CardHeader className="relative z-10">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center mb-4 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Truck className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold mb-2">For Carriers</CardTitle>
                <CardDescription className="text-base font-semibold text-gray-800 mb-2">
                  Tired of empty return trips?
                </CardDescription>
                <CardDescription className="text-base">
                  Maximize earnings with <span className="font-bold text-secondary">AI-powered matching</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-3 text-gray-700 font-medium">
                    <div className="h-6 w-6 rounded-full bg-secondary/20 flex items-center justify-center">
                      <CheckCircle2 className="h-4 w-4 text-secondary" />
                    </div>
                    <span>Browse available loads</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700 font-medium">
                    <div className="h-6 w-6 rounded-full bg-secondary/20 flex items-center justify-center">
                      <CheckCircle2 className="h-4 w-4 text-secondary" />
                    </div>
                    <span>Track earnings dashboard</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700 font-medium">
                    <div className="h-6 w-6 rounded-full bg-secondary/20 flex items-center justify-center">
                      <CheckCircle2 className="h-4 w-4 text-secondary" />
                    </div>
                    <span>Fleet management tools</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>

        {/* Social Proof Section */}
        <ScrollReveal delay={200}>
          <div className="max-w-6xl mx-auto mb-12 sm:mb-16 md:mb-20 px-2">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent px-2">
                Trusted by Industry Leaders
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 px-2">
                Verified and certified for your peace of mind
              </p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              <Card className="glass border-0 shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
                    <FileCheck className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">GST Verified</h3>
                  <p className="text-xs sm:text-sm text-gray-600">Fully compliant with Indian tax regulations</p>
                </CardContent>
              </Card>
              <Card className="glass border-0 shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
                    <Award className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">ISO Certified</h3>
                  <p className="text-xs sm:text-sm text-gray-600">International quality standards</p>
                </CardContent>
              </Card>
              <Card className="glass border-0 shadow-xl hover:shadow-2xl transition-all hover:scale-105 sm:col-span-2 md:col-span-1">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
                    <Shield className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">Bank-Grade Security</h3>
                  <p className="text-xs sm:text-sm text-gray-600">256-bit SSL encryption</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </ScrollReveal>

        {/* Product Preview Section */}
        <ScrollReveal delay={200}>
          <div className="max-w-6xl mx-auto mb-12 sm:mb-16 md:mb-20 px-2">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent px-2">
                See It In Action
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 px-2">
                Experience our intuitive dashboard
              </p>
            </div>
            <Card className="glass border-0 shadow-2xl overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 h-64 sm:h-80 md:h-96 flex items-center justify-center relative">
                  <div className="text-center px-4">
                    <div className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-xl">
                      <Truck className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-white" />
                    </div>
                    <p className="text-sm sm:text-base md:text-lg text-gray-600 font-medium">
                      Interactive Dashboard Preview
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500 mt-2">
                      Real-time tracking, load management, and analytics
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </ScrollReveal>
      </div>

      {/* Sticky Navigation */}
      <StickyNav />
    </div>
  );
}
