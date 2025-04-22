"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { archiveData, newsData } from "../../../data";

export default function Neuigkeiten() {
  const [showNeuigkeiten, setShowNeuigkeiten] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const allNews = showNeuigkeiten ? newsData : archiveData;
  const pageCount = Math.ceil(allNews.length / itemsPerPage);
  const paginatedNews = allNews.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  useEffect(() => {
    setCurrentPage(1); // Reset to first page when switching tabs
  }, [showNeuigkeiten]);

  return (
    <>
      <div>
        {/* Header Section */}
        <header className="relative w-full min-h-screen">
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/images/Neuigkeiten/OSSARA_Arbeitssituation.jpg"
              fill
              alt="Home Page Header image"
              className="object-cover"
              priority
              sizes="(max-width: 319px) 100vw, (max-width: 424px) 100vw, (max-width: 767px) 100vw, (max-width: 1023px) 100vw, (max-width: 1279px) 100vw, (max-width: 1439px) 100vw, (max-width: 2559px) 100vw, 100vw"
            />
          </div>
          {/* Text Content */}
          <div className="absolute bottom-4 left-4 xs:bottom-5 xs:left-5 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8 lg:bottom-section lg:left-section xl:bottom-section-lg xl:left-section-lg">
            <div className="space-y-2 xs:space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8 xl:space-y-10 2xl:space-y-12">
              <h1
                className="text-[#eb7b24] text-3xl font-extrabold leading-[1.1] uppercase
        xs:text-4xl
        xs2:text-5xl
        sm:text-6xl
        md:text-7xl
        lg:text-8xl
        xl:text-9xl
        2xl:text-[140px]
        3xl:text-[160px]"
              >
                <span className="block">Neuigkeiten.</span>
              </h1>
            </div>
          </div>
        </header>

        {/* News Section */}
        <section className="min-h-screen w-full">
          <div className="container mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 py-section">
            {/* Toggle Buttons */}
            <div className="flex flex-wrap justify-center gap-4 xs:gap-5 sm:gap-6 md:gap-8 my-section">
              <button
                onClick={() => setShowNeuigkeiten(true)}
                className={`px-4 py-2 xs:px-5 xs:py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 text-sm xs:text-sm sm:text-base md:text-lg lg:text-xl shadow-md rounded-2xl transition ${
                  showNeuigkeiten
                    ? "bg-[#eb7b24] text-white"
                    : "bg-gray-200 text-[#eb7b24]"
                }`}
              >
                Neuigkeiten
              </button>
              <button
                onClick={() => setShowNeuigkeiten(false)}
                className={`px-4 py-2 xs:px-5 xs:py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 text-sm xs:text-sm sm:text-base md:text-lg lg:text-xl shadow-md rounded-2xl transition ${
                  !showNeuigkeiten
                    ? "bg-[#eb7b24] text-white"
                    : "bg-gray-200 text-[#eb7b24]"
                }`}
              >
                Neuigkeiten Archive
              </button>
            </div>

            {/* News Items */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-6 xs:gap-8 sm:gap-10 md:gap-12 lg:gap-section xl:gap-section-lg"
            >
              {paginatedNews.length > 0 ? (
                paginatedNews.map((news) => (
                  <motion.div
                    key={news.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="group block overflow-hidden transition-shadow duration-200"
                  >
                    {/* Image + yellow badge */}
                    <div className="relative w-full aspect-[4/3]">
                      <Image
                        src={news.image}
                        alt={news.title}
                        fill
                        quality={100}
                        className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                      />
                      <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-yellow-300 text-xs xs:text-xs sm:text-sm md:text-base lg:text-lg px-4 xs:px-5 sm:px-6 md:px-8 py-1 xs:py-1.5 sm:py-2 md:py-2.5">
                        {news.category || "News"}
                      </span>
                    </div>

                    {/* Title & Date */}
                    <div className="pt-6 xs:pt-8 sm:pt-10 md:pt-12 lg:pt-section pb-4 xs:pb-5 sm:pb-6 md:pb-8">
                      <h3 className="text-base xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-snug text-gray-900 line-clamp-2">
                        <Link href={news.mehr}>{news.title}</Link>
                      </h3>
                      <time className="mt-2 block text-xs xs:text-xs sm:text-sm md:text-base lg:text-lg text-gray-500">
                        {news.date}
                      </time>
                    </div>
                  </motion.div>
                ))
              ) : (
                <p className="text-base xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-center text-gray-800 col-span-full">
                  Leider sind derzeit keine Neuigkeiten verfügbar.
                </p>
              )}
            </motion.div>

            {/* Pagination Controls */}
            <div className="flex justify-center mt-section">
              {Array.from({ length: pageCount }, (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`px-2 py-1 xs:px-3 xs:py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 mx-1 font-bold shadow-xl rounded ${
                    currentPage === index + 1
                      ? "bg-[#eb7b24] text-white"
                      : "bg-gray-300 text-gray-700"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
