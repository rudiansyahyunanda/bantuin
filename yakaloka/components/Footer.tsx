import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">YAKALOKA</h3>
            <p className="text-gray-400 leading-relaxed">
              Layanan rental mobil terpercaya dengan armada lengkap dan harga terjangkau di seluruh Indonesia.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Menu</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/mobil" className="text-gray-400 hover:text-white transition">
                  Daftar Mobil
                </Link>
              </li>
              <li>
                <Link href="/tentang" className="text-gray-400 hover:text-white transition">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="text-gray-400 hover:text-white transition">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Layanan</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Rental Harian</li>
              <li className="text-gray-400">Rental Mingguan</li>
              <li className="text-gray-400">Rental Bulanan</li>
              <li className="text-gray-400">Dengan Sopir</li>
              <li className="text-gray-400">Lepas Kunci</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak Kami</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Jl. Raya Rental No. 123</li>
              <li>Jakarta, Indonesia</li>
              <li className="pt-2">
                <a href="tel:+6281234567890" className="hover:text-white transition">
                  +62 812-3456-7890
                </a>
              </li>
              <li>
                <a href="mailto:info@yakaloka.com" className="hover:text-white transition">
                  info@yakaloka.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; 2025 YAKALOKA. Hak Cipta Dilindungi.
            </p>
            <div className="flex space-x-6">
              <Link href="/syarat-ketentuan" className="text-gray-400 hover:text-white text-sm transition">
                Syarat & Ketentuan
              </Link>
              <Link href="/kebijakan-privasi" className="text-gray-400 hover:text-white text-sm transition">
                Kebijakan Privasi
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
