"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-primary-600">
              YAKALOKA
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition">
              Beranda
            </Link>
            <Link href="/mobil" className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition">
              Daftar Mobil
            </Link>
            <Link href="/tentang" className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition">
              Tentang Kami
            </Link>
            <Link href="/kontak" className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition">
              Kontak
            </Link>
          </div>

          <div className="hidden md:block">
            <Link
              href="/mobil"
              className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition font-medium"
            >
              Sewa Sekarang
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block text-gray-700 hover:text-primary-600 hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Beranda
            </Link>
            <Link
              href="/mobil"
              className="block text-gray-700 hover:text-primary-600 hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Daftar Mobil
            </Link>
            <Link
              href="/tentang"
              className="block text-gray-700 hover:text-primary-600 hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Tentang Kami
            </Link>
            <Link
              href="/kontak"
              className="block text-gray-700 hover:text-primary-600 hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Kontak
            </Link>
            <Link
              href="/mobil"
              className="block bg-primary-600 text-white text-center px-3 py-2 rounded-md text-base font-medium hover:bg-primary-700"
              onClick={() => setIsOpen(false)}
            >
              Sewa Sekarang
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
