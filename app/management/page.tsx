import React from 'react';
import Image from 'next/image';

// --- Static Data ---
const summaryCards = [
  { title: "Total Sales", value: "$71,897", change: "+12.5%", changeType: "increase" },
  { title: "New Listings", value: "321", change: "+5.2%", changeType: "increase" },
  { title: "Pending Orders", value: "28", change: "-2.8%", changeType: "decrease" },
  { title: "Site Visitors", value: "1,420", change: "+21.0%", changeType: "increase" },
];

const recentListings = [
  { id: 1, make: 'Porsche', model: '911 Carrera', price: 115000, imageUrl: 'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg' },
  { id: 2, make: 'Ford', model: 'Mustang GT', price: 45000, imageUrl: 'https://images.pexels.com/photos/2631489/pexels-photo-2631489.jpeg' },
  { id: 3, make: 'Toyota', model: 'Supra', price: 58000, imageUrl: 'https://images.pexels.com/photos/3221145/pexels-photo-3221145.jpeg' },
];

// --- Static Chart Component ---
const SalesChart = () => (
    <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Sales Analytics</h3>
        <div className="relative h-64">
            {/* This is a static SVG representation of a chart */}
            <svg width="100%" height="100%" viewBox="0 0 400 200" preserveAspectRatio="none">
                <path d="M 0,150 L 50,130 L 100,140 L 150,110 L 200,120 L 250,90 L 300,100 L 350,70 L 400,80" stroke="#4a90e2" fill="none" strokeWidth="2" />
                <path d="M 0,150 L 50,130 L 100,140 L 150,110 L 200,120 L 250,90 L 300,100 L 350,70 L 400,80 L 400,200 L 0,200 Z" fill="rgba(74, 144, 226, 0.1)" />
                {/* Grid lines */}
                <line x1="0" y1="50" x2="400" y2="50" stroke="#e0e0e0" strokeDasharray="2,2" />
                <line x1="0" y1="100" x2="400" y2="100" stroke="#e0e0e0" strokeDasharray="2,2" />
                <line x1="0" y1="150" x2="400" y2="150" stroke="#e0e0e0" strokeDasharray="2,2" />
            </svg>
        </div>
    </div>
);

// --- Main Page Component ---
export default function ManagementPage() {
  return (
    <div>
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {summaryCards.map((card, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-gray-500 text-sm font-medium">{card.title}</h3>
            <p className="text-2xl font-bold text-gray-800 mt-1">{card.value}</p>
            <p className={`text-sm mt-2 ${card.changeType === 'increase' ? 'text-green-500' : 'text-red-500'}`}>
              {card.change} vs last month
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Listings Table */}
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Recent Listings</h3>
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left font-semibold text-gray-600 p-2">Car</th>
                <th className="text-left font-semibold text-gray-600 p-2">Price</th>
              </tr>
            </thead>
            <tbody>
              {recentListings.map((car) => (
                <tr key={car.id} className="border-b">
                  <td className="p-2 flex items-center">
                    <Image src={car.imageUrl} alt={`${car.make} ${car.model}`} width={40} height={40} className="rounded-md mr-4" />
                    <span>{car.make} {car.model}</span>
                  </td>
                  <td className="p-2 font-semibold">${new Intl.NumberFormat().format(car.price)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Sales Chart */}
        <SalesChart />
      </div>
    </div>
  );
}
