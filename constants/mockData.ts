export interface Load {
  id: string;
  origin: string;
  destination: string;
  status: "pending" | "in_transit" | "delivered" | "cancelled";
  price: number;
  truckType: string;
  weight: number;
  materialType: string;
  createdAt: string;
  estimatedDelivery: string;
  driverName?: string;
  driverPhone?: string;
  vehicleRC?: string;
}

export interface FleetVehicle {
  id: string;
  vehicleType: string;
  rcNumber: string;
  status: "idle" | "on_trip";
  currentLocation?: string;
}

export interface KYCVerification {
  id: string;
  userId: string;
  userName: string;
  userType: "shipper" | "carrier";
  aadhaarImage: string;
  rcImage?: string;
  status: "pending" | "approved" | "rejected";
  submittedAt: string;
}

export interface EarningsData {
  date: string;
  earnings: number;
}

export const mockLoads: Load[] = [
  {
    id: "1",
    origin: "Delhi",
    destination: "Mumbai",
    status: "in_transit",
    price: 45000,
    truckType: "32ft Container",
    weight: 15,
    materialType: "FMCG",
    createdAt: "2024-01-15T08:00:00Z",
    estimatedDelivery: "2024-01-18T18:00:00Z",
    driverName: "Rajesh Kumar",
    driverPhone: "+91 98765 43210",
    vehicleRC: "DL-01-AB-1234",
  },
  {
    id: "2",
    origin: "Bangalore",
    destination: "Chennai",
    status: "pending",
    price: 32000,
    truckType: "Open Truck",
    weight: 20,
    materialType: "Cement",
    createdAt: "2024-01-16T10:00:00Z",
    estimatedDelivery: "2024-01-17T20:00:00Z",
  },
  {
    id: "3",
    origin: "Pune",
    destination: "Ahmedabad",
    status: "in_transit",
    price: 38000,
    truckType: "Trailer",
    weight: 25,
    materialType: "Electronics",
    createdAt: "2024-01-14T06:00:00Z",
    estimatedDelivery: "2024-01-16T12:00:00Z",
    driverName: "Vikram Singh",
    driverPhone: "+91 98765 43211",
    vehicleRC: "MH-12-CD-5678",
  },
  {
    id: "4",
    origin: "Kolkata",
    destination: "Delhi",
    status: "delivered",
    price: 55000,
    truckType: "32ft Container",
    weight: 18,
    materialType: "FMCG",
    createdAt: "2024-01-10T09:00:00Z",
    estimatedDelivery: "2024-01-13T15:00:00Z",
    driverName: "Amit Sharma",
    driverPhone: "+91 98765 43212",
    vehicleRC: "WB-01-EF-9012",
  },
];

export const availableLoads: Load[] = [
  {
    id: "5",
    origin: "Hyderabad",
    destination: "Bangalore",
    status: "pending",
    price: 28000,
    truckType: "Open Truck",
    weight: 12,
    materialType: "Cement",
    createdAt: "2024-01-16T11:00:00Z",
    estimatedDelivery: "2024-01-17T22:00:00Z",
  },
  {
    id: "6",
    origin: "Jaipur",
    destination: "Delhi",
    status: "pending",
    price: 22000,
    truckType: "Container",
    weight: 10,
    materialType: "FMCG",
    createdAt: "2024-01-16T12:00:00Z",
    estimatedDelivery: "2024-01-17T18:00:00Z",
  },
  {
    id: "7",
    origin: "Surat",
    destination: "Mumbai",
    status: "pending",
    price: 25000,
    truckType: "Trailer",
    weight: 22,
    materialType: "Textiles",
    createdAt: "2024-01-16T13:00:00Z",
    estimatedDelivery: "2024-01-18T10:00:00Z",
  },
];

export const mockFleet: FleetVehicle[] = [
  { id: "1", vehicleType: "32ft Container", rcNumber: "DL-01-AB-1234", status: "on_trip", currentLocation: "Near Agra" },
  { id: "2", vehicleType: "Open Truck", rcNumber: "MH-12-CD-5678", status: "idle" },
  { id: "3", vehicleType: "Trailer", rcNumber: "KA-05-GH-3456", status: "idle" },
  { id: "4", vehicleType: "Container", rcNumber: "WB-01-EF-9012", status: "on_trip", currentLocation: "Near Varanasi" },
];

export const mockKYCQueue: KYCVerification[] = [
  {
    id: "1",
    userId: "user1",
    userName: "Sharma Transport",
    userType: "carrier",
    aadhaarImage: "/api/placeholder/400/300",
    rcImage: "/api/placeholder/400/300",
    status: "pending",
    submittedAt: "2024-01-15T10:00:00Z",
  },
  {
    id: "2",
    userId: "user2",
    userName: "Rajesh Kumar",
    userType: "carrier",
    aadhaarImage: "/api/placeholder/400/300",
    rcImage: "/api/placeholder/400/300",
    status: "pending",
    submittedAt: "2024-01-16T09:00:00Z",
  },
  {
    id: "3",
    userId: "user3",
    userName: "ABC Logistics",
    userType: "shipper",
    aadhaarImage: "/api/placeholder/400/300",
    status: "pending",
    submittedAt: "2024-01-16T11:00:00Z",
  },
];

export const mockEarnings: EarningsData[] = [
  { date: "2024-01-10", earnings: 45000 },
  { date: "2024-01-11", earnings: 52000 },
  { date: "2024-01-12", earnings: 38000 },
  { date: "2024-01-13", earnings: 55000 },
  { date: "2024-01-14", earnings: 48000 },
  { date: "2024-01-15", earnings: 62000 },
  { date: "2024-01-16", earnings: 45000 },
];

export const trackingEvents = [
  { time: "10:00 AM", event: "Picked up from warehouse", location: "Delhi" },
  { time: "12:30 PM", event: "Toll crossed", location: "Agra" },
  { time: "02:00 PM", event: "Rest stop", location: "Gwalior" },
  { time: "04:15 PM", event: "In transit", location: "Jhansi" },
];
