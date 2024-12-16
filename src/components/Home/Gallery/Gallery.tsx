import Image from "next/image";

export default function Gallery() {
  const images = [
    { src: "/gallery/img-1.jpg", text: "ÜBER UNS" },
    {
      src: "/gallery/img-2.jpg",
      text: "ANTI-SCHWARZEN RASSISMUS, BENENNEN, ANALYSIEREN, BEKÄMPEN",
    },
    { src: "/gallery/img-3.jpg", text: "JUNGE MENSCHEN" },
    { src: "/gallery/img-4.jpg", text: "LITERATUR UND KULTUR" },
    { src: "/gallery/img-5.jpg", text: "LEADERSHIP & ADVOCACY" },
    {
      src: "/gallery/img-6.jpg",
      text: "ANTIDISKRIMINIE-RUNGSBERATUNG /-MONITORING",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative w-full h-48 overflow-hidden shadow-xl group sm:h-64 rounded-xl"
          >
            <Image
              fill={true}
              src={image.src}
              alt={`Image ${index + 1}`}
              className="object-cover w-full h-full transition-transform duration-300 transform group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100">
              <p className="p-2 font-bold text-left text-white text-md">
                {image.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
