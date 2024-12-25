"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { archiveData, categories, newsData } from "../../../data";

export default function Neuigkeiten() {
  const [showNeuigkeiten, setShowNeuigkeiten] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const allNews = showNeuigkeiten ? newsData : archiveData;

  const filteredNews = allNews
    .filter((news) => !selectedCategory || news.category === selectedCategory)
    .filter(
      (news) =>
        news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        news.content.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const pageCount = Math.ceil(filteredNews.length / itemsPerPage);
  const paginatedNews = filteredNews.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    setCurrentPage(1); // Reset to first page on category or search change
  }, [selectedCategory, searchQuery, showNeuigkeiten]);

  return (
    <>
      <section className="container p-6 mx-auto mt-10">
        {/* Toggle Buttons */}
        <div className="flex flex-wrap justify-center gap-4 my-10">
          <button
            onClick={() => {
              setShowNeuigkeiten(true);
              setSelectedCategory(null);
            }}
            className={`px-4 py-2 sm:py-3 sm:text-base md:px-8 md:py-4 md:text-lg sm:w-auto font-semibold shadow-xl rounded-lg transition ${
              showNeuigkeiten
                ? "bg-[#ffb400] text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Neuigkeiten
          </button>
          <button
            onClick={() => {
              setShowNeuigkeiten(false);
              setSelectedCategory(null);
            }}
            className={`px-4 py-2 sm:py-3 sm:text-base md:px-8 md:py-4 md:text-lg sm:w-auto font-semibold shadow-xl rounded-lg transition ${
              !showNeuigkeiten
                ? "bg-[#ffb400] text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Neuigkeiten Archive
          </button>

          {/* Category Dropdown */}
          <select
            onChange={(e) => setSelectedCategory(e.target.value || null)}
            className="px-4 py-2 font-semibold transition rounded-lg shadow-xl sm:py-3 sm:text-base md:px-8 md:py-4 md:text-lg sm:w-auto bg-[#ffb400] text-white focus:outline-none focus:ring focus:ring-[#ffb400]"
            defaultValue=""
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>

          {/* Search Input */}
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 font-semibold transition border text-gray-600 rounded-lg shadow-xl sm:py-3 sm:text-base md:px-8 md:py-4 md:text-lg sm:w-auto focus:outline-none focus:ring focus:ring-[#ffb400]"
          />
        </div>

        {/* News Items */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-8"
        >
          {paginatedNews.length > 0 ? (
            paginatedNews.map((news) => (
              <motion.div
                key={news.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden bg-white shadow-md rounded-xl shadow-gray-400"
              >
                <div className={`h-64 w-full bg-gray-200`}>
                  {/* News Image */}
                  <Image
                    src={news.image}
                    alt={news.title}
                    width={400}
                    height={400}
                    quality={100}
                    className="object-cover object-center"
                  />
                </div>

                {/* News Content */}
                <div className="p-4 mt-20">
                  <h3 className="mt-10 font-bold text-[#ffb400] text-lg">
                    {news.title}
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-gray-800">
                    {news.date}
                  </p>
                  <p className="pt-2 text-sm text-gray-800 line-clamp-3">
                    {news.content}
                  </p>
                  {/* <p className="pt-2 text-base font-bold text-blue-500">
                    Category: {news.category}
                  </p> */}
                  <p className="mt-2 text-base">
                    <button className="px-2 py-1 font-semibold text-white rounded-lg bg-[#ffb400]">
                      <Link href={news.mehr}>Mehr lesen...</Link>
                    </button>
                  </p>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-lg font-bold text-center text-gray-600 col-span-full">
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
                  ? "bg-[#ffb400] text-white"
                  : "bg-gray-300 text-gray-700"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </section>
    </>
  );
}
