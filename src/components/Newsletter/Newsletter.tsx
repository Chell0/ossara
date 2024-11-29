import Link from "next/link";

export default function NewsLetter() {
    return (
        <div className="grid grid-rows-2 items-center justify-center max-w-lg px-6 py-4 border border-orange-300 p-8 bg-white shadow-lg rounded-xl mt-20">
            <p className="text-gray-700 text-xl lg:text-2xl md:text-md sm:text-sm font-bold text-center">
                Anmeldung zum Newsletter
            </p>
            <div className="flex justify-center mt-5">
                <Link
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blended-gradient hover:bg-gray-500 hover:text-white text-white font-semibold text-md no-underline py-2 px-4 shadow-xl rounded-3xl"
                >
                    Anmelden
                </Link>
            </div>
        </div>
    );
}
