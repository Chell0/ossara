"use client";

import Link from "next/link";
import { useState } from "react";

type Event = {
  id: number;
  title: string;
  type: string;
  date: string; // Format: 'YYYY-MM-DD'
  time: string;
  link: string;
  description: string;
  imageUrl: string;
};

const eventsData: Event[] = [
  {
    id: 1,
    title: "Empowering Communities through Education",
    type: "Workshop",
    date: "2024-12-28",
    time: "10:00 AM",
    link: "https://ossara.org/register",
    description:
      "A workshop focused on the importance of education in community empowerment. Learn strategies and tools to foster educational growth and cultural exchange, with a focus on Ossara e.V.'s initiatives in Togo.",
    imageUrl: "/news/img.jpg",
  },
  {
    id: 2,
    title: "Health Awareness Seminar",
    type: "Seminar",
    date: "2024-12-26",
    time: "9:00 AM",
    link: "https://ossara.org/register",
    description:
      "Join us for a seminar aimed at promoting health awareness and preventive care in underserved communities. This event highlights Ossara e.V.'s work to improve health outcomes in regions like Kara and Defalé.",
    imageUrl: "/news/img.jpg",
  },
  {
    id: 3,
    title: "Educational Workshop on Cultural Diversity",
    type: "Workshop",
    date: "2024-12-21",
    time: "2:00 PM",
    link: "https://ossara.org/register",
    description:
      "Explore the importance of cultural diversity and inclusion in community development, especially in Togo.",
    imageUrl: "/news/img.jpg",
  },
  {
    id: 4,
    title: "Health and Wellness Training",
    type: "Training",
    date: "2024-12-18",
    time: "10:00 AM",
    link: "https://ossara.org/register",
    description:
      "A training session focused on promoting health awareness and preventive healthcare practices.",
    imageUrl: "/news/img.jpg",
  },
  {
    id: 5,
    title: "Digital Skills Workshop",
    type: "Workshop",
    date: "2024-12-10",
    time: "9:00 AM",
    link: "https://ossara.org/register",
    description:
      "Learn essential digital skills to boost employability and educational opportunities in underserved regions.",
    imageUrl: "/news/img.jpg",
  },
  {
    id: 6,
    title: "Community Building and Engagement",
    type: "Workshop",
    date: "2024-11-02",
    time: "1:00 PM",
    link: "https://ossara.org/register",
    description:
      "A workshop aimed at enhancing community engagement and sustainable development practices.",
    imageUrl: "/news/img.jpg",
  },
  {
    id: 7,
    title: "Cultural Heritage Preservation Training",
    type: "Training",
    date: "2024-10-27",
    time: "10:00 AM",
    link: "https://ossara.org/register",
    description:
      "Training on the preservation of cultural heritage, with a focus on Togo's unique traditions and practices.",
    imageUrl: "/news/img.jpg",
  },
  {
    id: 8,
    title: "Basic First Aid Training",
    type: "Training",
    date: "2024-10-20",
    time: "11:00 AM",
    link: "https://ossara.org/register",
    description:
      "An essential training session on first aid practices for local community members.",
    imageUrl: "/news/img.jpg",
  },
  {
    id: 9,
    title: "Financial Literacy Workshop",
    type: "Workshop",
    date: "2024-10-15",
    time: "3:00 PM",
    link: "https://ossara.org/register",
    description:
      "Learn basic financial literacy skills to promote economic empowerment in local communities.",
    imageUrl: "/news/img.jpg",
  },
  {
    id: 10,
    title: "Women’s Health and Empowerment Workshop",
    type: "Workshop",
    date: "2024-10-11",
    time: "1:00 PM",
    link: "https://ossara.org/register",
    description:
      "A workshop focusing on women’s health and empowerment, covering topics such as reproductive health and leadership.",
    imageUrl: "/news/img.jpg",
  },
  {
    id: 11,
    title: "Sustainable Agriculture Practices Training",
    type: "Training",
    date: "2024-10-05",
    time: "9:00 AM",
    link: "https://ossara.org/register",
    description:
      "A training program on sustainable agriculture practices to enhance food security in rural areas.",
    imageUrl: "/news/img.jpg",
  },
];

const formatDate = (date: string) => new Date(date).toLocaleDateString();

