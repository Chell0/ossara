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
        <header className="relative w-full h-[100dvh]">
          {/* Backgruond Image */}
          <div className="relative inset-0 w-full h-full">
            <Image
              src="/images/Neuigkeiten/OSSARA_Arbeitssituation.jpg"
              fill
              alt="Home Page Header image"
              className="object-cover"
              priority
              sizes="(max-width: 320px) 100vw, (max-width: 2560px) 100vw, 100vw"
            />
          </div>
          {/* Text Content */}
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 lg:bottom-10 lg:left-10 xl:bottom-section xl:left-section 2xl:left-section">
            <div className="space-y-2 xs:space-y-2.5 sm:space-y-3 md:space-y-4 lg:space-y-6 xl:space-y-7 2xl:space-y-8">
              <h1
                className="text-[#eb7b24] text-3xl font-bold leading-[1.1] uppercase
              xs:text-5xl
              sm:text-6xl
              md:text-8xl
              lg:text-9xl
              xl:text-[140px]
              2xl:text-[160px]
              3xl:text-[200px]"
              >
                <span className="block">Neuigkeiten.</span>
              </h1>
            </div>
          </div>
        </header>

        {/* News Section */}
        <section className="min-h-screen w-full">
          <div className="container mx-auto p-4 sm:p-6 md:p-8">
            {/* Toggle Buttons */}
            <div className="flex flex-wrap justify-center gap-4 my-10">
              <button
                onClick={() => setShowNeuigkeiten(true)}
                className={`px-6 py-3 sm:px-8 sm:py-4 text-lg sm:text-xl shadow-md rounded-xl transition ${
                  showNeuigkeiten
                    ? "bg-[#eb7b24] text-white"
                    : "bg-gray-200 text-[#eb7b24]"
                }`}
              >
                Neuigkeiten
              </button>
              <button
                onClick={() => setShowNeuigkeiten(false)}
                className={`px-6 py-3 sm:px-8 sm:py-4 text-lg sm:text-xl shadow-md rounded-xl transition ${
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
              className="container mx-auto px-4 py-8"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {paginatedNews.length > 0 ? (
                  paginatedNews.map((news) => (
                    <motion.div
                      key={news.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="group block overflow-hidden hover:shadow-md transition-shadow duration-200"
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
                        <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-yellow-300 text-sm uppercase font-semibold px-8 py-2">
                          {news.category || "News"}
                        </span>
                      </div>

                      {/* Title & Date */}
                      <div className="pt-8 pb-6">
                        <h3 className="text-xl font-bold leading-snug text-gray-900 line-clamp-2">
                          <Link href={news.mehr}>{news.title}</Link>
                        </h3>
                        <time className="mt-2 block text-sm text-gray-500">
                          {news.date}
                        </time>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <p className="text-xl font-bold text-center text-gray-800 col-span-full">
                    Leider sind derzeit keine Neuigkeiten verfügbar.
                  </p>
                )}
              </div>
            </motion.div>

            {/* Pagination Controls */}
            <div className="flex justify-center mt-8">
              {Array.from({ length: pageCount }, (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`px-3 py-1 mx-1 font-bold shadow-xl rounded ${
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
