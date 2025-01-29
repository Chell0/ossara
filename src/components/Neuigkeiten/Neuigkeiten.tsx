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
      <div className="mx-auto">
        <header
          className="min-h-96  w-full bg-cover bg-center relative mb-10 p-10"
          style={{ backgroundImage: "url(/bgs/img1.jpg)" }}
        >
          <div
            className={`absolute top-0 left-0 right-0 inset-0 bg-black bg-opacity-60 flex items-start justify-start`}
          >
            <h1
              className={`text-[#eb7b24] drop-shadow-xl text-[8rem] font-extrabold leading-tight uppercase ml-10 mt-20`}
            >
              Neuigkeiten
            </h1>
          </div>
        </header>
        <section className="container p-6">
          {/* Toggle Buttons */}
          <div className="flex flex-wrap justify-center gap-4 my-10">
            <button
              onClick={() => {
                setShowNeuigkeiten(true);
                setSelectedCategory(null);
              }}
              className={`px-8 py-4 sm:px-4 sm:py-2 text-xl md:px-6 md:py-3 sm:w-auto shadow-md rounded-xl transition ${
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
              className={`px-8 py-4 sm:px-4 sm:py-2 text-xl md:px-6 md:py-3 sm:w-auto shadow-md rounded-xl transition ${
                !showNeuigkeiten
                  ? "bg-[#eb7b24] text-white"
                  : "bg-gray-200 text-[#eb7b24]"
              }`}
            >
              Neuigkeiten Archive
            </button>

            {/* Category Dropdown */}
            <div className="relative flex justify-center">
              <select
                onChange={(e) => setSelectedCategory(e.target.value || null)}
                className="bg-[#eb7b24] text-white text-lg py-3 px-8 shadow-md rounded-xl appearance-none w-full"
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
                ▾{" "}
              </div>
            </div>
          </div>

          {/* News Items */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 bg-[#fff6ea]"
          >
            {paginatedNews.length > 0 ? (
              paginatedNews.map((news) => (
                <motion.div
                  key={news.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="max-w-screen-lg h-[450px] overflow-hidden shadow-xl rounded-lg"
                >
                  <div className={`relative h-72 w-full`}>
                    {/* News Image */}
                    <Image
                      src={news.image}
                      alt={news.title}
                      fill
                      // width={260}
                      // height={260}
                      quality={100}
                      className="object-cover rounded-t-lg"
                    />
                  </div>

                  {/* News Content */}
                  <div className="p-5">
                    <h3 className="font-bold text-xl sm:text-base mb-3 text-gray-800 hover:underline">
                      <Link href={news.mehr}>{news.title}</Link>
                    </h3>
                    <p className="mb-2 text-sm font-semibold text-gray-800">
                      {news.date}
                    </p>
                    <p className="text-sm text-gray-800 line-clamp-2">
                      {news.content}
                    </p>
                    {/* <p className="pt-2 text-base font-bold text-blue-500">
                    Category: {news.category}
                  </p> */}
                    {/* <p className="mt-2 text-base">
                      <button className="px-2 py-1 font-semibold text-white rounded-lg bg-[#ffb400]">
                        <Link href={news.mehr}>Mehr lesen...</Link>
                      </button>
                    </p> */}
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
        </section>
      </div>
    </>
  );
}
