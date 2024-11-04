import Image from "next/image";
import YouTubeSection from "@/components/Integrative/YouTubeSection/YouTubeSection";

export default function Lobby() {
    return (
        <>
            <section
                className="flex flex-col items-center justify-center text-center mx-4 sm:mx-10 py-10 sm:py-20 bg-teal-600 rounded-lg shadow-lg">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                    Integrative Stadtteilarbeit
                </h1>
            </section>

            <section className="flex flex-col md:flex-row items-center gap-10 py-10 mx-10 mt-20">
                <div className="w-full md:w-1/2 flex-shrink-0">
                    <Image src={`/bgs/img1.jpg`} alt="About Photo" width={200} height={200}
                           className="w-full h-auto rounded-lg shadow-lg"/>
                </div>
                <div className="w-full md:w-1/2">
                    <p className="mt-4 text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum accumsan
                        fermentum.
                        Pellentesque suscipit vestibulum est eget scelerisque. Nunc faucibus lacus sed nibh
                        fermentum
                        lobortis. Vestibulum risus urna, feugiat ut sem a, condimentum rhoncus nunc. Curabitur
                        vehicula
                        venenatis ipsum vel bibendum. Sed vitae erat ipsum. Maecenas malesuada nisl at congue
                        vehicula.
                        Integer augue odio, elementum ut pretium sed, gravida vel purus. Nulla vestibulum diam a
                        sollicitudin viverra. Aenean convallis finibus laoreet. Quisque posuere odio odio, ac
                        condimentum urna varius eu. Cras congue dolor id ante iaculis facilisis. Nullam in gravida
                        massa. Nulla finibus nunc a venenatis tempus. Nunc vehicula ipsum ut massa suscipit, vitae
                        laoreet ligula condimentum.
                    </p>
                </div>
            </section>

            {/* Sprachförderung */}
            <section className="w-full flex items-center justify-center mt-28 sm:px-2">
                <div className="bg-teal-600 shadow-lg rounded-lg max-w-md sm:px-4">
                    <h2 className="text-white text-xl py-4 px-4 sm:text-2xl md:text3xl lg:text-4xl font-semibold text-center">
                        Ansprechpartner
                    </h2>
                </div>
            </section>

            <section className="flex flex-col md:flex-row items-center gap-10 py-10 mx-10 mt-20">
                <div className="w-full md:w-1/2 flex-shrink-0 flex justify-center">
                    <Image
                        src={`/bgs/img1.jpg`}
                        alt="Contact Person Photo"
                        width={300}
                        height={300}
                        className="rounded-full shadow-lg object-cover sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64"
                    />
                </div>
                <div className="w-full md:w-1/2 bg-gray-200 rounded-lg">
                    <div className={`max-w-lg space-y-2 p-20`}>
                        <p className={`text-xl font-bold`}>Name: <span
                            className={`font-medium text-teal-600`}>John Doe</span></p>
                        <p className={`text-xl font-bold`}>Position: <span className={`font-medium text-teal-600`}>Project Manager</span>
                        </p>
                        <p className={`text-xl font-bold`}>Kontakt: <span
                            className={`font-medium text-teal-600`}>johndoe@example.com</span></p>
                    </div>
                </div>
            </section>

                {/* Video Section */}
            <section className="w-full flex items-center justify-center mt-28 sm:px-2">
                <YouTubeSection videoId="VyLDQsiqqGg"/>
            </section>

            {/* Sprachförderung */}
            <section className="w-full flex items-center justify-center mt-28 sm:px-2">
                <div className="bg-teal-600 shadow-lg rounded-lg max-w-md sm:px-4">
                    <h2 className="text-white text-xl py-4 px-4 sm:text-2xl md:text3xl lg:text-4xl font-semibold text-center">
                        Ansprechpartner
                    </h2>
                </div>
            </section>

            <section className="flex flex-col md:flex-row items-center gap-10 py-10 mx-10 mt-20">
                <div className="w-full md:w-1/2 flex-shrink-0 flex justify-center">
                    <Image
                        src={`/bgs/img1.jpg`}
                        alt="Contact Person Photo"
                        width={300}
                        height={300}
                        className="rounded-full shadow-lg object-cover sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64"
                    />
                </div>
                <div className="w-full md:w-1/2 bg-gray-200 rounded-lg">
                    <div className={`max-w-lg space-y-2 p-20`}>
                        <p className={`text-xl font-bold`}>Name: <span
                            className={`font-medium text-teal-600`}>John Doe</span></p>
                        <p className={`text-xl font-bold`}>Position: <span className={`font-medium text-teal-600`}>Project Manager</span>
                        </p>
                        <p className={`text-xl font-bold`}>Kontakt: <span
                            className={`font-medium text-teal-600`}>johndoe@example.com</span></p>
                    </div>
                </div>
            </section>
        </>
    )
};
