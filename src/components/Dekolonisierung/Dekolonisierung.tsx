import Link from "next/link";

export default function Promo() {
  return (
    <>
      {/* Dekolonisierung */}
      <div
        className={`flex justify-between items-center border border-gray-100 rounded-xl p-8 shadow-sm bg-main-bg max-w-4xl mx-auto mt-10`}
      >
        <p className={`text-base font-semibold text-gray-800`}>
          Promo Dekolonisierung Flyer
        </p>
        <button className="px-8 py-4 text-lg font-semibold rounded-xl shadow-xl bg-[#ffb400] text-white hover:bg-blended-gradient transition">
          <Link
            href={`/files/dekolonisierung.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            download
            className={`flex items-center space-x-2`}
          >
            {/* Download Icon */}
            <svg
              xmlns={`http://www.w3.org/2000/svg`}
              fill={`none`}
              viewBox={`0 0 24 24`}
              strokeWidth={2}
              stroke={`currentColor`}
              className={`w-5 h-5`}
            >
              <path
                strokeLinecap={`round`}
                strokeLinejoin={`round`}
                d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2m-5-4l-3 3m0 0l-3-3m3 3V4"
              />
            </svg>
            <span>Download Now</span>
          </Link>
        </button>
      </div>

      {/* Promotorinnen */}
      <div
        className={`flex justify-between items-center border border-gray-100 rounded-xl p-8 shadow-sm bg-main-bg max-w-4xl mx-auto mt-10`}
      >
        <p className={`text-base font-semibold text-gray-800`}>
          Flyer HH Promotorinnen
        </p>
        <button className="px-8 py-4 text-lg font-semibold rounded-xl shadow-xl bg-[#ffb400] text-white hover:bg-blended-gradient transition">
          <Link
            href={`/files/dekolonisierung.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            download
            className={`flex items-center space-x-2`}
          >
            {/* Download Icon */}
            <svg
              xmlns={`http://www.w3.org/2000/svg`}
              fill={`none`}
              viewBox={`0 0 24 24`}
              strokeWidth={2}
              stroke={`currentColor`}
              className={`w-5 h-5`}
            >
              <path
                strokeLinecap={`round`}
                strokeLinejoin={`round`}
                d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2m-5-4l-3 3m0 0l-3-3m3 3V4"
              />
            </svg>
            <span>Download Now</span>
          </Link>
        </button>
      </div>
    </>
  );
}
