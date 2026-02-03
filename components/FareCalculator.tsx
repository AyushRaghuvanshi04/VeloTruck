"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MapPin, Calculator, Sparkles } from "lucide-react";

export function FareCalculator() {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [weight, setWeight] = useState("");
  const [estimatedFare, setEstimatedFare] = useState<number | null>(null);

  const calculateFare = () => {
    if (pickup && dropoff && weight) {
      // Simulated calculation based on distance and weight
      const baseFare = 5000;
      const weightMultiplier = parseFloat(weight) * 2000;
      const distanceMultiplier = 1.5; // Simulated distance factor
      const fare = Math.round((baseFare + weightMultiplier) * distanceMultiplier);
      setEstimatedFare(fare);
    }
  };

  return (
    <Card className="border-0 shadow-2xl bg-white/70 backdrop-blur-xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-bl-full blur-2xl" />
      <CardHeader className="relative z-10">
        <div className="flex items-center gap-3 mb-2">
          <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
            <Calculator className="h-6 w-6 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold">Instant Fare Estimate</CardTitle>
        </div>
        <p className="text-sm text-gray-600">Get a quick estimate in seconds</p>
      </CardHeader>
      <CardContent className="relative z-10 space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            Pickup Location
          </label>
          <Input
            placeholder="Enter pickup city"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            className="h-12 border-2 focus:border-primary/50"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
            <MapPin className="h-4 w-4 text-secondary" />
            Drop-off Location
          </label>
          <Input
            placeholder="Enter drop-off city"
            value={dropoff}
            onChange={(e) => setDropoff(e.target.value)}
            className="h-12 border-2 focus:border-secondary/50"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Weight (tons)</label>
          <Input
            type="number"
            placeholder="e.g., 15"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="h-12 border-2"
          />
        </div>
        <Button
          onClick={calculateFare}
          className="w-full h-12 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-xl transition-all"
        >
          <Sparkles className="h-5 w-5 mr-2" />
          Calculate Fare
        </Button>
        {estimatedFare && (
          <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 border-2 border-primary/20">
            <p className="text-sm text-gray-600 mb-1">Estimated Fare</p>
            <p className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              ₹{estimatedFare.toLocaleString()}
            </p>
            <p className="text-xs text-gray-500 mt-2">*Final price may vary based on market conditions</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
