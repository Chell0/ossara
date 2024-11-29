import Image from "next/image";

export default function Gallery() {
    const images = [
        {src: '/gallery/img-1.jpg', text: 'ÜBER UNS'},
        {src: '/gallery/img-2.jpg', text: 'ANTI-SCHWARZEN RASSISMUS, BENENNEN, ANALYSIEREN, BEKÄMPEN'},
        {src: '/gallery/img-3.jpg', text: 'JUNGE MENSCHEN'},
        {src: '/gallery/img-4.jpg', text: 'LITERATUR UND KULTUR'},
        {src: '/gallery/img-5.jpg', text: 'LEADERSHIP & ADVOCACY'},
        {src: '/gallery/img-6.jpg', text: 'ANTIDISKRIMINIE-RUNGSBERATUNG /-MONITORING'},
    ];

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="relative group w-full h-48 sm:h-64 overflow-hidden rounded-xl shadow-xl"
                    >
                        <Image
                            fill={true}
                            src={image.src}
                            alt={`Image ${index + 1}`}
                            className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                        />
                        <div
                            className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <p className="text-white text-lg text-left p-2 font-bold">{image.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};
