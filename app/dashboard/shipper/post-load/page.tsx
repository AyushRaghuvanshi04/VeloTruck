"use client";

import { useState } from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Package, Truck, CheckCircle2 } from "lucide-react";

type Step = 1 | 2 | 3 | 4;

export default function PostLoadPage() {
  const [step, setStep] = useState<Step>(1);
  const [formData, setFormData] = useState({
    pickupAddress: "",
    dropoffAddress: "",
    materialType: "",
    weight: "",
    packagingType: "",
    truckBody: "",
  });

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.pickupAddress.trim() && formData.dropoffAddress.trim();
      case 2:
        return formData.materialType && formData.weight && formData.packagingType;
      case 3:
        return formData.truckBody;
      default:
        return true;
    }
  };

  const handleNext = () => {
    if (canProceed() && step < 4) setStep((step + 1) as Step);
  };

  const handleBack = () => {
    if (step > 1) setStep((step - 1) as Step);
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log("Submitting load:", formData);
    alert("Load posted successfully!");
  };

  // Calculate estimated fare based on distance and weight
  const estimatedFare = formData.weight 
    ? Math.round(parseInt(formData.weight) * 2500 * (formData.pickupAddress && formData.dropoffAddress ? 1.2 : 1))
    : 0;

  return (
    <DashboardLayout userRole="shipper">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="text-center sm:text-left">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">Post a New Load</h1>
          <p className="text-gray-600 mt-2 text-lg">Fill in the details to find the perfect carrier</p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-between mb-8 px-4">
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className="flex items-center flex-1">
              <div className="flex flex-col items-center relative z-10">
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center font-bold transition-all duration-300 relative ${
                    step >= s
                      ? "bg-gradient-to-br from-primary to-primary/80 text-white shadow-xl shadow-primary/40 scale-110"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {step > s ? (
                    <CheckCircle2 className="h-7 w-7" />
                  ) : (
                    <span className="text-lg">{s}</span>
                  )}
                  {step === s && (
                    <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping" />
                  )}
                </div>
                <p className={`text-sm mt-3 text-center font-semibold ${
                  step >= s ? "text-primary" : "text-gray-500"
                }`}>
                  {s === 1 && "Route"}
                  {s === 2 && "Cargo"}
                  {s === 3 && "Vehicle"}
                  {s === 4 && "Summary"}
                </p>
              </div>
              {s < 4 && (
                <div
                  className={`flex-1 h-2 mx-2 rounded-full transition-all duration-300 ${
                    step > s ? "bg-gradient-to-r from-primary to-primary/60 shadow-md" : "bg-gray-200"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm">
          <CardHeader className="bg-gradient-to-r from-gray-50 via-white to-gray-50 border-b">
            <CardTitle className="text-xl font-bold">
              {step === 1 && (
                <>
                  <MapPin className="inline h-5 w-5 mr-2" />
                  Step 1: Route Information
                </>
              )}
              {step === 2 && (
                <>
                  <Package className="inline h-5 w-5 mr-2" />
                  Step 2: Cargo Details
                </>
              )}
              {step === 3 && (
                <>
                  <Truck className="inline h-5 w-5 mr-2" />
                  Step 3: Vehicle Requirements
                </>
              )}
              {step === 4 && (
                <>
                  <CheckCircle2 className="inline h-5 w-5 mr-2" />
                  Step 4: Review & Confirm
                </>
              )}
            </CardTitle>
            <CardDescription>
              {step === 1 && "Enter pickup and drop-off locations"}
              {step === 2 && "Specify cargo type, weight, and packaging"}
              {step === 3 && "Select the required truck body type"}
              {step === 4 && "Review all details before posting"}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Step 1: Route */}
            {step === 1 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="pickup" className="text-base font-semibold">
                    Pickup Address <span className="text-destructive">*</span>
                  </Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      id="pickup"
                      placeholder="Enter pickup location (with Google Maps Autocomplete)"
                      value={formData.pickupAddress}
                      onChange={(e) =>
                        setFormData({ ...formData, pickupAddress: e.target.value })
                      }
                      className="pl-10 h-12"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Start typing to see suggestions from Google Maps
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dropoff" className="text-base font-semibold">
                    Drop-off Address <span className="text-destructive">*</span>
                  </Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      id="dropoff"
                      placeholder="Enter drop-off location"
                      value={formData.dropoffAddress}
                      onChange={(e) =>
                        setFormData({ ...formData, dropoffAddress: e.target.value })
                      }
                      className="pl-10 h-12"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Start typing to see suggestions from Google Maps
                  </p>
                </div>
                {formData.pickupAddress && formData.dropoffAddress && (
                  <div className="rounded-lg bg-primary/5 border border-primary/20 p-4">
                    <p className="text-sm font-medium text-primary">
                      Route: {formData.pickupAddress} → {formData.dropoffAddress}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Step 2: Cargo */}
            {step === 2 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="material" className="text-base font-semibold">
                    Material Type <span className="text-destructive">*</span>
                  </Label>
                  <Select
                    value={formData.materialType}
                    onValueChange={(value) =>
                      setFormData({ ...formData, materialType: value })
                    }
                  >
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select material type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cement">Cement</SelectItem>
                      <SelectItem value="fmcg">FMCG</SelectItem>
                      <SelectItem value="electronics">Electronics</SelectItem>
                      <SelectItem value="textiles">Textiles</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="weight" className="text-base font-semibold">
                    Weight (in tons) <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="weight"
                    type="number"
                    placeholder="e.g., 15"
                    value={formData.weight}
                    onChange={(e) =>
                      setFormData({ ...formData, weight: e.target.value })
                    }
                    className="h-12"
                    min="0.1"
                    step="0.1"
                  />
                  <p className="text-xs text-muted-foreground">
                    Enter the total weight of your cargo in metric tons
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="packaging" className="text-base font-semibold">
                    Packaging Type <span className="text-destructive">*</span>
                  </Label>
                  <Select
                    value={formData.packagingType}
                    onValueChange={(value) =>
                      setFormData({ ...formData, packagingType: value })
                    }
                  >
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select packaging type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pallets">Pallets</SelectItem>
                      <SelectItem value="boxes">Boxes</SelectItem>
                      <SelectItem value="loose">Loose</SelectItem>
                      <SelectItem value="containers">Containers</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {/* Step 3: Vehicle */}
            {step === 3 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="truckBody" className="text-base font-semibold">
                    Truck Body Type <span className="text-destructive">*</span>
                  </Label>
                  <Select
                    value={formData.truckBody}
                    onValueChange={(value) =>
                      setFormData({ ...formData, truckBody: value })
                    }
                  >
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select truck body type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="open">Open Truck</SelectItem>
                      <SelectItem value="container">32ft Container</SelectItem>
                      <SelectItem value="trailer">Trailer</SelectItem>
                      <SelectItem value="refrigerated">Refrigerated</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground">
                    Select the type of vehicle required for your cargo
                  </p>
                </div>
                {formData.truckBody && (
                  <div className="rounded-lg bg-secondary/5 border border-secondary/20 p-4">
                    <p className="text-sm font-medium text-secondary">
                      Selected: {formData.truckBody.charAt(0).toUpperCase() + formData.truckBody.slice(1).replace(/([A-Z])/g, ' $1')}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Step 4: Summary */}
            {step === 4 && (
              <div className="space-y-6">
                <div className="rounded-lg border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5 p-6 space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Load Summary</h3>
                  
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1">
                      <span className="text-sm text-muted-foreground">Route:</span>
                      <p className="font-semibold text-base">
                        {formData.pickupAddress || "Not specified"} → {formData.dropoffAddress || "Not specified"}
                      </p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-sm text-muted-foreground">Material Type:</span>
                      <p className="font-semibold text-base capitalize">
                        {formData.materialType || "Not specified"}
                      </p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-sm text-muted-foreground">Weight:</span>
                      <p className="font-semibold text-base">
                        {formData.weight || "0"} tons
                      </p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-sm text-muted-foreground">Packaging:</span>
                      <p className="font-semibold text-base capitalize">
                        {formData.packagingType || "Not specified"}
                      </p>
                    </div>
                    <div className="space-y-1 sm:col-span-2">
                      <span className="text-sm text-muted-foreground">Truck Type:</span>
                      <p className="font-semibold text-base capitalize">
                        {formData.truckBody || "Not specified"}
                      </p>
                    </div>
                  </div>
                  
                  <div className="border-t-2 border-primary/30 pt-4 mt-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-lg font-semibold text-gray-700">Estimated Fare:</span>
                        <p className="text-xs text-muted-foreground mt-1">
                          Based on weight and route distance
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="text-3xl font-bold text-primary">
                          ₹{estimatedFare.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="rounded-lg bg-blue-50 border border-blue-200 p-4">
                  <p className="text-sm text-blue-800">
                    <strong>Note:</strong> This is an estimated fare. Final pricing may vary based on carrier bids and market conditions.
                  </p>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6 border-t">
              <Button 
                variant="outline" 
                onClick={handleBack} 
                disabled={step === 1}
                size="lg"
                className="min-w-[120px] hover:bg-gray-50 transition-all"
              >
                Back
              </Button>
              {step < 4 ? (
                <Button 
                  onClick={handleNext} 
                  disabled={!canProceed()}
                  size="lg"
                  className="min-w-[120px] bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
                >
                  Next
                </Button>
              ) : (
                <Button 
                  onClick={handleSubmit}
                  size="lg"
                  className="min-w-[120px] bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all hover:scale-105"
                >
                  Post Load
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
