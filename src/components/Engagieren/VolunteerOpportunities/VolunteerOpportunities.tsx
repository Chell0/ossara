export default function VolunteerOpportunities() {
    return(
        <>
            <div className="min-h-screen">
                <header className="text-[#ffb400] py-12 text-center">
                    <h1 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">All Volunteer Opportunities</h1>
                </header>
                <section className="py-16 bg-white px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {[...Array(10)].map((_, index) => (
                            <div key={index} className="border border-gray-200 shadow-xl p-6 rounded-lg bg-main-bg">
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
