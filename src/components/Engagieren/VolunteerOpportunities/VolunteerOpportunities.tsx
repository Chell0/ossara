export default function VolunteerOpportunities() {
    return(
        <>
            <div className="min-h-screen">
                <header className="text-[#ffb400] py-12 text-center">
                    <h1 className="text-4xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">All Volunteer Opportunities</h1>
                </header>
                <section className="px-6 py-16 bg-white">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[...Array(10)].map((_, index) => (
                            <div key={index} className="p-6 border border-gray-200 rounded-lg shadow-xl bg-main-bg">
                                <h3 className="text-xl font-semibold text-[#ffb400]">Volunteer Title {index + 1}</h3>
                                <p className="mt-2 text-gray-500">Short description of the volunteer role.</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </>
    );
}
