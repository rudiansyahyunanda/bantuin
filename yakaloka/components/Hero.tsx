import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Rental Mobil Terpercaya di Indonesia
            </h1>
            <p className="text-lg md:text-xl text-primary-100">
              Nikmati perjalanan Anda dengan armada mobil berkualitas, harga terjangkau, dan pelayanan terbaik dari YAKALOKA
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/mobil"
                className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition text-center"
              >
                Lihat Daftar Mobil
              </Link>
              <Link
                href="/kontak"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition text-center"
              >
                Hubungi Kami
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold">500+</div>
                  <div className="text-primary-100 mt-2">Pelanggan Puas</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold">50+</div>
                  <div className="text-primary-100 mt-2">Armada Mobil</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold">24/7</div>
                  <div className="text-primary-100 mt-2">Layanan</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold">5★</div>
                  <div className="text-primary-100 mt-2">Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
