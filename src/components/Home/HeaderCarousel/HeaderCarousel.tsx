"use client"

import Image from "next/image";
import { useState } from "react";



const images = [
    { src: "/cara/img-1.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum accumsan fermentum. Pellentesque suscipit vestibulum est eget scelerisque. Nunc faucibus lacus sed nibh fermentum lobortis. Vestibulum risus urna, feugiat ut sem a, condimentum rhoncus nunc. Curabitur vehicula venenatis ipsum vel bibendum. Sed vitae erat ipsum. Maecenas malesuada nisl at congue vehicula." },
    { src: "/cara/img-2.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum accumsan fermentum. Pellentesque suscipit vestibulum est eget scelerisque. Nunc faucibus lacus sed nibh fermentum lobortis. Vestibulum risus urna, feugiat ut sem a, condimentum rhoncus nunc. Curabitur vehicula venenatis ipsum vel bibendum. Sed vitae erat ipsum. Maecenas malesuada nisl at congue vehicula." },
    { src: "/cara/img-3.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum accumsan fermentum. Pellentesque suscipit vestibulum est eget scelerisque. Nunc faucibus lacus sed nibh fermentum lobortis. Vestibulum risus urna, feugiat ut sem a, condimentum rhoncus nunc. Curabitur vehicula venenatis ipsum vel bibendum. Sed vitae erat ipsum. Maecenas malesuada nisl at congue vehicula." },
    { src: "/cara/img-4.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum accumsan fermentum. Pellentesque suscipit vestibulum est eget scelerisque. Nunc faucibus lacus sed nibh fermentum lobortis. Vestibulum risus urna, feugiat ut sem a, condimentum rhoncus nunc. Curabitur vehicula venenatis ipsum vel bibendum. Sed vitae erat ipsum. Maecenas malesuada nisl at congue vehicula." },
    { src: "/cara/img-5.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum accumsan fermentum. Pellentesque suscipit vestibulum est eget scelerisque. Nunc faucibus lacus sed nibh fermentum lobortis. Vestibulum risus urna, feugiat ut sem a, condimentum rhoncus nunc. Curabitur vehicula venenatis ipsum vel bibendum. Sed vitae erat ipsum. Maecenas malesuada nisl at congue vehicula." },
    { src: "/cara/img-6.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum accumsan fermentum. Pellentesque suscipit vestibulum est eget scelerisque. Nunc faucibus lacus sed nibh fermentum lobortis. Vestibulum risus urna, feugiat ut sem a, condimentum rhoncus nunc. Curabitur vehicula venenatis ipsum vel bibendum. Sed vitae erat ipsum. Maecenas malesuada nisl at congue vehicula." },
];


export default function HeaderCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Previous Slide
    const prevSlide = () => { setCurrentIndex((prevIndex) => prevIndex === 0 ? images.length - 1 : prevIndex - 1); };
    // Next Slide
    const nextSlide = () => { setCurrentIndex((prevIndex) => prevIndex === images.length - 1 ? 0 : prevIndex + 1); };

    return(
        <>
        <header className="relative w-full h-screen overflow-hidden">
            {/* Carousel Images */}
            <div className="w-full h-full flex transition-transform duration-500">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute w-full h-full ${ index === currentIndex ? "opacity-100" : "opacity-0" } transition-opacity duration-700`}
                    >
                        <Image src={image.src} fill={true} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
                        {/* Description Box */}
                        <div className="absolute bottom-10 right-4 bg-main-bg bg-opacity-90 text-gray-700 text-sm p-5 m-10 rounded">{image.description}</div>
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button onClick={prevSlide} className="absolute bottom-4 right-20 bg-black bg-opacity-50 text-white rounded-3xl p-2 hover:bg-opacity-75">
                &#8592;
            </button>
            <button onClick={nextSlide} className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white rounded-3xl p-2 hover:bg-opacity-75">
                &#8594;
            </button>
        </header>
        </>
    );
}
