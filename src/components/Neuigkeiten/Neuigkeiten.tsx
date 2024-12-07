"use client"

import { motion } from "framer-motion";
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
        <>
            <section className="container p-6 mx-auto mt-20">
                {/* Toggle Buttons */}
                <div className="flex flex-wrap justify-center my-10 gap-4">
                    <button
                        onClick={() => {
                            setShowNeuigkeiten(true);
                            setSelectedCategory(null);
                        }}
                        className={`px-4 py-2 w-full sm:w-auto font-semibold rounded-lg ${showNeuigkeiten ? 'bg-blended-gradient text-white' : 'bg-gray-200 text-gray-700'}`}
                    >
                        Neuigkeiten
                    </button>
                    <button
                        onClick={() => {
                            setShowNeuigkeiten(false);
                            setSelectedCategory(null);
                        }}
                        className={`px-4 py-2 w-full sm:w-auto font-semibold rounded-lg ${!showNeuigkeiten ? 'bg-blended-gradient text-white' : 'bg-gray-200 text-gray-700'}`}
                    >
                        Neuigkeiten Archive
                    </button>

                    {/* Category Dropdown */}
                    <select
                        onChange={(e) => setSelectedCategory(e.target.value || null)}
                        className="w-full px-4 py-2 text-white border rounded-lg sm:w-auto bg-blended-gradient"
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
                        className="w-full px-4 py-2 border rounded-lg sm:w-auto"
                    />
                </div>

                {/* News Items */}
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8"
                >
                    {paginatedNews.length > 0 ? (
                        paginatedNews.map((news) => (
                            <motion.div
                                key={news.id}
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.3}}
                                className="overflow-hidden bg-white shadow-md rounded-xl shadow-gray-400"
                            >
                                <div className={`h-44 w-full bg-gray-200`}>
                                    {/* News Image */}
                                    <img src={news.image} alt={news.title} className="object-cover w-full h-full"/>
                                </div>

                                {/* News Content */}
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-orange-600">{news.title}</h3>
                                    <p className="text-sm font-semibold text-gray-800">{news.date}</p>
                                    <p className="text-sm text-gray-700">{news.content}</p>
                                    <p className="text-sm font-semibold text-blue-500">Category: {news.category}</p>
                                </div>
                            </motion.div>
                        ))
                    ) : (
                        <p className="text-lg font-bold text-center text-gray-600 col-span-full">Unfortunately, no news
                            available in this category.</p>
                    )}
                </motion.div>

                {/* Pagination Controls */}
                <div className="flex justify-center mt-8">
                    {Array.from({length: pageCount}, (_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentPage(index + 1)}
                            className={`px-3 py-1 mx-1 rounded ${currentPage === index + 1 ? 'bg-blended-gradient text-white' : 'bg-gray-200 text-gray-700'}`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </section>
        </>
    );
}
