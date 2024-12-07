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
            <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="relative w-full h-48 overflow-hidden shadow-xl group sm:h-64 rounded-xl"
                    >
                        <Image
                            fill={true}
                            src={image.src}
                            alt={`Image ${index + 1}`}
                            className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-110"
                        />
                        <div
                            className="absolute inset-0 flex items-center justify-center bg-black opacity-0 bg-opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                            <p className="p-2 text-lg font-bold text-left text-white">{image.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};
