import Link from "next/link";

const cars = [
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
];

export default function FeaturedCars() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Mobil Pilihan Kami
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Pilih dari berbagai jenis mobil berkualitas dengan harga terjangkau untuk perjalanan Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
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

        <div className="text-center mt-12">
          <Link
            href="/mobil"
            className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition font-semibold"
          >
            Lihat Semua Mobil
          </Link>
        </div>
      </div>
    </section>
  );
}
