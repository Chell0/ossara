import Link from "next/link";

export default function Donate() {
  return (
    <>
      <div className="bg-main-bg text-center py-12 px-6 border border-gray-100 rounded-lg shadow-md">
        <h2 className="text-[#ffb400] font-bold text-xl sm:text-md md:text-lg lg:text-2xl xl:text-3xl">
          Unterstütze Uns Und Werde Supporter*in
        </h2>
        <div className="mt-6">
          <button className="px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base md:px-8 md:py-4 md:text-lg font-semibold rounded-lg bg-[#ffb400] text-white hover:bg-blue-600 transition">
            <Link href="/fordern">Fördern & Spenden</Link>
          </button>
        </div>
      </div>
    </>
  );
}
