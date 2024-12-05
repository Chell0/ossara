import { galdeano } from "@/app/layout";
import Image from "next/image";

export default function Lobby() {
    return (
        <>
            <div className="container mx-auto p-6">
                <header
                    className="text-[#ffb400] py-12 text-center">
                    <h1 className={`${galdeano.className} text-header font-bold leading-tight uppercase`}>
                        Lobby und Netzwerkarbeit
                    </h1>
                </header>

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

                {/* Ansprechppartner */}
                <section className="w-full flex items-center justify-center mt-28 sm:px-2">
                    <div className="bg-blended-gradient shadow-lg rounded-lg max-w-md sm:px-4">
                        <h2 className="text-white text-xl py-4 px-4 sm:text-2xl md:text3xl lg:text-4xl font-semibold text-center">
                            Ansprechpartner
                        </h2>
                    </div>
                </section>

                {/* Ansprechpartner */}
                <section className="flex flex-col md:flex-row items-center gap-10 py-10 mx-10 mt-20 mb-20">
                    <div className="w-full md:w-1/2 flex-shrink-0 flex justify-center">
                        <Image
                            src={`/bgs/img1.jpg`}
                            alt="About Photo"
                            width={400}
                            height={400}
                            className="rounded-xl shadow-xl object-cover sm:w-40 sm:h-40 md:w-72 md:h-72 lg:w-84 lg:h-84"
                        />
                    </div>
                    <div className="w-full md:w-1/2 bg-gray-200 p-4 rounded-md max-w-sm mx-auto">
                        <div className={`space-y-2 p-1 sm:p-2 md:p-3 lg:p-6`}>
                            <p className={`text-sm sm:text-md md:text-lg lg:text-xl font-bold`}>
                                Kontakt: <span className={`font-medium text-orange-600`}>John Doe</span>
                            </p>
                            <p className={`text-sm sm:text-md md:text-lg lg:text-xl font-bold`}>
                                Email: <span className={`font-medium text-orange-600`}>johndoe[a]ossara.de</span>
                            </p>
                            <p className={`text-sm sm:text-md md:text-lg lg:text-xl font-bold`}>
                                Cell: <span className={`font-medium text-orange-600`}>(+49) 123-4567-8910</span>
                            </p>
                        </div>
                    </div>
                </section>

                {/*Netzwerkarbeit*/}
                <section className="w-full flex items-center justify-center mt-28 sm:px-2">
                    <div className="bg-blended-gradient shadow-lg rounded-lg max-w-md sm:px-4">
                        <h2 className="text-white text-xl py-4 px-4 sm:text-2xl md:text3xl lg:text-4xl font-semibold text-center">
                            Netzwerkarbeit
                        </h2>
                    </div>
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
            </div>
        </>
    )
};
