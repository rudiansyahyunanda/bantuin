"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const allCars = [
  {
    id: 1,
    name: "Toyota Avanza",
    category: "MPV",
    price: "300.000",
    transmission: "Manual",
    seats: 7,
    fuel: "Bensin",
    image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=500&h=300&fit=crop",
  },
  {
    id: 2,
    name: "Honda Jazz",
    category: "Hatchback",
    price: "350.000",
    transmission: "Automatic",
    seats: 5,
    fuel: "Bensin",
    image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=500&h=300&fit=crop",
  },
  {
    id: 3,
    name: "Toyota Innova Reborn",
    category: "MPV",
    price: "450.000",
    transmission: "Automatic",
    seats: 7,
    fuel: "Diesel",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=500&h=300&fit=crop",
  },
  {
    id: 4,
    name: "Mitsubishi Xpander",
    category: "MPV",
    price: "400.000",
    transmission: "Manual",
    seats: 7,
    fuel: "Bensin",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=500&h=300&fit=crop",
  },
  {
    id: 5,
    name: "Honda CR-V",
    category: "SUV",
    price: "600.000",
    transmission: "Automatic",
    seats: 5,
    fuel: "Bensin",
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=500&h=300&fit=crop",
  },
  {
    id: 6,
    name: "Toyota Fortuner",
    category: "SUV",
    price: "700.000",
    transmission: "Automatic",
    seats: 7,
    fuel: "Diesel",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=500&h=300&fit=crop",
  },
  {
    id: 7,
    name: "Daihatsu Xenia",
    category: "MPV",
    price: "280.000",
    transmission: "Manual",
    seats: 7,
    fuel: "Bensin",
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=500&h=300&fit=crop",
  },
  {
    id: 8,
    name: "Suzuki Ertiga",
    category: "MPV",
    price: "320.000",
    transmission: "Manual",
    seats: 7,
    fuel: "Bensin",
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=500&h=300&fit=crop",
  },
  {
    id: 9,
    name: "Toyota Alphard",
    category: "MPV",
    price: "1.200.000",
    transmission: "Automatic",
    seats: 7,
    fuel: "Bensin",
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=500&h=300&fit=crop",
  },
];

export default function MobilPage() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [selectedTransmission, setSelectedTransmission] = useState("Semua");
  const [priceRange, setPriceRange] = useState("Semua");

  const categories = ["Semua", "MPV", "SUV", "Hatchback"];
  const transmissions = ["Semua", "Manual", "Automatic"];
  const priceRanges = [
    { label: "Semua", min: 0, max: Infinity },
    { label: "< Rp 400.000", min: 0, max: 400000 },
    { label: "Rp 400.000 - Rp 600.000", min: 400000, max: 600000 },
    { label: "> Rp 600.000", min: 600000, max: Infinity },
  ];

  const filteredCars = allCars.filter((car) => {
    const categoryMatch = selectedCategory === "Semua" || car.category === selectedCategory;
    const transmissionMatch = selectedTransmission === "Semua" || car.transmission === selectedTransmission;
    
    const carPrice = parseInt(car.price.replace(/\./g, ""));
    const selectedPriceRange = priceRanges.find((range) => range.label === priceRange);
    const priceMatch = !selectedPriceRange || (carPrice >= selectedPriceRange.min && carPrice <= selectedPriceRange.max);

    return categoryMatch && transmissionMatch && priceMatch;
  });

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Daftar Mobil
            </h1>
            <p className="text-gray-600">
              Pilih mobil yang sesuai dengan kebutuhan perjalanan Anda
            </p>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Filter Pencarian</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Kategori
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Transmission Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Transmisi
                </label>
                <select
                  value={selectedTransmission}
                  onChange={(e) => setSelectedTransmission(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  {transmissions.map((transmission) => (
                    <option key={transmission} value={transmission}>
                      {transmission}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Rentang Harga
                </label>
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  {priceRanges.map((range) => (
                    <option key={range.label} value={range.label}>
                      {range.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <p className="text-sm text-gray-600">
                Menampilkan {filteredCars.length} dari {allCars.length} mobil
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("Semua");
                  setSelectedTransmission("Semua");
                  setPriceRange("Semua");
                }}
                className="text-primary-600 hover:text-primary-700 text-sm font-medium"
              >
                Reset Filter
              </button>
            </div>
          </div>

          {/* Car Grid */}
          {filteredCars.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCars.map((car) => (
                <div
                  key={car.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-48 bg-gray-200">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {car.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {car.name}
                    </h3>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-600 text-sm">
                        <span className="w-24">Transmisi:</span>
                        <span className="font-medium">{car.transmission}</span>
                      </div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <span className="w-24">Kapasitas:</span>
                        <span className="font-medium">{car.seats} Penumpang</span>
                      </div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <span className="w-24">Bahan Bakar:</span>
                        <span className="font-medium">{car.fuel}</span>
                      </div>
                    </div>

                    <div className="border-t pt-4 flex items-center justify-between">
                      <div>
                        <div className="text-sm text-gray-500">Mulai dari</div>
                        <div className="text-2xl font-bold text-primary-600">
                          Rp {car.price}
                        </div>
                        <div className="text-xs text-gray-500">per hari</div>
                      </div>
                      <Link
                        href={`/mobil/${car.id}`}
                        className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition font-medium"
                      >
                        Detail
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                Tidak ada mobil yang sesuai dengan filter Anda
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("Semua");
                  setSelectedTransmission("Semua");
                  setPriceRange("Semua");
                }}
                className="mt-4 text-primary-600 hover:text-primary-700 font-medium"
              >
                Reset Filter
              </button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
}
