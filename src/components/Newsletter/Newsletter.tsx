import Link from "next/link";

export default function NewsLetter() {
    return (
        <div className="grid grid-rows-2 items-center justify-center max-w-lg px-6 py-4 border border-orange-300 p-8 bg-title-bg shadow-lg rounded-3xl mt-20">
            <p className="text-gray-600 text-xl lg:text-2xl md:text-md sm:text-sm font-bold text-center">
                Anmeldung zum Newsletter
            </p>
            <div className="flex justify-center mt-5">
                <Link
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-main-bg hover:bg-blended-gradient hover:text-white text-gray-600 font-semibold text-md no-underline py-2 px-4 shadow-xl rounded-2xl"
                >
                    Anmelden
                </Link>
            </div>
        </div>
    );
}
