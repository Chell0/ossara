import Link from "next/link";

export default function NewsLetter() {
    return (
        <div className="grid grid-rows-2 items-center justify-center max-w-lg px-6 py-4 p-8 bg-main-bg shadow-xl rounded-3xl mt-20">
            <p className="text-[#ffb400] text-xl lg:text-2xl md:text-md sm:text-sm font-bold text-center">
                Anmeldung zum Newsletter
            </p>
            <div className="flex justify-center mt-5">
                <Link
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#ffb400] hover:bg-blended-gradient hover:text-white text-white font-bold text-md no-underline py-2 px-4 shadow-xl rounded-2xl"
                >
                    ANMELDEN
                </Link>
            </div>
        </div>
    );
}
