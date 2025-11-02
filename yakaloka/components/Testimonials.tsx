export default function Testimonials() {
  const testimonials = [
    {
      name: "Budi Santoso",
      location: "Jakarta",
      rating: 5,
      comment: "Pelayanan sangat memuaskan! Mobil bersih dan terawat. Proses booking juga mudah dan cepat. Sangat recommended!",
    },
    {
      name: "Siti Nurhaliza",
      location: "Bandung",
      rating: 5,
      comment: "Harga terjangkau dengan kualitas mobil yang bagus. Sopirnya juga ramah dan profesional. Pasti akan sewa lagi!",
    },
    {
      name: "Ahmad Rizki",
      location: "Surabaya",
      rating: 5,
      comment: "Pengalaman rental mobil terbaik yang pernah saya alami. Customer service responsif dan membantu. Terima kasih YAKALOKA!",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Testimoni Pelanggan
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Dengarkan pengalaman pelanggan kami yang telah menggunakan layanan YAKALOKA
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed italic">
                &quot;{testimonial.comment}&quot;
              </p>
              <div className="border-t pt-4">
                <div className="font-bold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
