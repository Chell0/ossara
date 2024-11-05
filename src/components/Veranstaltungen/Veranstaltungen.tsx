"use client";

import { useState } from 'react';

type Event = {
    id: number;
    title: string;
    type: string;
    date: string; // Format: 'YYYY-MM-DD'
    time: string;
    link: string;
    description: string;
};


const eventsData: Event[] = [
    {
        id: 1,
        title: 'Empowering Communities through Education',
        type: 'Workshop',
        date: '2024-11-28',
        time: '10:00 AM',
        link: 'https://ossara.org/register',
        description: 'A workshop focused on the importance of education in community empowerment. Learn strategies and tools to foster educational growth and cultural exchange, with a focus on Ossara e.V.\'s initiatives in Togo.',
    },
    {
        id: 2,
        title: 'Health Awareness Seminar',
        type: 'Seminar',
        date: '2024-11-26',
        time: '9:00 AM',
        link: 'https://ossara.org/register',
        description: 'Join us for a seminar aimed at promoting health awareness and preventive care in underserved communities. This event highlights Ossara e.V.\'s work to improve health outcomes in regions like Kara and Defalé.',
    },
    {
        id: 3,
        title: 'Educational Workshop on Cultural Diversity',
        type: 'Workshop',
        date: '2024-11-21',
        time: '2:00 PM',
        link: 'https://ossara.org/register',
        description: 'Explore the importance of cultural diversity and inclusion in community development, especially in Togo.',
    },
    {
        id: 4,
        title: 'Health and Wellness Training',
        type: 'Training',
        date: '2024-11-18',
        time: '10:00 AM',
        link: 'https://ossara.org/register',
        description: 'A training session focused on promoting health awareness and preventive healthcare practices.',
    },
    {
        id: 5,
        title: 'Digital Skills Workshop',
        type: 'Workshop',
        date: '2024-11-10',
        time: '9:00 AM',
        link: 'https://ossara.org/register',
        description: 'Learn essential digital skills to boost employability and educational opportunities in underserved regions.',
    },
    {
        id: 6,
        title: 'Community Building and Engagement',
        type: 'Workshop',
        date: '2024-11-02',
        time: '1:00 PM',
        link: 'https://ossara.org/register',
        description: 'A workshop aimed at enhancing community engagement and sustainable development practices.',
    },
    {
        id: 7,
        title: 'Cultural Heritage Preservation Training',
        type: 'Training',
        date: '2024-10-27',
        time: '10:00 AM',
        link: 'https://ossara.org/register',
        description: 'Training on the preservation of cultural heritage, with a focus on Togo\'s unique traditions and practices.',
    },
    {
        id: 8,
        title: 'Basic First Aid Training',
        type: 'Training',
        date: '2024-10-20',
        time: '11:00 AM',
        link: 'https://ossara.org/register',
        description: 'An essential training session on first aid practices for local community members.',
    },
    {
        id: 9,
        title: 'Financial Literacy Workshop',
        type: 'Workshop',
        date: '2024-10-15',
        time: '3:00 PM',
        link: 'https://ossara.org/register',
        description: 'Learn basic financial literacy skills to promote economic empowerment in local communities.',
    },
    {
        id: 10,
        title: 'Women’s Health and Empowerment Workshop',
        type: 'Workshop',
        date: '2024-10-11',
        time: '1:00 PM',
        link: 'https://ossara.org/register',
        description: 'A workshop focusing on women’s health and empowerment, covering topics such as reproductive health and leadership.',
    },
    {
        id: 11,
        title: 'Sustainable Agriculture Practices Training',
        type: 'Training',
        date: '2024-10-05',
        time: '9:00 AM',
        link: 'https://ossara.org/register',
        description: 'A training program on sustainable agriculture practices to enhance food security in rural areas.',
    },
];



const formatDate = (date: string) => new Date(date).toLocaleDateString();

export default function Veranstaltungen() {
    const [expandedEvent, setExpandedEvent] = useState<number | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchTermArchived, setSearchTermArchived] = useState('');

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
        <main className="container mx-auto p-6">
            <section className="flex flex-col items-center justify-center text-center mx-4 sm:mx-10 py-10 sm:py-20 bg-teal-600 rounded-lg shadow-lg">
                 <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">Veranstaltungen </h1>
            </section>

            {/* Search Bar for Current and Future Events */}
            <div className="flex justify-center my-20">
                <input
                    type="text"
                    placeholder="Search upcoming events..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="px-4 py-2 w-full md:w-1/2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
                />
            </div>

            {/* Current and Future Events Section */}
            <section>
                <h2 className="text-2xl font-bold mb-6">Upcoming Events</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredCurrentEvents.length > 0 ? (
                        filteredCurrentEvents.map((event) => (
                            <div
                                key={event.id}
                                className="bg-white shadow-md rounded-lg p-4"
                            >
                                <h3 className="text-lg font-semibold">{event.title}</h3>
                                <p className="text-sm text-gray-500">{event.type}</p>
                                <p className="text-sm text-gray-500">
                                    Date: {formatDate(event.date)}
                                </p>
                                <p className="text-sm text-gray-500">Time: {event.time}</p>
                                <a
                                    href={event.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 font-semibold text-md hover:underline mt-2 block"
                                >
                                    Register Here
                                </a>
                                <button
                                    onClick={() => toggleExpand(event.id)}
                                    className="mt-2 text-blue-500 text-sm hover:underline"
                                >
                                    {expandedEvent === event.id ? 'Less Info' : 'More Info'}
                                </button>
                                {expandedEvent === event.id && (
                                    <p className="mt-2 text-gray-700">{event.description}</p>
                                )}
                            </div>
                        ))
                    ) : (
                        <p>No upcoming events found.</p>
                    )}
                </div>
            </section>

            {/* Archived Events Section */}
            <section className="mt-10">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold">Archived Events</h2>
                    <input
                        type="text"
                        placeholder="Search archived events..."
                        value={searchTermArchived}
                        onChange={(e) => setSearchTermArchived(e.target.value)}
                        className="px-4 py-2 w-full md:w-1/3 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredPastEvents.length > 0 ? (
                        filteredPastEvents.map((event) => (
                            <div
                                key={event.id}
                                className="bg-gray-100 shadow-md rounded-lg p-4"
                            >
                                <h3 className="text-md font-semibold">{event.title}</h3>
                                <p className="text-sm text-gray-500">{event.type}</p>
                                <p className="text-sm text-gray-500">
                                    Date: {formatDate(event.date)}
                                </p>
                                <p className="text-sm text-gray-500">Time: {event.time}</p>
                                <button
                                    onClick={() => toggleExpand(event.id)}
                                    className="mt-2 text-blue-500 text-sm hover:underline"
                                >
                                    {expandedEvent === event.id ? 'Less Info' : 'More Info'}
                                </button>
                                {expandedEvent === event.id && (
                                    <p className="mt-2 text-gray-700">{event.description}</p>
                                )}
                            </div>
                        ))
                    ) : (
                        <p>No archived events found.</p>
                    )}
                </div>
            </section>
        </main>
    );
}


















// export default function Dekoloniale() {
//     return (
//         <>
//             <section
//                 className="flex flex-col items-center justify-center text-center mx-4 sm:mx-10 py-10 sm:py-20 bg-teal-600 rounded-lg shadow-lg">
//                 <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
//                     Veranstaltungen
//                 </h1>
//             </section>
//         </>
//     )
// };
