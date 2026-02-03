# VeloTruck - Tech-Enabled Logistics Platform

A modern, UI-first marketplace platform for connecting shippers with carriers. Built with Next.js 15, TypeScript, Tailwind CSS, and Shadcn/UI. Velocity meets logistics.

## Features

### 🚚 Shipper Dashboard
- **Hero Stat Cards**: Active loads, total spent, deliveries this week
- **Quick Action**: Post new load button
- **Active Shipments Table**: View all active loads with route, status, and price
- **Map Widget**: Visual representation of current shipments

### 🚛 Carrier/Driver Dashboard
- **Available Loads Feed**: Card-based list of job opportunities
- **Fleet Overview**: Track idle vs on-trip vehicles
- **Earnings Graph**: Revenue visualization over the last 7 days

### 📋 Post Load Wizard
- **4-Step Process**: Route → Cargo → Vehicle → Summary
- **Form Validation**: Prevents errors with step-by-step approach
- **Estimated Fare**: Automatic price calculation

### 📍 Live Tracking Screen
- **Central Map**: Full-screen map with truck movement
- **Left Sidebar**: Timeline of events
- **Right Sidebar**: Driver details and vehicle information

### 🎛️ Admin Control Tower
- **Heat Map**: Visualize demand/supply gaps
- **Verification Queue**: KYC approval workflow
- **Commission Manager**: Adjust platform fees globally or per route

## Design System

- **Primary Color**: Safety Orange (#FF6600)
- **Secondary Color**: Strong Blue (#0066CC)
- **Background**: Light Gray (#F5F5F5)
- **Typography**: Inter/Roboto (Sans-serif for high readability)

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Routes

- `/` - Landing page
- `/dashboard/shipper` - Shipper dashboard
- `/dashboard/shipper/post-load` - Post load wizard
- `/dashboard/shipper/tracking` - Live tracking screen
- `/dashboard/carrier` - Carrier dashboard
- `/dashboard/admin` - Admin control tower

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/UI (Radix UI primitives)
- **Charts**: Recharts
- **Icons**: Lucide React

## Project Structure

```
├── app/
│   ├── dashboard/
│   │   ├── shipper/
│   │   ├── carrier/
│   │   └── admin/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── dashboard/
│   │   ├── DashboardLayout.tsx
│   │   └── Sidebar.tsx
│   └── ui/
│       ├── button.tsx
│       ├── card.tsx
│       ├── badge.tsx
│       └── ...
├── constants/
│   └── mockData.ts
└── lib/
    └── utils.ts
```

## Mock Data

All data is currently static and defined in `constants/mockData.ts`. This includes:
- Sample loads
- Fleet vehicles
- KYC verifications
- Earnings data
- Tracking events

## Next Steps

1. Integrate Google Maps API for address autocomplete and map visualization
2. Connect to backend API endpoints
3. Implement authentication and user management
4. Add real-time tracking with WebSocket connections
5. Implement payment processing
6. Add mobile-responsive optimizations

## License

MIT
