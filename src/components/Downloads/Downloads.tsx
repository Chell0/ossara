import { bebasNeue } from "@/app/fonts";
import Link from "next/link";

export default function Downloads() {
  return (
    <>
      <div className="container p-6 mx-auto">
        {/* Title Section */}
        <header className="text-[#ffb400] text-center py-12">
          <h1
            className={`${bebasNeue.className} drop-shadow-xl text-8xl font-bold leading-tight uppercase`}
          >
            Downloads
          </h1>
        </header>

        <div
          className={`flex justify-between items-center max-w-4xl mx-auto mt-20 mb-20`}
        >
          <p className="text-base">
            Allgemeine Infos zu Ossara finden Sie{" "}
            <button className="p-1 font-semibold text-[#ffb400] rounded-lg bg-main-bg">
              <Link href={`/uber`}>hier</Link>
            </button>
          </p>
        </div>

        {/* Jahresbericht 2023 */}
        <div
          className={`flex justify-between items-center border border-gray-100 rounded-xl p-8 shadow-sm bg-main-bg max-w-4xl mx-auto mt-10`}
        >
          <p className={`text-gray-800 text-base`}>Jahresbericht 2023</p>
          <button className="px-8 py-4 text-base sm:px-4 sm:py-2 md:px-6 md:py-3 font-semibold rounded-xl shadow-xl bg-[#ffb400] text-white hover:bg-blended-gradient transition">
            <Link
              href={`/files/jahresbericht_2023.pdf`}
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

        {/* Jahresbericht 2022 */}
        <div
          className={`flex justify-between items-center border border-gray-100 rounded-xl p-8 shadow-sm bg-main-bg max-w-4xl mx-auto mt-10`}
        >
          <p className={`text-gray-800 text-base`}>Jahresbericht 2022</p>
          <button className="px-8 py-4 text-base sm:px-4 sm:py-2 md:px-6 md:py-3 font-semibold rounded-xl shadow-xl bg-[#ffb400] text-white hover:bg-blended-gradient transition">
            <Link
              href={`/files/jahresbericht_2022.pdf`}
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

        {/* Jahresbericht 2021 */}
        <div
          className={`flex justify-between items-center border border-gray-100 rounded-xl p-8 shadow-sm bg-main-bg max-w-4xl mx-auto mt-10`}
        >
          <p className={`text-base text-gray-800`}>Jahresbericht 2021</p>
          <button className="px-8 py-4 text-base sm:px-4 sm:py-2 md:px-6 md:py-3 font-semibold rounded-xl shadow-xl bg-[#ffb400] text-white hover:bg-blended-gradient transition">
            <Link
              href={`/files/jahresbericht_2021.pdf`}
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

        {/* Stellungnahme */}
        <div
          className={`flex justify-between items-center border border-gray-100 rounded-xl p-8 shadow-sm bg-main-bg max-w-4xl mx-auto mt-10`}
        >
          <p className={`text-base text-gray-800`}>
            Stellungnahme von der Arbeitsgruppe Anti-Schwarzer Rassismus Hamburg
          </p>
          <button className="px-8 py-4 text-base sm:px-4 sm:py-2 md:px-6 md:py-3 font-semibold rounded-xl shadow-xl bg-[#ffb400] text-white hover:bg-blended-gradient transition">
            <Link
              href={`/files/stellungnahme.pdf`}
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

        {/* Wege für bpoc in ausbildung und arbeit bei der stadt Hamburg */}
        <div
          className={`flex justify-between items-center border border-gray-100 rounded-xl p-8 shadow-sm bg-main-bg max-w-4xl mx-auto mt-10`}
        >
          <p className={`text-base text-gray-800`}>
            Wege für bpoc in ausbildung und arbeit bei der stadt Hamburg
          </p>
          <button className="px-8 py-4 text-base sm:px-4 sm:py-2 md:px-6 md:py-3 font-semibold rounded-xl shadow-xl bg-[#ffb400] text-white hover:bg-blended-gradient transition">
            <Link
              href={`/files/stadtHamburg.pdf`}
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

        {/* Ossara e.V. Satzung */}
        <div
          className={`flex justify-between items-center border border-gray-100 rounded-xl p-8 shadow-sm bg-main-bg max-w-4xl mx-auto mt-10`}
        >
          <p className={`text-base text-gray-800`}>Ossara e.V. Satzung</p>
          <button className="px-8 py-4 text-base sm:px-4 sm:py-2 md:px-6 md:py-3 font-semibold rounded-xl shadow-xl bg-[#ffb400] text-white hover:bg-blended-gradient transition">
            <Link
              href={`/files/satzung.pdf`}
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

        {/* Ossara e.V. Beitrittserklärung oder einmalige Spende */}
        <div
          className={`flex justify-between items-center border border-gray-100 rounded-xl p-8 shadow-sm bg-main-bg max-w-4xl mx-auto mt-10`}
        >
          <p className={`text-base text-gray-800`}>
            Ossara e.V. Beitrittserklärung oder einmalige Spende
          </p>
          <button className="px-8 py-4 text-base sm:px-4 sm:py-2 md:px-6 md:py-3 font-semibold rounded-xl shadow-xl bg-[#ffb400] text-white hover:bg-blended-gradient transition">
            <Link
              href={`/files/beitrittserklärung.pdf`}
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

        {/* Unser Logo */}
        <div
          className={`flex justify-between items-center border border-gray-100 rounded-xl p-8 shadow-sm bg-main-bg max-w-4xl mx-auto mt-10`}
        >
          <p className={`text-base text-gray-800`}>
            Andere Formate vom Logo sind auf Anfrage erhältlich
          </p>
          <button className="px-8 py-4 text-base sm:px-4 sm:py-2 md:px-6 md:py-3 font-semibold rounded-xl shadow-xl bg-[#ffb400] text-white hover:bg-blended-gradient transition">
            <Link
              href={`/files/ossara_ev_logo.png`}
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
      </div>
    </>
  );
}
