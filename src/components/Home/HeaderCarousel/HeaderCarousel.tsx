"use client";

import { useState } from "react";
import Image from "next/image";

const images = [
  {
    src: "/cara/img-1.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum accumsan fermentum. Pellentesque suscipit vestibulum est eget scelerisque. Nunc faucibus lacus sed nibh fermentum lobortis. Vestibulum risus urna, feugiat ut sem a, condimentum rhoncus nunc. Curabitur vehicula venenatis ipsum vel bibendum. Sed vitae erat ipsum. Maecenas malesuada nisl at congue vehicula.",
  },
  {
    src: "/cara/img-2.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum accumsan fermentum. Pellentesque suscipit vestibulum est eget scelerisque. Nunc faucibus lacus sed nibh fermentum lobortis. Vestibulum risus urna, feugiat ut sem a, condimentum rhoncus nunc. Curabitur vehicula venenatis ipsum vel bibendum. Sed vitae erat ipsum. Maecenas malesuada nisl at congue vehicula.",
  },
  {
    src: "/cara/img-3.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum accumsan fermentum. Pellentesque suscipit vestibulum est eget scelerisque. Nunc faucibus lacus sed nibh fermentum lobortis. Vestibulum risus urna, feugiat ut sem a, condimentum rhoncus nunc. Curabitur vehicula venenatis ipsum vel bibendum. Sed vitae erat ipsum. Maecenas malesuada nisl at congue vehicula.",
  },
  {
    src: "/cara/img-4.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum accumsan fermentum. Pellentesque suscipit vestibulum est eget scelerisque. Nunc faucibus lacus sed nibh fermentum lobortis. Vestibulum risus urna, feugiat ut sem a, condimentum rhoncus nunc. Curabitur vehicula venenatis ipsum vel bibendum. Sed vitae erat ipsum. Maecenas malesuada nisl at congue vehicula.",
  },
  {
    src: "/cara/img-5.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum accumsan fermentum. Pellentesque suscipit vestibulum est eget scelerisque. Nunc faucibus lacus sed nibh fermentum lobortis. Vestibulum risus urna, feugiat ut sem a, condimentum rhoncus nunc. Curabitur vehicula venenatis ipsum vel bibendum. Sed vitae erat ipsum. Maecenas malesuada nisl at congue vehicula.",
  },
  {
    src: "/cara/img-6.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum accumsan fermentum. Pellentesque suscipit vestibulum est eget scelerisque. Nunc faucibus lacus sed nibh fermentum lobortis. Vestibulum risus urna, feugiat ut sem a, condimentum rhoncus nunc. Curabitur vehicula venenatis ipsum vel bibendum. Sed vitae erat ipsum. Maecenas malesuada nisl at congue vehicula.",
  },
];

export default function HeaderCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Previous Slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };
  // Next Slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <>
      <div>
        <header className="relative w-full h-screen overflow-hidden">
          {/* Carousel Images */}
          <div className="flex w-full h-full transition-transform duration-500">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 w-full h-full ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                } transition-opacity duration-700`}
              >
                <Image
                  src={image.src}
                  fill
                  alt={`Slide ${index + 1}`}
                  className="object-cover"
                  priority={index === currentIndex}
                />
                {/* Description Box */}
                <div className="absolute p-5 m-10 text-base text-gray-800 rounded-lg bottom-10 right-4 bg-main-bg/90 backdrop-blur-sm">
                  {image.description}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute p-3 text-white transform -translate-y-1/2 bg-black/50 top-1/2 left-4 rounded-xl hover:bg-black/75"
          >
            &#8592;
          </button>
          <button
            onClick={nextSlide}
            className="absolute p-3 text-white transform -translate-y-1/2 bg-black/50 top-1/2 right-4 rounded-xl hover:bg-black/75"
          >
            &#8594;
          </button>
        </header>
      </div>
    </>
  );
}
