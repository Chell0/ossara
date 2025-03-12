"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { archiveData, categories, newsData } from "../../../data";

export default function Neuigkeiten() {
  const [showNeuigkeiten, setShowNeuigkeiten] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const allNews = showNeuigkeiten ? newsData : archiveData;

  const filteredNews = allNews.filter(
    (news) => !selectedCategory || news.category === selectedCategory,
  );

  const pageCount = Math.ceil(filteredNews.length / itemsPerPage);
  const paginatedNews = filteredNews.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  useEffect(() => {
    setCurrentPage(1); // Reset to first page on category change
  }, [selectedCategory, showNeuigkeiten]);

  return (
    <>
      <div>
        {/* Header Section */}
        <header
          className="h-screen w-full bg-cover bg-center relative p-4 sm:p-6 md:p-8 lg:p-10"
          style={{ backgroundImage: "url(/engagieren/engagieren.jpg)" }}
        >
          <div className="absolute top-0 left-0 right-0 inset-0 flex items-start justify-start">
            <h1 className="text-[#eb7b24] text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold leading-tight uppercase p-2 sm:p-4 md:p-6 lg:p-8 mt-2 sm:mt-4 md:mt-6 lg:mt-8">
              Neuigkeiten.
            </h1>
          </div>
        </header>

        {/* News Section */}
        <section className="min-h-screen w-full">
          <div className="container mx-auto p-4 sm:p-6 md:p-8">
            {/* Toggle Buttons */}
            <div className="flex flex-wrap justify-center gap-4 my-10">
              <button
                onClick={() => {
                  setShowNeuigkeiten(true);
                  setSelectedCategory(null);
                }}
                className={`px-6 py-3 sm:px-8 sm:py-4 text-lg sm:text-xl shadow-md rounded-xl transition ${
                  showNeuigkeiten
                    ? "bg-[#eb7b24] text-white"
                    : "bg-gray-200 text-[#eb7b24]"
                }`}
              >
                Neuigkeiten
              </button>
              <button
                onClick={() => {
                  setShowNeuigkeiten(false);
                  setSelectedCategory(null);
                }}
                className={`px-6 py-3 sm:px-8 sm:py-4 text-lg sm:text-xl shadow-md rounded-xl transition ${
                  !showNeuigkeiten
                    ? "bg-[#eb7b24] text-white"
                    : "bg-gray-200 text-[#eb7b24]"
                }`}
              >
                Neuigkeiten Archive
              </button>

              {/* Category Dropdown */}
              <div className="relative w-full sm:w-auto">
                <select
                  onChange={(e) => setSelectedCategory(e.target.value || null)}
                  className="bg-[#eb7b24] text-white text-lg py-3 px-8 shadow-md rounded-xl appearance-none w-full sm:w-auto"
                >
                  <option value="">Alle Kategorien</option>
                  {categories.map((category) => (
                    <option
                      key={category.id}
                      value={category.name}
                      className="text-[#eb7b24] text-md bg-[#fff6ea] py-5"
                    >
                      {category.name}
                    </option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-white font-semibold text-xl">
                  ▾
                </div>
              </div>
            </div>

            {/* News Items */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"
            >
              {paginatedNews.length > 0 ? (
                paginatedNews.map((news) => (
                  <motion.div
                    key={news.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-auto overflow-hidden shadow-xl rounded-lg"
                  >
                    <div className="relative h-48 sm:h-56 w-full">
                      <Image
                        src={news.image}
                        alt={news.title}
                        fill
                        quality={100}
                        className="object-cover rounded-t-lg"
                      />
                    </div>

                    <div className="p-4 sm:p-5">
                      <h3 className="font-bold text-lg sm:text-xl mb-2 text-gray-800 hover:underline">
                        <Link href={news.mehr}>{news.title}</Link>
                      </h3>
                      <p className="mb-2 text-sm font-semibold text-gray-800">
                        {news.date}
                      </p>
                      <p className="text-sm text-gray-800 line-clamp-3">
                        {news.content}
                      </p>
                    </div>
                  </motion.div>
                ))
              ) : (
                <p className="text-xl font-bold text-center text-gray-800 col-span-full">
                  Unfortunately, no news available in this category.
                </p>
              )}
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
