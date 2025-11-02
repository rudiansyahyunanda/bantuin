export default function Services() {
  const services = [
    {
      title: "Harga Terjangkau",
      description: "Dapatkan harga rental mobil terbaik dengan berbagai pilihan paket yang sesuai dengan budget Anda",
    },
    {
      title: "Armada Terawat",
      description: "Semua mobil kami dalam kondisi prima dan terawat dengan baik untuk kenyamanan perjalanan Anda",
    },
    {
      title: "Layanan 24/7",
      description: "Tim customer service kami siap melayani Anda kapan saja, 24 jam sehari 7 hari seminggu",
    },
    {
      title: "Proses Mudah",
      description: "Booking online yang mudah dan cepat, tanpa ribet dengan dokumen yang minimal",
    },
    {
      title: "Sopir Profesional",
      description: "Tersedia pilihan dengan sopir profesional yang berpengalaman dan ramah (opsional)",
    },
    {
      title: "Asuransi Lengkap",
      description: "Semua mobil dilengkapi dengan asuransi untuk keamanan dan kenyamanan Anda",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Mengapa Memilih YAKALOKA?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Kami berkomitmen memberikan layanan rental mobil terbaik dengan berbagai keunggulan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border-2 border-gray-100 hover:border-primary-600 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-primary-600 rounded"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
