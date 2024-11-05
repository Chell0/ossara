"use client";


import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {archiveData, categories, newsData} from "../../../data";

export default function NewsPage() {
    const [showNeuigkeiten, setShowNeuigkeiten] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const allNews = showNeuigkeiten ? newsData : archiveData;

    const filteredNews = allNews
        .filter((news) => !selectedCategory || news.category === selectedCategory)
        .filter((news) =>
            news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            news.content.toLowerCase().includes(searchQuery.toLowerCase())
        );

    const pageCount = Math.ceil(filteredNews.length / itemsPerPage);
    const paginatedNews = filteredNews.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    useEffect(() => {
        setCurrentPage(1); // Reset to first page on category or search change
    }, [selectedCategory, searchQuery, showNeuigkeiten]);

    return (
        <div className="min-h-screen p-8 bg-gray-100">
            <div
                className="flex flex-col items-center justify-center text-center mx-4 sm:mx-10 py-10 sm:py-20 bg-teal-600 rounded-lg shadow-lg">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">News</h1>
            </div>

            {/* Toggle Buttons */}
            <div className="flex justify-center space-x-4 my-20">
                <button
                    onClick={() => {
                        setShowNeuigkeiten(true);
                        setSelectedCategory(null);
                    }}
                    className={`px-4 py-2 font-semibold ${showNeuigkeiten ? 'bg-teal-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                >
                    Neuigkeiten
                </button>
                <button
                    onClick={() => {
                        setShowNeuigkeiten(false);
                        setSelectedCategory(null);
                    }}
                    className={`px-4 py-2 font-semibold ${!showNeuigkeiten ? 'bg-teal-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                >
                    Neuigkeiten Archive
                </button>

                {/* Category Dropdown */}
                <select
                    onChange={(e) => setSelectedCategory(e.target.value || null)}
                    className="px-4 py-2 border rounded bg-white"
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
                    className="px-4 py-2 border rounded"
                />
            </div>

            {/* News Items */}
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {paginatedNews.length > 0 ? (
                    paginatedNews.map((news) => (
                        <motion.div
                            key={news.id}
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.3}}
                            className="p-4 bg-white rounded-lg shadow-lg overflow-hidden"
                        >
                            {/* News Image */}
                            <img src={news.image} alt={news.title} className="w-full h-40 object-cover mb-4"/>

                            {/* News Content */}
                            <h2 className="text-xl font-bold mb-2">{news.title}</h2>
                            <p className="text-gray-500 text-sm mb-2">{news.date}</p>
                            <p className="text-gray-700 mb-4">{news.content}</p>
                            <p className="text-blue-600 font-medium">Category: {news.category}</p>
                        </motion.div>
                    ))
                ) : (
                    <p className="col-span-full text-center text-gray-600">No news available in this category.</p>
                )}
            </motion.div>

            {/* Pagination Controls */}
            <div className="flex justify-center mt-8">
                {Array.from({length: pageCount}, (_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(index + 1)}
                        className={`px-3 py-1 mx-1 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}
