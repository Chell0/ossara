import Image from "next/image";

export default function Sponsors() {
    return (
        <>
            {/* Sponsors section */}
            <section className="w-full flex items-center justify-center sm:px-2">
                <div className="bg-blended-gradient shadow-lg rounded-lg w-full max-w-md sm:px-4">
                    <h2 className="text-white text-xl py-4 px-4 sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-center">
                        Unser Sponsors
                    </h2>
                </div>
            </section>
            <section className="mt-6 px-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    <div className="bg-bone flex items-center justify-center font-semibold text-smokyBlack text-md p-2">
                        <p>Gefördert durch: ENGAGEMENT GLOBAL</p>
                    </div>
                    <div className="bg-bone flex items-center justify-center font-semibold text-smokyBlack text-md p-2">
                        <p>mit Mitteln des</p>
                    </div>
                    <div className="relative flex items-center justify-center w-full h-[20vh] text-center">
                        <Image
                            src={`/logos/image-1.png`}
                            alt="Sponsor Logo"
                            width={150}
                            height={150}
                            quality={100}
                            className={`object-contain`}
                        />
                    </div>
                    <div className="relative flex items-center justify-center w-full h-[20vh] text-center">
                        <Image
                            src={`/logos/image-2.jpeg`}
                            alt="Sponsor Logo"
                            width={150}
                            height={150}
                            quality={100}
                            className={`object-contain`}
                        />
                    </div>
                    <div className="relative flex items-center justify-center w-full h-[20vh] text-center">
                        <Image
                            src={`/logos/image-3.jpg`}
                            alt="Sponsor Logo"
                            width={150}
                            height={150}
                            quality={100}
                            className={`object-contain`}
                        />
                    </div>
                    <div className="relative flex items-center justify-center w-full h-[20vh] text-center">
                        <Image
                            src={`/logos/image-4.jpg`}
                            alt="Sponsor Logo"
                            width={150}
                            height={150}
                            quality={100}
                            className={`object-contain`}
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
