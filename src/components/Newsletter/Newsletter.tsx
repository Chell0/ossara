import Link from "next/link";

export default function NewsLetter() {
  return (
    <>
      <div className="px-12 py-12 text-center border border-gray-100 rounded-lg shadow-md bg-main-bg">
        <h3 className="text-[#ffb400] font-bold text-xl sm:text-md md:text-lg lg:text-2xl xl:text-3xl">
          Anmeldung zum Newsletter
        </h3>
        <div className="flex justify-center mt-6">
          <button className="px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base md:px-8 md:py-4 md:text-lg font-semibold rounded-lg bg-[#ffb400] text-white hover:bg-blue-600 transition">
            <Link href="#">Anmelden</Link>
          </button>
        </div>
      </div>
    </>
  );
}