export default function Veranstaltungen() {
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTermArchived, setSearchTermArchived] = useState("");

  const currentDate = new Date();

  // Separate current and future events from past events
  const currentAndFutureEvents = eventsData.filter(
    (event) => new Date(event.date) >= currentDate
  );
  const pastEvents = eventsData.filter(
    (event) => new Date(event.date) < currentDate
  );

  // Sort events in ascending order by date
  currentAndFutureEvents.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  // Filter events based on search terms
  const filteredCurrentEvents = currentAndFutureEvents.filter((event) =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredPastEvents = pastEvents.filter((event) =>
    event.title.toLowerCase().includes(searchTermArchived.toLowerCase())
  );

  const toggleExpand = (id: number) => {
    setExpandedEvent(expandedEvent === id ? null : id);
  };

  return (
    <main className="container p-6 mx-auto mt-10">
      {/* Search Bar for Current and Future Events */}
      <div className="flex justify-center my-20">
        <input
          type="text"
          placeholder="Search Upcoming Events..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border rounded-md shadow-lg md:w-1/2 focus:outline-none focus:ring focus:ring-[#ffb400]"
        />
      </div>

      {/* Current and Future Events Section */}
      <section>
        <h2 className="mb-6 text-3xl font-semibold text-[#ffb400]">
          Upcoming Events
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {filteredCurrentEvents.length > 0 ? (
            filteredCurrentEvents.map((event) => (
              <div
                key={event.id}
                className="overflow-hidden transition-transform duration-300 transform bg-white shadow-md shadow-gray-200 rounded-2xl hover:scale-105"
              >
                <div className="w-full bg-gray-200 h-44">
                  <img
                    src={event.imageUrl}
                    alt={event.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-[#ffb400]">
                    {event.title}
                  </h3>
                  <p className="text-sm font-semibold text-gray-800">
                    {event.type}
                  </p>
                  <p className="text-sm text-gray-500">
                    Date: {formatDate(event.date)}
                  </p>
                  <p className="text-sm text-gray-500">Time: {event.time}</p>
                  <Link
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-2 font-semibold text-[#ffb400] text-md hover:underline"
                  >
                    Register Here
                  </Link>
                  <button
                    onClick={() => toggleExpand(event.id)}
                    className="mt-2 text-sm font-semibold text-blue-500 hover:underline"
                  >
                    {expandedEvent === event.id ? "Less Info" : "More Info"}
                  </button>
                  {expandedEvent === event.id && (
                    <p className="mt-2 text-gray-700">{event.description}</p>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">
              No upcoming events found.
            </p>
          )}
        </div>
      </section>

      {/*Archived Events Section*/}
      {/* Search Bar for Archived Events */}
      <div className="flex justify-center my-20">
        <input
          type="text"
          placeholder="Search Archived Events..."
          value={searchTermArchived}
          onChange={(e) => setSearchTermArchived(e.target.value)}
          className="w-full px-4 py-2 border rounded-md shadow-lg md:w-1/2 focus:outline-none focus:ring focus:ring-[#ffb400]"
        />
      </div>

      {/* Archived Events Section */}
      <section className="mt-10">
        <h2 className="mb-6 text-3xl font-semibold text-[#ffb400]">
          Archived Events
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {filteredPastEvents.length > 0 ? (
            filteredPastEvents.map((event) => (
              <div
                key={event.id}
                className={`shadow-2xl shadow-gray-200 rounded-xl overflow-hidden opacity-40 transition-all duration-300 hover:opacity-100`}
              >
                {/* Image section at the top half */}
                <div className="w-full bg-gray-200 h-44">
                  <img
                    src={event.imageUrl}
                    alt={event.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                {/* Content section at the bottom half */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-[#ffb400]">
                    {event.title}
                  </h3>
                  <p className="text-sm text-gray-800">{event.type}</p>
                  <p className="text-xs text-gray-500">
                    Date: {formatDate(event.date)}
                  </p>
                  <p className="text-xs text-gray-500">Time: {event.time}</p>
                  <button
                    onClick={() => toggleExpand(event.id)}
                    className="mt-2 text-sm font-semibold text-blue-500 hover:underline"
                  >
                    {expandedEvent === event.id ? "Less Info" : "More Info"}
                  </button>
                  {expandedEvent === event.id && (
                    <p className="mt-2 text-gray-700">{event.description}</p>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">
              No Such Archived Events.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
